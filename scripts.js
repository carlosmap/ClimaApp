"use strict";
var app = {};
app.apikey="70605c867d81c7bb4e3a4e00c8247cf2";
app.cityId= "3896433";

app.url = "http://api.openweathermap.org/data/2.5/weather?id="+app.cityId+"&lang=es&units=metric&APPID=70605c867d81c7bb4e3a4e00c8247cf2";

app.cargaDatos = function(){
    
    
    $.ajax({
        url: app.url,
        success: function( data ) {
            
            app.datos = data;
            app.procesaDatos();
            
        },
        error: function(){
            alert("¡Ups! No puedo obtener información de la API");
        }
    });
    
}
app.procesaDatos = function(){
    app.condicionNombre = app.datos.weather[0].main;
    app.temperatura = app.datos.main.temp;
    app.name= app.datos.name;
    app.country = app.datos.sys.country; //.country;
    var condicionIcono = app.datos.weather[0].icon;
    app.icono ='"http://openweathermap.org/img/w/'+condicionIcono+'.png"';
    app.muestra();
} 
app.muestra = function(){
    $('#js_w_city').append("<p class='weather_name'>El tiempo en "  +  app.name + "º - "+app.country+"</p>");
    
    $('#js_w_temp').append("<p class='weather_temperature'>" +  app.temperatura + "º</p>");
    $('#js_w_icon').append(" <img class='city-icon' src=" + app.icono + "'>");    

    $('#js_w_icon').append("<p class='weather_name'>" +  app.condicionNombre.toUpperCase() + "</p>");
}
app.cargaDatos();