//gets table
var oTable = document.getElementById('table1');

//gets rows of table
var rowLength = oTable.rows.length;


//loops through rows    
for (i = 0; i < rowLength; i++){

  //gets cells of current row  
   var oCells = oTable.rows.item(i).cells;

   //gets amount of cells of current row
   var cellLength = oCells.length;

   //loops through each cell in current row
   for(var j = 1; j < cellLength; j++){

          // get your cell info here

          var cellVal = oCells.item(j).innerHTML;

      let r2 = oTable.rows.item(1).cells;
let celVal2 = r2.item(11).innerHTML;
console.log(celVal2)

let celSp= celVal2.split()
console.log(celSp)
       }
}




var canvas=$('<canvas id="chart1"></canvas>');
  var before=$('#table1');

  $(canvas).insertBefore(before);

  const labels = [


  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };



  const myChart = new Chart(
    document.getElementById('chart1'),
    config
  );