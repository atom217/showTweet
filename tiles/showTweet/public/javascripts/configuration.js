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

  // make sure config has default value
  if (tileConfig === null) {
    tileConfig = { };
  } // end if
  
  /*if ( typeof tileConfig === "string" ){
    tileConfig = JSON.parse(tileConfig);
  }*/

  if (!tileConfig["data"]) {
      tileConfig["data"] = { };
  } // end if

  if (!tileConfig["data"]["id"]) {
      tileConfig["data"]["id"] = "orange";
  } // end if
  if (!tileConfig["data"]["height"]) {
      tileConfig["data"]["height"] = 324;
  } // end if
  if (!tileConfig["data"]["realHeight"]) {
      tileConfig["data"]["realHeight"] = 360;
  } // end if


  $("#twitterID").val( tileConfig["data"]["id"]);
  $("#tileHeight").val( tileConfig["data"]["realHeight"]);  
  // populate the dialog with existing config value
  //$("#config_string").val( tileConfig["data"]["configString"]);
  /*var hValue = $("#tileHeight").val();
      hValue = hValue -(hValue*.1);  */
  // update config object after clicking submit
  $("#btn_submit").click( function() {
      tileConfig["data"] = { 
                          "id" : $("#twitterID").val().trim().replace("@",""),
                          "height" : $("#tileHeight").val() - ($("#tileHeight").val()*.1),
                          "realHeight":$("#tileHeight").val()
                          }
      /*tileConfig["data"] = { 
                          "id" : $("#twitterID").val(),
                          "height" : $("#tileHeight").val()
                        }*/

      //tileConfig["data"]["configString"] = $("#config_string").val();
      jive.tile.close(tileConfig, {} );
  });

  app.resize();
} // end function

//************************************************************************
//NOTE: CALLED AS SOON AS THE CONFIG IS RESOLVED
//************************************************************************
function onConfig(tileConfig,tileOptions) {
  console.log('onConfig',tileConfig,tileOptions);
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
