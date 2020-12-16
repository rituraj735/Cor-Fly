<?php  
 $connect = mysqli_connect("localhost", "root", "password", "smart_booking");  
 $query = "SELECT flight_number,count(status) as booked FROM seat where status=1 GROUP BY flight_number";  
$query1 = "SELECT flight_number,count(status)*(SELECT fare from flight where flight_number=seat.flight_number) as Amount from Seat where status=1 group by flight_number"; 
$query2 = "SELECT flight_number,count(age) as AGE from person where age between 60 and 100 group by flight_number"; 

 $result = mysqli_query($connect, $query);
 $result1 = mysqli_query($connect, $query1);
 $result2 = mysqli_query($connect, $query2);
 ?>  
 <!DOCTYPE html>  
 <html>  
      <head>  
           <title>Webslesson Tutorial | Make Simple Pie Chart by Google Chart API with PHP Mysql</title>  
           <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>  
           
           <script type="text/javascript">  
           google.charts.load('current', {'packages':['corechart']});  
           
           google.charts.setOnLoadCallback(drawChart);  
           function drawChart()  
           {  
                var data = google.visualization.arrayToDataTable([  
                          ['Flight_number', 'Booked'],  
                          <?php  
                          while($row = mysqli_fetch_array($result))  
                          {  
                               echo "['".$row["flight_number"]."', ".$row["booked"]."],";  
                          }  
                          ?>  
                     ]);  
                var options = {  
                      title: 'Percentage of booked tickets in each flight',  
                      //is3D:true,  
                      pieHole: 0.4  
                     };  
                var chart = new google.visualization.PieChart(document.getElementById('piechart'));  
                chart.draw(data, options);  
           }  
           google.charts.setOnLoadCallback(drawChart1);
           function drawChart1()  
           {  
                var data = google.visualization.arrayToDataTable([  
                          ['Flight_number', 'Amount'],  
                          <?php  
                          while($row = mysqli_fetch_array($result1))  
                          {  
                               echo "['".$row["flight_number"]."', ".$row["Amount"]."],";  
                          }  
                          ?>  
                     ]);  
                var options = {  
                      title: 'Amount collected in each flight',  
                      //is3D:true,  
                      //pieHole: 0.4  
                     };  
                var chart = new google.visualization.ColumnChart(document.getElementById('barchart'));  
                chart.draw(data, options);  
           } 
           google.charts.setOnLoadCallback(drawChart2);
           function drawChart2()  
           {  
                var data = google.visualization.arrayToDataTable([  
                          ['Destination', 'count'],  
                          <?php  
                          while($row = mysqli_fetch_array($result2))  
                          {  
                               echo "['".$row["flight_number"]."', ".$row["AGE"]."],";  
                          }  
                          ?>  
                     ]);  
                
                     var options = {
                      is3D: true,
          title: 'Percentage of aged people travelling in each flight',
          legend: 'none',
          pieSliceText: 'label',
          slices: {  4: {offset: 0.2},
                    12: {offset: 0.3},
                    14: {offset: 0.4},
                    15: {offset: 0.5},
          },
        };
                var chart = new google.visualization.PieChart(document.getElementById('geochart'));  
                chart.draw(data, options);  
           }  
           </script>  
      </head>  
      <body>  
           <br /><br />  
           <div style="width:900px;">  
                <h3 align="center">Analytics</h3>  
                <br />  
                <div id="piechart" style="width: 900px; height: 500px;"></div>
                <br>
                <div id="barchart" style="width: 900px; height: 500px;"></div>  
                <br>
                <div id="geochart" style="width: 900px; height: 500px;"></div>  
           </div>  
      </body>  
 </html>
