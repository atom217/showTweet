/****************************************************
* This file should load BEFORE main.js, since main.js calls the onReady, onContainer and onViewer methods
* Note:  This implmentation has been provided for convenience, developers are not required to use this pattern.
*
* SEE: Tile API & Development FAQ - https://community.jivesoftware.com/docs/DOC-185776
****************************************************/

//************************************************************************
//NOTE: CALLED AS SOON AS THE FULL CONTEXT IS RESOLVED
//************************************************************************
function onReady(tileConfig,tileOptions,viewer,container) {
/*var x = tileConfig.id;
console.log(x);
 var code = "<a class='twitter-timeline' data-width='400' data-height='500' href='https://twitter.com/"+x+"?ref_src=twsrc%5Etfw'>Tweets by "+x+"</a><script async src='//platform.twitter.com/widgets.js' charset='utf-8'></script>";
 console.log(code);

// var final = "Tweets by "+ x;
 //var url = "https://twitter.com/"+x+"?ref_src=twsrc%5Etfw";
//$("#tweet").append(final);
//$("#tweet").attr('href',url);
var final = $.parseHTML(code);
console.log(final);
$("#canvas").append(final);*/

// <a class='twitter-timeline' data-width='400' data-height='300' href="https://twitter.com/orange?ref_src=twsrc%5Etfw"></a>Tweets by orange<script async src='//platform.twitter.com/widgets.js' charset='utf-8'></script> -->

 // app.resize();
} // end function

//************************************************************************
//NOTE: CALLED AS SOON AS THE CONFIG IS RESOLVED
//************************************************************************
function onConfig(tileConfig,tileOptions) {
  console.log('onConfig',tileConfig,tileOptions);
  var x = tileConfig.id;
  var h = tileConfig.height;
  console.log(x);
  console.log(h)
  var code = "<a class='twitter-timeline' data-width='400' data-height="+h+" href='https://twitter.com/"+x+"?ref_src=twsrc%5Etfw'>Tweets by "+x+"</a><script async src='//platform.twitter.com/widgets.js' charset='utf-8'></script>";
 console.log(code);

// var final = "Tweets by "+ x;
 //var url = "https://twitter.com/"+x+"?ref_src=twsrc%5Etfw";
//$("#tweet").append(final);
//$("#tweet").attr('href',url);
var final = $.parseHTML(code);
console.log(final);
$("#canvas").append(final);
gadgets.window.adjustHeight(h);
} // end function

//************************************************************************
//NOTE: CALLED AS SOON AS THE CONTAINER IS RESOLVED
//************************************************************************
function onContainer(container) {
  console.log('onContainer',container);
} // end function

//************************************************************************
//NOTE: CALLED AS SOON AS THE VIEWER IS RESOLVED
//************************************************************************
function onViewer(viewer) {
  console.log('onViewer',viewer);
} // end function
