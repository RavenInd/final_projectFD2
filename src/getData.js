
// Start of getting Currency's Data from https://nomics.com/ API
//XMLHttpRequest to recieve Data

function httpGet(url) {

  return new Promise(function(resolve, reject) {

    let xhr = new XMLHttpRequest();
    console.log(url);
    xhr.open('GET', url, true);

    xhr.onload = function() {
      if (this.status == 200) {

        resolve(this.responseText);

      }
      };
    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };

    xhr.send();
  });
}


export default httpGet;
