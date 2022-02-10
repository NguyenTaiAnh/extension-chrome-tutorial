chrome.browserAction.onClicked.addListener(function(tab){
    const colors = ['red', 'green', 'blue', 'alpha','black','white','yellow','cyan'];
    const colorPicker = () =>{
        const randomColor = Math.floor(Math.random() * colors.length);
        return colors[randomColor];
    }
    chrome.tabs.executeScript({
        code: 'document.body.style.backgroundColor="'+ colorPicker()+ '"',
    });
})

