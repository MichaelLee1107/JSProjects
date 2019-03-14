
const Influx = require('influx');
let client = new Influx.InfluxDB({
    'host': '10.10.11.227',
    'port': 8086,
    'database': "hliot",
    'username':'',
    'password':''
});

//console.log(client);
// client.onError((err)=>{
// 	console.log(err);
// })

// var tab = {
// 	 "table" : "equipment_value_history_data",
//          "schema":[
//              {
//                  "measurement": 'equipment_value_history_data',
//                  "fields": {
//                     "value": 23,
//                     "lastValue": 22,
//                     "lastValue": 1551782936763,
//                     "etimestamp": 1551782936763

//                  },
//                  "tags": {
//                    'eid':'a155f9603c0511e9bbf07d417c1107eb',
//                    'id':'a155f9603c0511e9bbf07d417c1107eb_code',
//                    'oid':'a155f9603c0511e9bbf07d417c1107eb',
//                    'type':2
//                  }
//              }
//  	]
// };

const queryHistoryDataSql = 'SELECT * FROM "equipment_alarm_history_data" WHERE time > \'2019-03-05 00:00:00\' and time <\'2019-03-08 00:00:00\'';


client.query(queryHistoryDataSql).then(result => {
        console.log(result);
    })
    .catch(console.error);

// if (queryHistoryData && !queryHistoryData.length) {
//     resolve();
//     return
// } else {
//     queryHistoryData.map(item => {
//         item.recordeTime = tool.FormatLocaDate(new Date(item.time._nanoISO));
//         delete item.time;
//     })
// };