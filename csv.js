const Json2csvParser = require('json2csv').Parser;
const fs = require('fs');
const fields = ['汽车', '价格', '颜色'];
const myCars = [
  {
    "汽车": "奥迪",
    "价格": 40000,
    "颜色": "蓝色"
  }, {
    "汽车": "宝马",
    "价格": 35000,
    "颜色": "black"
  }, {
    "汽车": "保时捷",
    "价格": 60000,
    "颜色": "green"
  }
];
const json2csvParser = new Json2csvParser({ fields });
//const csv = Buffer.concat([new Buffer('\xEF\xBB\xBF', 'binary'), new Buffer(son2csvParser.parse(myCars))])
const csv = json2csvParser.parse(myCars);
fs.writeFileSync(`${new Date().getTime()}`+'.csv',csv ,'utf-8');


// // console.log(blob);

// const fs = require('fs');
// const Json2csvTransform = require('json2csv').Transform;

// //const fields = ['李文斌','field2','field3'];
// const opts = {fields};
// const transformOpts = { highWaterMark: 16384, encoding: 'utf-8' };
// const inputPath = '1.csv';
// const outputPath = '345.csv' 
// const input = fs.createReadStream(inputPath, { encoding: 'utf8' });
// const output = fs.createWriteStream(outputPath, { encoding: 'utf8' });
// const json2csv = new Json2csvTransform(opts, transformOpts);

// const processor = input.pipe(json2csv).pipe(output);

// // You can also listen for events on the conversion and see how the header or the lines are coming out.
// json2csv
//   .on('header', header => console.log(header))
//   .on('line', line => console.log(line))
//   .on('error', err => console.log(err));