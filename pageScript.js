

const executeLink = () => {
    
    console.log("the link button");
    const formID = document.getElementById("formID").value; 
    
    chrome.storage.sync.set({'databaseID': formID}, function() {
        console.log('Value is set to ' + formID);
      });

    (async () => {
        const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
        const response = await chrome.tabs.sendMessage(tab.id, {greeting: "hello"});
        // do something with response here, not outside the function
        console.log(response);
    })();
    
}
//sendResponse -> check documenttaion 