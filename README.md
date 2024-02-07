# **FloodZone**

## **Overview**

Floodzone is designed to indicate potential flood zones in a specific area. This is used to inform home owners and land
owners if their property could potentially be flooded. This can help the user avoid these flood areas or protect their 
property from a flood if they already own land in a flood zone.This is a prototype for the basic design of the web app
and is not fully functional at this time. The map only gives a few possible flood locations in Morgantown, WV.

## **Description**

### **Welcome Page**

This webpage has a welcome page that includes a place to input an address to view results. The address box is not 
currently functional but hitting "Search" located under the address box. There is also another link that says "Click me" 
to display local flood areas. Both anchors result in taking the user to the next page which displays a map.

### **Map Page**

The next page takes the user to a map that displays Morgantown, WV. The map shows three red circles, which indicate 
a severe flood zone. The map also displays three blue circles, which indicate a moderate flood zone. Underneath 
the map is a table. This table displays the map key and meaning of the circles and colors. The map was implimented 
by using "Leaflet" which is linked in Citations.

## **Research Summary**

## **Websites**

### **WV Flood Map**

This was a key source in creating my idea. This website really helped me structure my app and the layout.
This is an interactive map that displays flood areas, similar to mine but, accross the entire state of WV.
This is where I got the idea for the address bar and included it in my web app. I also used an interactive
map similar to the one on this website. This website is linked in my Citations.

### **Risk Factor**

This website was more basic than the first. You type in an address and it displays the risk factors of flooding and 
heat. This website did not include a map but instead showed the user a picture of the entered address. It did not include 
many bootstrap features, but I did like the address bar, which is used on my web design. This website is linked below in Citations.

### **Flood Map**

This was another interactive map that displayed potential flood zones within the United States. This website also included an address
bar, so i also included it in my design. I created a similar interactive map, but on a much smaller scale. Again instead of using 
the map i used "Leaflet" to create my interactive map. This website is linked below in Citations.

## **GitHub Repositories**

### **Flood Detection Algorithm**

This was a really interesting repository that was located on GitHub. It had an interactive map that ran on GEE, which stands
for the Google Earth Engine. The README was really useful in this repository and explained how the map was implimented. 
This helped me understand the process a little better so that I could create an interactive map. This repository is linked 
below in Citations.

### **New York City Council Resiliency**

This repository was located on Github and outlined the idea for using a satilite image to display surface temperature in New York.
Even though FloodZone is a flood app and not a temperature map, this repository displayed some useful structural ideas that could 
be implimented into my map. I thought that I could use satalite images for FloodZone, but decided to use "Leaflet" instead. This 
repository is linked below in Citations.

## **Future Enhancements**

I would like FloodZone to be on a much larger scale and potentially nation wide. The interactive map could use some more work and
will eventually display more flood areas. Eventually I would like to add another page that displays potential percipitation
within the area. This could help users identify when the floods could occur not just where. The current version is a prototype
and will eventually will be expanded to other cities, towns, and states.

## **Citations**

[WV Flood Maps](https://www.mapwv.gov/flood/map/?wkid=102100&x=-8876023&y=4812466&1=4&v=0)

[Risk Factor](https://riskfactor.com/city/morgantown/5455756_fsid/flood)

[Flood Map](https://www.floodmap.net/?gi=4815352)

[Flood Detection Algorith](https://github.com/Mahyarona/Flood-Detection-Algorithm-using-GEE/blob/master/README.pdf)

[New York City Council Resiliency](https://github.com/NewYorkCityCouncil/resiliency)

[Leaflet](https://leafletjs.com/)

[W3 Schools](https://www.w3schools.com/)

[Bootswatch](https://bootswatch.com/)

[ChatGpt](https://chat.openai.com/auth/login)

To impliment Leaflet I asked Chatgpt to give me a basic tutorial of how to impliment the map with the following prompt:
>I want to create a map using leaflet and incorporate it into my project. How do I setup Leaflet?
It showed me how to impliment leaflet and link it within my project.

## **Reflection**

AI really helped me impliment the map within this project. Without the AI it would have taken me much longer to get the map
created and set up. Bootswatch helped me impliment a theme to my overall web design that was really useful. I used W3 Schools 
to help create the table for the map key. The recorded lecture videos also helped as I could refer back to them if I got lost 
or confused on a specific topic. I did have some difficulties finding other repositories on GitHub and it took me a little longer
than I initially expected. Overall I am happy with my created prototype and look forward to continue growing it!





