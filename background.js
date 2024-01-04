
var icon = false; 

chrome.runtime.onInstalled.addListener( data =>  {
    chrome.tabs.create({ url: chrome.runtime.getURL("page.html") });
});

chrome.action.onClicked.addListener((tab) => {
    if(!icon){
        chrome.action.setIcon({
            path : {
              "19": "assets/checked.png"
            }
        });
        icon = true; 
    } //when clicked , the green button changes 
    else { 
        chrome.action.setIcon({
            path : {
              "19": "assets/delete.png"
            }
        });
        icon = false; 
    }
});





//doble click code 
/*
chrome.browserAction.onClicked.addListener(new OnDoubleClickListener({
    onDoubleClick : function(tab) {
        alert("Double Clicked!!!");
    }
}));

var OnDoubleClickListener = function(config){
    // Max time between click events occurrence;
    var CONTROL_TIME = 250;

    //Set click to false at beginning
    var alreadyClicked = false;
    var timer;

    if(config && config.onDoubleClick instanceof Function)
    return function(tab) {

        //Check for previous click
        if (alreadyClicked) {
            //Yes, Previous Click Detected

            //Clear timer already set in earlier Click
            clearTimeout(timer);

            //Clear all Clicks
            alreadyClicked = false;


            return config.onDoubleClick.apply(config.onDoubleClick,[tab]);
        }

        //Set Click to  true
        alreadyClicked = true;

        //Add a timer to detect next click to a sample of 250
        timer = setTimeout(function () {
            //Clear all timers
            clearTimeout(timer);
            //Ignore clicks
            alreadyClicked = false;
        }, CONTROL_TIME);
    };
    throw new Error("[InvalidArgumentException]");
};
*/