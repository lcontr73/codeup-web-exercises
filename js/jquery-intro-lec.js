'use strict';
$(document).ready(function () {
   // jQuery - Select element with ID of 'pageLink' and set inner HTML using html() method

   //id Selector
   $("#pageLink").html("<h1>Link to somewhere</h1>");

   //Vanilla JS way
   // document.getElementById('pageLink').innerHTML = '<h1>Link to Somewhere</h1>';


   // Class Selector
   // returns an array of elements
   // console.log($('.list-item'));
   // $('.list-item')[0].innerHTML = 'Hello';


   // Element Selector
   // for changing multiple properties you can pass an object with the key-value pairs (property, value)
   // $('li').css({
   //    'background-color': 'hotpink',
   //    'border-bottom': '1px solid black',
   // })


   // for changing one property
   $('li').css('background-color', 'rebeccapurple');


   //Selecting Multiple Elements --> returns array of element nodes
   $('h1, #pageLink, #list').css('color', 'forestgreen')


   // All Selector --> select every element on the page
   $('*').css('border', '2px dotted black')



});