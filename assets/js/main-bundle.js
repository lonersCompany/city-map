!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n=Array.from(document.getElementsByClassName("side-box")),o=Array.from(document.getElementsByClassName("map-entry")),r=function(e){return[Number(e.getAttribute("data-lon")),Number(e.getAttribute("data-lat"))]},c=function(e){e.element.addEventListener("click",function(){var t;n.forEach(function(e){return e.classList.remove("open")}),n[e.index].classList.add("open"),t=e.coordinates,map.flyTo({center:t,zoom:16.8,speed:1.5})})};if(document.querySelector("#map-container")){console.log("run map"),mapboxgl.accessToken="pk.eyJ1IjoibG9uZXJzY29tcGFueSIsImEiOiJjandqNTlsYXIwNjduNDRwNjhkemhhZXVtIn0.c2PlH4OqBZUOQgDM4hg7fw";var a=new mapboxgl.Map({container:"map",style:"mapbox://styles/lonerscompany/cjwjajpvb1ly61cnqacst6b3k",center:[19.34928,48.208772],zoom:14});o.map(function(e,t){return{element:e,index:t,coordinates:r(e)}}).forEach(c),n.map(function(e,t){var n=r(e);return{type:"Feature",index:t,properties:{icon:e.querySelector(".icon img").src},geometry:{type:"Point",coordinates:n}}}).forEach(function(e,t){var n=document.createElement("div");n.innerHTML='<img src="'.concat(e.properties.icon,'"> '),n.className="marker icon img-round",c({element:n,index:t,coordinates:e.geometry.coordinates}),new mapboxgl.Marker(n).setLngLat(e.geometry.coordinates).addTo(a)})}var i,u,l=document.querySelector(".nav-hamburger"),s=document.querySelector("body");u=s,(i=l).addEventListener("click",function(e){i.classList.toggle("open"),u.classList.toggle("open")}),n.forEach(function(e){var t=e.querySelector(".icon-cross");t.addEventListener("click",function(n){t.classList.toggle("open"),e.classList.toggle("open"),map.flyTo({center:[19.34928,48.208772],zoom:14,speed:1.5})})})}]);