/* Don't touch this part! */
// **************************************
function fakeAjax(url,cb) {
  var fake_responses = {
    "file1": "The first text",
    "file2": "The middle text",
    "file3": "The last text"
  };
  var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

  console.log("Requesting: " + url);

  setTimeout(function(){
    cb(fake_responses[url]);
  },randomDelay);
}

function output(text) {
  console.log(text);
}
// **************************************
// Use Promises

function getFile(file) {
  //Fill this in
}

// request all files at once in "parallel"
// ???
