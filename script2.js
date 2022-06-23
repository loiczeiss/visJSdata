let table1 = document.getElementById('table1');
let values1 = [];


function getdatas1(index){

  let vaL1 = []
  for (var i = 2; i < table1.rows.item(index).cells.length; i++) {  
    vaL1.push(parseFloat(table1.rows.item(index).cells.item(i).innerHTML.replace(/,/g, ".")))     }
values1.push(vaL1)
}
for ( let i =2; i< 37; i++ ) {
    getdatas1(i)}
    console.log(values1)

let arrayCountry1 = []

function CreateObject1( index) {
  const dataObj1 = {
    label: table1.rows.item(index).cells.item(1).innerHTML,
    data: values1[index],
    borderColor: `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${(Math.floor(Math.random()*255))}`
  }
  arrayCountry1.push(dataObj1)
}
for (let j = 2; j<30; j++) {
  console.log(j);
  CreateObject1(j);
}
console.log(arrayCountry1)

let labelsTable1 = []
  //labels data
  for (let i =2; i < table1.rows.item(1).cells.length; i++){
    labelsTable1.push(table1.rows.item(1).cells.item(i).innerHTML)
 }

 const data = {
  labels: labelsTable1,
  datasets: arrayCountry1
};

const config = {
  type: 'line',
  data: data,
  options: {}
};

var canvas=$('<canvas id="chart1"></canvas>');
var before=$('#table1');

$(canvas).insertBefore(before);

const myChart = new Chart(
  document.getElementById('chart1'),
  config
);





  var table = document.getElementById("table2");
  let values = [];

function getdatas(index){

  let vaL = []
for (var i = 2; i < table.rows.item(index).cells.length; i++) {         
  vaL.push(parseFloat(table.rows.item(index).cells.item(i).innerHTML))
}
values.push(vaL)
}
for ( let i =1; i< 30; i++ ) {
//  console.log(i)
  getdatas(i)}

 let arrayCountry =[]
 
function CreateObject(index) {
  const dataObj = {
    label: table2.rows.item(index).cells.item(1).innerHTML,
    data: values[index-1],
    borderColor: `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${(Math.floor(Math.random()*255))}`
  }
  arrayCountry.push(dataObj)
}


  for (let j = 1; j<30; j++) {
    console.log(j);
    CreateObject(j);
  }
console.log(arrayCountry)


  console.log(values)
let labelsTable = []
  //labels data
  for (let i =2; i < table2.rows.item(0).cells.length; i++){
    labelsTable.push(table2.rows.item(0).cells.item(i).innerHTML)
  console.log(table2.rows.item(0).cells.item(i).innerHTML)}
console.log(labelsTable)

const data1 = {
  labels: labelsTable,
  datasets: arrayCountry
};

const config1 = {
  type: 'line',
  data: data1,
  options: {}
};

var canvas1=$('<canvas id="chart2"></canvas>');
var before1=$('#table2');

$(canvas1).insertBefore(before1);

const myChart1 = new Chart(
  document.getElementById('chart2'),
  config1
);
