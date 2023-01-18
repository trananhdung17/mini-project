const API_TOKEN = "c05a759a92c012c2efac10dfb79e45b1e49abfbd";

function getSelectedText() {
    console.log('Getting selected text...');
    var text_selected;
    if (window.getSelection) {
        text_selected = window.getSelection().toString();
    } else if (document.selection) {
        text_selected = document.selection.createRange().toString();
    }
    return text_selected;

}

function countWords(text){
    /**
     * Count word in given text
     * @return int - number of words
     */
    text = text.replace(/(^\s*)|(\s*$)/gi,"");    //exclude  start and end white-space
    text = text.replace(/[ ]{2,}/gi," ");         //2 or more space to 1
    text = text.replace(/\n /,"\n");              // exclude newline with a start spacing
    return text.split(' ').filter(function(str){return str!="";}).length;
};

async function summaryText(text, model='fast-gpt-j') {
    /**
     * Summary text
     * Using `Fast GPT-J` model on NLP Cloud. See more: https://docs.nlpcloud.com/#summarization
     * Available models: ['bart-large-cnn', 'fast-gpt-j', 'finetuned-gpt-neox-20b']
     */

    var settings = {
        "url": `https://api.nlpcloud.io/v1/gpu/${model}/summarization`,
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Authorization": "Token " + API_TOKEN,
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({
          "text": text
        }),
      };
      
      return $.ajax(settings).done(function (response) {
        console.log(response);
      });
}

async function generateText(requirement, max_length=500, model='fast-gpt-j') {
    /**
     * Auto generate text by given original text
     * Using `Fast GPT-J` model on NLP Cloud. See more: https://docs.nlpcloud.com/#generation
     * Available models: ['fast-gpt-j', 'gpt-j', 'gpt-neox-20b', 'finetuned-gpt-neox-20b']
     */
    
    var settings = {
        "url": `https://api.nlpcloud.io/v1/gpu/${model}/generation`,
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Authorization": "Token " + API_TOKEN,
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({
          "text": requirement,
          "max_length": max_length
        }),
      };
      
      return $.ajax(settings).done(function (response) {
        console.log(response);
      });
}

async function correctText(text, model='fast-gpt-j') {
  /**
   * Available models: finetuned-gpt-neox-20b, fast-gpt-j, gpt-j
   */
  var settings = {
    "url": `https://api.nlpcloud.io/v1/gpu/${model}/gs-correction`,
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Authorization": "Token " + API_TOKEN,
      "Content-Type": "application/json"
    },
    "data": JSON.stringify({
      "text": text
    }),
  };
  
  return $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

async function parapharaseText(text, model='fast-gpt-j') {
  
  /**
   * Available models: finetuned-gpt-neox-20b, fast-gpt-j, gpt-j
   */
  var settings = {
    "url": `https://api.nlpcloud.io/v1/gpu/${model}/paraphrasing`,
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Authorization": "Token " + API_TOKEN,
      "Content-Type": "application/json"
    },
    "data": JSON.stringify({
      "text": text
    }),
  };
  
  return $.ajax(settings).done(function (response) {
    console.log(response);
  });
}
