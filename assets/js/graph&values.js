var xValues = [], yValues = [];
    var ulText= "";
    Chart.defaults.color = '#FFB1C1';
    var isRaining = false;

 chart = new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      data: yValues,
      backgroundColor: '#FFB1C1',
      borderColor: '#b2103f',
      fill: false
    }]
  },
  options: {
    animation: true,
    
    plugins: {
          legend: {
            display: false          
        }
    }
}});
    
    function draw(){
        xValues = xValues.slice(-20);
        yValues = yValues.slice(-20);
        
        chart.data.datasets[0].data = yValues;
    chart.data.labels = xValues;
    chart.update();
    }
    function readTextFile(file)
{
    ulText = ""
    xValues = [], yValues = [];
    var rawFile = new XMLHttpRequest();
    var allText;
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    array = allText.split("\n");
    array.forEach((stamp) => {
        item = stamp.split(" ");
        xValues.push(item[1]);
        yValues.push(item[0]);        
    });

    
    teploty = yValues.map(i=>Number(i));
    var minTemperature = teploty[0]
    var sumar = 0, avgTemperature = 0, pocet = 0, maxTemperature = 0;
    
    teploty.forEach((teplota) => {
        if(teplota < minTemperature)
            minTemperature = teplota
        if(teplota > maxTemperature)
            maxTemperature = teplota
        sumar += teplota
        pocet +=1
    })
    
    avgTemperature = sumar / pocet

    document.getElementById("minTemperature").innerHTML = Math.round(minTemperature,0)+"°"
    document.getElementById("avgTemperature").innerHTML = Math.round(avgTemperature,0)+"°"
    document.getElementById("maxTemperature").innerHTML = Math.round(maxTemperature,0)+"°"
    


    array = array.slice(-20);
    array = array.reverse();
    actualTemperature = array[0].split(" ")
    actualTemperature = actualTemperature[0]
    document.getElementById("actualTemperature").innerHTML = Math.round(actualTemperature,0)+"°";
    array.forEach((teplota) => {
        items = teplota.split(" ");
        ulText += "<p><span>"+items[0]+" °C</span> - "+items[1]+"</p>"
    });
    document.getElementById("list").innerHTML = ulText;    
    var randomCislo = Math.floor(Math.random() * 10)
    if(randomCislo < 2)
        isRaining = !isRaining

    

    if(isRaining) {
        document.documentElement.style.setProperty('--rainingPosition', 'absolute')
        document.getElementById("imageid").src="imgs/rainingCloud.svg"; 
        document.getElementById('title').innerHTML = Math.round(actualTemperature,2)+"°C raining | The Rasberry Weather"
    }else{
        document.documentElement.style.setProperty('--rainingPosition', 'none')   
        document.getElementById("imageid").src="imgs/SUN.svg"; 
        document.getElementById('title').innerHTML = Math.round(actualTemperature,2)+"°C sunny | The Rasberry Weather"
    }

    draw();
    
}
readTextFile("./data.txt")
setInterval(readTextFile, 3000, "./data.txt");


    