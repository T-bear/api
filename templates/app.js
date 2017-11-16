function myDiv() {
return $( "#here" ).load(document.URL + ' #here');
}

setInterval(myDiv(),3000);
