function showInfo() {
    console.log('Show extension info');
    let $popup = $(`
    <div stype="position: fixed; width: 120px; height: 200px; right: 0px; top: 0px" id="bnk-text-helper-info">
        <p>
            A Chrome extension to help you interact with ChatGPT that developed by OpenAI. It's provide some ways to help you generate and process text
            Here is some features:
            <ul>
                <li>Generate text in input field when you focus on it</li>
                <li>Summary a paragraph when you select it</li>
            </ul>
            Hope it might be useful for you!
        </p>
        <button onclick="() => {$('#bnk-text-helper-info').remove()}">CLOSE</button>
    </div>`);
    // $popup.
    $(document).append($popup);
  };
  
chrome.action.onClicked.addListener((tab) => {
  console.log('Click to extension');
  if(!tab.url.includes("chrome://")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: showInfo
    });
  }
});
