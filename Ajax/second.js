const weatherUrl = "http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29"

function getWeather() {
    $.ajax({
        url: weatherUrl,
        type:'GET',
        dataType:'json',
        success: function(a){
            for(i=0;i<a.length;i++){
                $('#weather').append(a[i].city.name+"<br/>")
            }
        }
    })
}