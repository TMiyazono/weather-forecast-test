let url = "https://www.jma.go.jp/bosai/forecast/data/overview_forecast/{$cityCode}.json";
 
fetch(url)
   .then(function(response) {
       return response.json();
   })
   .then(function(weather) {
       console.log(weather);
       // 画面に書き出す
       document.getElementById("publishingOffice").lastElementChild.textContent = weather.publishingOffice;
       document.getElementById("reportDatetime").lastElementChild.textContent = weather.reportDatetime;
       document.getElementById("targetArea").lastElementChild.textContent = weather.targetArea;
       document.getElementById("todayHighTemperature").lastElementChild.textContent = weather.todayHighTemperature;
       document.getElementById("todayLowTemperature").lastElementChild.textContent = weather.todayLowTemperature;
       document.getElementById("today").lastElementChild.textContent = weather.today;
       document.getElementById("tomorrow").lastElementChild.textContent = weather.tomorrow;
   });