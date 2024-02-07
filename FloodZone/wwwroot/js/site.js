// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var mymap = L.map('map').setView([39.6295, -79.9559], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '& copy; OpenStreetMap contributors'
}).addTo(mymap); 

var circle = L.circle([39.633126, -79.958839], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 200
}).addTo(mymap);

var circle1 = L.circle([39.635687, -79.958818], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 200
}).addTo(mymap);

var circle2 = L.circle([39.638513, -79.96165], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 200
}).addTo(mymap);

var circle3 = L.circle([39.629308, -79.952788], {
    color: 'blue',
    fillColor: '#3399FF',
    fillOpacity: 0.5,
    radius: 50
}).addTo(mymap);

var circle4 = L.circle([39.629102, -79.951812], {
    color: 'blue',
    fillColor: '#3399FF',
    fillOpacity: 0.5,
    radius: 50
}).addTo(mymap);

var circle5 = L.circle([39.628871, -79.953496], {
    color: 'blue',
    fillColor: '#3399FF',
    fillOpacity: 0.5,
    radius: 50
}).addTo(mymap);

