var div1 = document.createElement("div");
div1.addClass("col col-md-4 col-sm-6 col-xs-12 float-right");

var divChild1 = document.createElement("div");
divChild1.addClass("achievement");

//adding the text to the paragraph
div1.appendChild(divChild1);

var divChildTopBar = document.createElement("div");
divChildTopBar.addClass("achievement-top-bar");
divChild1.appendChild(divChildTopBar);

var h5 = document.createElement("h5");
h5.addClass("text-center text-capitalize rtl_dir_center");
var achTitle = document.createTextNode(ach.title);
h5.appendChild(achTitle);

divChildTopBar.appendChild(h5);


var divInner = document.createElement("div");

var divHeader = document.createElement("div");

var divHeading = document.createElement("div");

var i_Icon = document.createElement("i");


var h6 = document.createElement("h6");

var aButton = document.createElement("a");





//__________________________________________

var contentDiv = document.createElement("div");

var contentParagraph = document.createElement("p");