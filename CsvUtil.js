const json2csv = require('json2csv');

let response = null;

//开始下载前调用该方法设置http头

const beforeDownLoadCsv = async (res, fileName) => {

    response = res;

    await response.setHeader('Content-disposition', `attachment; filename=` + encodeURIComponent(fileName) + '.csv');

    await response.writeHead(200, { 'Content-Type': 'text/csv;charset=utf-8' });

}

//调用该方法分批写入数据到csv文件

const downLoadCsv = async (data, fields, header, flag) => {

    if (data.length === 0) {

        let obj = {}

        fields.forEach(v => obj[v] = ' ')

        data.push(obj)

    }

    let csv = json2csv({ data: data, fields: fields, fieldNames: header, del: ',\t', quotes: '' })

    let lastItem = header[header.length - 1]

    flag && (csv = csv.substr((csv.indexOf(lastItem) + lastItem.length + 1), csv.length))

    csv = Buffer.concat([newBuffer('\xEF\xBB\xBF', 'binary'), newBuffer(csv)])

    await response.write(csv)

    await response.write('\n')

}

const stopDownLoadCsv = async () => {

    await response.end();

}

module.exports = {

    beforeDownLoadCsv,

    downLoadCsv,

    stopDownLoadCsv

}