str= '<table border="1">'
for(let h=1;h<10;++h){
    str += '<tr>'
    for(var k=1;k<10;++k){
        str += '<td>&nbsp;</td>'
    }
    str += '</tr>'
}
str += '</table>'
document.getElementById('table1').innerHTML = str

str = '<table border="1">'
for(let i=9;i>0;--i){
    str += '<tr>'
    for(var j=i;j>0;--j){
        str += '<td>&nbsp;</td>'
    }
    str += '</tr>'
}
str += '</table>'
document.getElementById('table2').innerHTML = str

str = '<table border="1">'
for(let i=9;i>0;--i){
    str += '<tr>'
    for(var j=i;j>0;--j){
        str += '<td>' + j + '*' + i + '=' + ( j*i ) + '</td>'
    }
    str += '</tr>'
}
str += '</table>'
document.getElementById('table3').innerHTML = str