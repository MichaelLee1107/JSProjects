/**
 * FileName    : class.js
 * ProjectName : JSProjects
 * Author      : michaellee
 * Created Date: 2019-02-02 16:48:47
 * Description : 
 * -----
 * Last Modified: michaellee
 * Modified By  : 2019-02-02 16:48:47
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */

 class  MyClass{
    constructor(name,age){
        this.name = name;
        this.age = age;
        return this;
    };
    print(){
        console.log(this.name);
    }
 };

class ChildClass extends MyClass {
    constructor(name,age){
        super();
        this.name = name;
        this.age = age;
    }
    print1(name){
        console.log(name);
 
    }
}


 let myclass = new ChildClass('liwenbin',66);
 //myclass.print();
 myclass.print();
 