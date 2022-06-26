### project data visualisation in html file and in a json data API using javascript DOM event and third party libraries

## what

1. data fetching in HTML file table with the use of javascript without modification of the HTML file
 
2. data fetching from a json data API and live updating from the data source

3. Creation of three charts using JS, Jquery and Chart.js using the fetched datas

## how

1. Data fetching  for the two HTML tables was done by creating a function retrieving and pushing the datas to arrays. I used for loops to get types of data and once in an array, assigned them to the dataset of chart.js

2. I created and appended the charts using jQuery to make them appear on the HTMl page when and only when the script is enabled.

3. Data fetching from JSON API were retrieved using a async function that get the data on the URL and transferring them into a variable that will turn them into a JSON database.
This database was then separated in two arrays in order to get the chart values. I created an object stocking those two arrays and assigned it to the Chart.js database

4.  In my function, I made an interval of one second which serves as the time value to update and add the data to te table. After creating my variable, chart and loops I call back the function.


