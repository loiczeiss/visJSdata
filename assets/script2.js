/* The above code is creating a variable called table1 and assigning it to the table with the id of
table1. It is also creating a variable called values1 and assigning it to an empty array. */
let table1 = document.getElementById('table1');
let values1 = [];


/**
 * It takes the index of the row in the table and pushes the values of the cells in the row to the
 * values1 array.
 * @param index - the row number
 */
function getdatas1(index){
  let vaL1 = []
  for (var i = 2; i < table1.rows.item(index).cells.length; i++) {  
    vaL1.push(parseFloat(table1.rows.item(index).cells.item(i).innerHTML.replace(/,/g, ".")))     }
values1.push(vaL1)
}

/* Looping through the table and pushing the values of the cells in the row to the values1 array. */

for ( let i =2; i< 37; i++ ) {
    getdatas1(i)}
    console.log(values1)

/* Creating an empty array called arrayCountry1. */
let arrayCountry1 = []

/**
 * The function takes in an index, creates an object with the label, data, and borderColor properties,
 * and pushes the object into an array.
 * @param index - the index of the row in the table
 */
function CreateObject1( index) {
  const dataObj1 = {
    label: table1.rows.item(index).cells.item(1).innerHTML,
    data: values1[index],
    borderColor: `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${(Math.floor(Math.random()*255))}`
  }
  arrayCountry1.push(dataObj1)
}

/* Looping through the table and pushing the values of the cells in the row to the values1 array. */
for (let j = 2; j<30; j++) {
  console.log(j);
  CreateObject1(j);
}


/* Creating an empty array called labelsTable1. */
let labelsTable1 = []
  //labels data
  for (let i =2; i < table1.rows.item(1).cells.length; i++){
    labelsTable1.push(table1.rows.item(1).cells.item(i).innerHTML)
 }

/* Creating an object called data with two properties, labels and datasets. The labels property is
assigned to the labelsTable1 array and the datasets property is assigned to the arrayCountry1 array. */
 const data = {
  labels: labelsTable1,
  datasets: arrayCountry1
};

const config = {
  type: 'line',
  data: data,
  options: {}
};

/* Creating a canvas element and inserting it before the table. */
var canvas=$('<canvas id="chart1"></canvas>');
var before=$('#table1');

$(canvas).insertBefore(before);

const myChart = new Chart(
  document.getElementById('chart1'),
  config
);





/**
 * The above function creates a chart from the data in the table.
 * @param index - the index of the row you want to get the data from
 */
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



//remote data








/*var dataPoints = [];
$.getJSON("https://canvasjs.com/services/data/datapoints.php", function(data2) {  
    $.each(data2, function(key, value3){
        dataPoints.push({x: value3[0], y: parseInt(value3[1])});
      
    });
  })
    function updateChart() {
      $.getJSON("https://canvasjs.com/services/data/datapoints.php" + (dataPoints.length + 1) + 
      "&ystart=" + (dataPoints[dataPoints.length - 1].y) + "&length=1&type=json", function(data2) {
          $.each(data2, function(key, value3) {
              dataPoints.push({
                  x: parseInt(value3[0]),
                  y: parseInt(value3[1])
                  
              });
              console.log(dataPoints);  
         });
         
         setTimeout(function(){updateChart()}, 1000);
    
      });
      
   }
   
   
   var canvas2=$('<canvas id="chart3"></canvas>');
   $( canvas2).insertAfter( $( ".firstHeading" ) );


   const data2 = {
   
    datasets: dataPoints,
  };
   
    const config2 = {
      type: 'scatter',
      data: data2,
      options: {}
    };

    const myChart2 = new Chart(
      document.getElementById('chart3'),
      config2
    );
    
 /* Creating a variable called canvas2 and assigning it to the string "hehehehehe". It is then
 inserting the canvas2 variable after the h1 element. */
/* Creating two empty arrays. */
 
 let lablesOn = []
 let dataTab = [];
  /* Fetching the data from the url and then converting it to json. */
   async function getData() {
      const response = await fetch('https://canvasjs.com/services/data/datapoints.php', {cache: "no-store"});
      const dataOn = await response.json(  {cache: "no-store"} );
      console.log(`DataOn: ${dataOn}`);


/* Looping through the dataOn array and pushing the values of the first index of the array to the
 lablesOn array. */
 for (let i=0; i<dataOn.length; i++){
   lablesOn.push(dataOn[i][0]);
 }
 
 
 /* Looping through the dataOn array and pushing the values of the second index of the array to the
 dataTab array. It is then updating the chart and calling the getData function. */
 for (let i=0; i<dataOn.length; i++ ){
   dataTab.push(dataOn[i][1]);}
   console.log(dataTab);
  
  myChart2.update();
setTimeout(getData, 1000);}

/* Creating a variable called canvas2 . It is then
 inserting the canvas2 variable after the h1 element. */
var canvas2=$('<canvas id="chart3"></canvas>');
   $( canvas2).insertAfter( $( ".firstHeading" ) );





/* Creating an object called dataObjd and assigning it to the dataTab array. */
const dataObjd = {
   data: dataTab}

/* Creating an object called data2 and assigning it to the lablesOn and dataObjd arrays. */
   const data2 = {
   labels : lablesOn,
    datasets: [dataObjd]
  };
   
  /* Creating a line chart. */
    const config2 = {
      type: 'line',
      data: data2,
      options: {}
    };

   /* Creating a line chart. */
    const myChart2 = new Chart(
      document.getElementById('chart3'),
      config2
    );


  /* Calling the getData function. */
  
    getData()

 
  