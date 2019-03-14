'use strict';

angular.module('app').service('LIBS', ['$location','$document', '$timeout','$localStorage','$rootScope','$sessionStorage', function ($location,$document, $timeout,$localStorage,$rootScope,$sessionStorage) {
   var self = this;
   this.object = {
          version:'1.2.0',
          apikey:"",
          objectid:"hztest",
          lang:1,
          isSmartDevice:false,
          eMapEnable:true,
          user:{
               id:"",
               name:"",
               type:"",
               role:"",
               headImg:"",
               isOnLine:false,
               accessPermissions:{}
          },
          systemInfo:{},
          isEnableAlarmedGUIAutoJump:true,
          mqttWebSocketListenPort:0
     };

     // if ( angular.isDefined($localStorage.object) ) {
     //      this.object = $localStorage.object;
     // }
     // else {
     //      $localStorage.object = this.object;
     // }

     this.agency = {
          apikey:"",
          lang:1
     };

    // 函数模块
    this.timer = libs_timerModule;

    // m2link
    this.m2link = "";

    this.test = {
        externData:[],
        uiLocalRPC:[]
    }

    if ( angular.isDefined($localStorage.test) ) {
        this.test = $localStorage.test;
    }
    else {
        $localStorage.test = this.test;
    }
    this.nav = [];
    this.sidebar=[];

    this.alert = function (type,title,content,callBack) {
          if(type=="error")
          {
               layer.alert(content, {
                        icon: 2,
                        shadeClose: true,
                        skin: 'layer-ext-moon',
                        title: title
                   },
                   function(index){
                       if((callBack!=undefined)&&(callBack!="")) {
                           callBack();
                       }
                        layer.close(index);
                   });
          }
          else if(type=="info")
          {
               layer.alert(content, {
                       icon: 3,
                        shadeClose: true,
                        skin: 'layer-ext-moon',
                        title: title
                   },
                   function(index){
                       if((callBack!=undefined)&&(callBack!="")) {
                           callBack();
                       }
                        layer.close(index);
                   });
          }
          else if(type=="success")
          {
               layer.alert(content, {
                        icon: 1,
                        shadeClose: true,
                        skin: 'layer-ext-moon',
                        title: title
                   },
                   function(index){
                       if((callBack!=undefined)&&(callBack!="")) {
                           callBack();
                       }
                        layer.close(index);
                   });
          }
     }

    this.confirm = function (content,callBack) {
          layer.confirm(content, {
               icon: 3,
               title:"确认对话框",
               btn: ['确定','取消'] //按钮
          }, function(index){
               layer.close(index);
              if((callBack!=undefined)&&(callBack!="")) {
                  callBack(true);
              }
          }, function(index){
               layer.close(index);
              if((callBack!=undefined)&&(callBack!="")) {
                  callBack(false);
              }
          });
     }

    this.getResourceConfigByID = function(cfgid, datas) {

        var rdata = {
            type:"",
            attr:{},
            bind:{},
            privates:{}
        };

        rdata.privates = datas.privates;

        for (var i=0; i<datas.attributes.length; i++) {
            if(datas.attributes[i].attributes==undefined)
            {
                continue;
            }
            for (var j=0; j<datas.attributes[i].attributes.length; j++) {
                if (cfgid == datas.attributes[i].attributes[j].id) {
                    rdata.attr = datas.attributes[i].attributes[j];
                    return rdata.attr;
                }
            }
        }

        for (var i=0; i<datas.datasBindTable.length; i++) {
            if (cfgid == datas.datasBindTable[i].id) {
                rdata.bind = datas.datasBindTable[i];
                return rdata.bind;
            }
        }

        return {};
    };

    // 获取资源的现场信息    getResourceScene   浮贴
    this.getResourceScene = function (rid) {
        var name = "ehzRES_" + this.object.objectid + "_" + this.object.user.id + "_" + rid.toString();
        var scene = {};
        if (angular.isDefined($localStorage.ehzOSResourceScene)) {
            if (angular.isDefined($localStorage.ehzOSResourceScene[name])) {
                scene = $localStorage.ehzOSResourceScene[name];
                return scene;
            }
        }

        return {};
    };

    // 保存资源的现场信息    setResourceScene 浮贴
    this.setResourceScene = function (rid,value) {
        var name = "ehzRES_" + this.object.objectid + "_" + this.object.user.id + "_" + rid.toString();

        if (angular.isDefined($localStorage.ehzOSResourceScene)) {
            if (angular.isDefined($localStorage.ehzOSResourceScene[name])) {
                $localStorage.ehzOSResourceScene[name] = value;
                return 0;
            }
            else {
                $localStorage.ehzOSResourceScene[name] = value;
                return 1;
            }
        }
        else {
            $localStorage.ehzOSResourceScene = {};
            $localStorage.ehzOSResourceScene[name] = value;
        }
        return 2;
    };


   // 保存属性
   this.setResourceAttr = function (rid, attrid,value) {
      var name = "ehzRES_" + this.object.objectid + "_" + this.object.user.id + "_attr_" + rid.toString();
      if (angular.isDefined($localStorage.ehzOSAttribute)) {
         if (angular.isDefined($localStorage.ehzOSAttribute[name])) {
            $localStorage.ehzOSAttribute[name][attrid] = value;
            return 0;
         }
         else {
            $localStorage.ehzOSAttribute[name]={};
            $localStorage.ehzOSAttribute[name][attrid] = value;
            return 1;
         }
      }
      else {
         $localStorage.ehzOSAttribute = {};
         $localStorage.ehzOSAttribute[name]={};
         $localStorage.ehzOSAttribute[name][attrid] = value;
      }
      return 2;
   };

   // 获取属性
   this.getResourceAttr = function (rid,attrid) {
      var name = "ehzRES_" + this.object.objectid + "_" + this.object.user.id + "_attr_" + rid.toString();
      var scene = {};
      if (angular.isDefined($localStorage.ehzOSAttribute)) {
         if(angular.isDefined($localStorage.ehzOSAttribute[name])){
            if (angular.isDefined($localStorage.ehzOSAttribute[name][attrid])) {
               scene = $localStorage.ehzOSAttribute[name][attrid];
               return scene;
            }
         }else{
            return {};
         }
      }
      return {};
   };

   //删除保存的属性
   this.deleteResourceAttr=function(){
      $sessionStorage.ehzOSAttribute = {};
   }


   // 提取资源的属性信息
    this.extractResourceAttributes = function(attributes, callBack) {
        for (var i=0; i<attributes.length; i++) {
            if (attributes[i].attributes == undefined) {
                continue;
            }
            for (var j=0; j<attributes[i].attributes.length; j++) {
                callBack(0, attributes[i].groupid, attributes[i].attributes[j].id, attributes[i].attributes[j]);
            }
        }
        callBack(1);
    };


    this.setIndicator = function(appid, indicator){
        var indicatorId = 'indicator'+  appid;
        $localStorage[indicatorId] = indicator;
    }
    this.getIndicator = function(appid){
        var indicatorId = 'indicator'+appid;
        var indicator = $localStorage[indicatorId];
        var indicatorW = indicator? indicator.indicatorW: 1;
        var indicatorH = indicator? indicator.indicatorH: 1;
        return {
            indicatorW: indicatorW,
            indicatorH: indicatorH
        }
    }

    // 获取资源属性
    this.getResourceAttribute = function(attrid, attributes) { //rid
        for (var i=0; i<attributes.length; i++) {
            if (attributes[i].attributes == undefined) {
                continue;
            }
            for (var j=0; j<attributes[i].attributes.length; j++) {
                if (attrid == attributes[i].attributes[j].id) {
                    return attributes[i].attributes[j];
                }
            }
        }

        return null;
    };

    this.toastPer = function(msg, duration){
        duration=isNaN(duration)?3000:duration;
        var m = document.createElement('div');
        m.innerHTML = msg;
        m.style.cssText="width:20%; min-width:100px; font-size:20px; background:#000; opacity:0.8; min-height:60px;" +
            " color:#fff;" +
            " line-height:60px; text-align:center; border-radius:5px; position:fixed; top:30%; left:40%;" +
            " z-index:999999; ";
        document.body.appendChild(m);
        setTimeout(function() {
            var d = 0.5;
            m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
            m.style.opacity = '0';
            setTimeout(function() { document.body.removeChild(m) }, d * 1000);
        }, duration);
    }

    // 获取资源绑定数据的属性
    this.getResourceBindData = function(dataid, datasBindTable) {
        for (var i=0; i<datasBindTable.length; i++) {
            if (dataid == datasBindTable[i].id) {
                return datasBindTable[i];
            }
        }

        return null;
    };

    // 页面信息提示
    this.toaster = function (type, title, text) {}
    this.IBUS = {
        widgets:{},
        register:function (rid, model) {
            if(rid!=undefined){
               this.widgets[rid] = model;
            }else{
               return;
            }

        },
        get:function (rid, id, callBack) {
            if(this.widgets[rid]==undefined || this.widgets[rid].get(id) == undefined){
                if(callBack && _.isFunction(callBack))
                    callBack(0, self.getResourceAttr(rid,id));
                else
                    return self.getResourceAttr(rid,id);
            }else{
                if(callBack && _.isFunction(callBack))
                    callBack(0, this.widgets[rid].get(id));
                else
                    return this.widgets[rid].get(id);
            }
        },
        set:function (rid, id, attrName, value, callBack) {
            if(!rid || !id || !attrName)
                return;
            this.widgets[rid].set(id, attrName, value, callBack);
        },
        rpc:function (rid, name, datas, callBack) {
            if (_.isEmpty(this.widgets[rid]) || _.isEmpty(this.widgets[rid].servers)) 
                return;

            for (var i=0; i < this.widgets[rid].servers.length; i++){
                if (this.widgets[rid].servers[i].name === name) {
                    this.widgets[rid].servers[i].server(0, datas, callBack);
                    break;
                }
            }
        },
        unregister:function(rid){
            for(var key in this.widgets){
                if(key === rid){
                    delete widgets[key];
                    break;
                }
            }
        },
        getServer:function (rid, name) {
            if(!rid)
                return;            
            if(!name) {
                if(this.widgets[rid])
                    return this.widgets[rid].servers || [];
                else
                    return [];
            }
            var rdata = {};
            if (this.widgets == null || this.widgets[rid] == null || this.widgets[rid].servers == null) {
                return rdata;
            }
            for (var i=0; i<this.widgets[rid].servers.length; i++){
                if (this.widgets[rid].servers[i].name === name) {
                    rdata = this.widgets[rid].servers[i].server;
                    break;
                }
            }
            return rdata;
        }
    };


   //标准输入138 出参转换
    this.paramsTransition=function(type,params){
        if(type=='json'){
            var _json={};
            for(var i=0;i<params.length;i++){
                if(params[i].mode==1){
                    _json[params[i].id]='{{#'+params[i].value+'}}';
                }else{
                    _json[params[i].id]=params[i].value;
                }
            }
            return _json;
        }else{
            var _arr=[];
            for(var key in params){
                var _json='';
                if(typeof(params[key])!='string'){
                    params[key]=JSON.stringify(params[key]);
                }
                if(params[key].indexOf('{{#')>=0){
                    var _value=params[key].replace('{{#','').replace('}}','');
                    _json='{id:"'+key+'",mode:1,value:"'+_value+'"}';
                }else{
                    if(params[key]==''){
                        _json='{id:"'+key+'",mode:0,value:""}';
                    }else{
                        _json='{id:"'+key+'",mode:0,value:"'+params[key]+'"}';
                    }
                }
                _json=eval('(' + _json + ')');
                _arr.push(_json);
            }
            return _arr;
        }

    };
    //时间转化成标准时间
    this.format=function(time, format){
       var t = new Date(time);
       var tf = function(i){return (i < 10 ? '0' : '') + i};
       return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a){
          switch(a){
             case 'yyyy':
                return tf(t.getFullYear());
                break;
             case 'MM':
                return tf(t.getMonth() + 1);
                break;
             case 'mm':
                return tf(t.getMinutes());
                break;
             case 'dd':
                return tf(t.getDate());
                break;
             case 'HH':
                return tf(t.getHours());
                break;
             case 'ss':
                return tf(t.getSeconds());
                break;
          }
       })
    };
}]);


angular.module('app').service('otherWiseService', ['$location','$document', '$timeout','$localStorage','$rootScope','$sessionStorage', function ($location,$document, $timeout,$localStorage,$rootScope,$sessionStorage) {
	var indexUrl = '/access/adminLogin'
	this.otherwise = indexUrl;
}]);