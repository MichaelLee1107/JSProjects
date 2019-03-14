var pdf = require('pdfkit');
var fs = require('fs');
var pdfo = new pdf();
var text = 'What you wanna write to the pdf document.';
 
pdfo.pipe(fs.createWriteStream('Aim.pdf'));
pdfo.text(text,0,0);
pdfo.end();