//Model
//Модель CriptoCurrencyModel отвечает за работу с данными. В клиентском JS это означает выполнение Ajax-операций. Одно из преимуществ шаблона MVC заключается в том, что всё взаимодействие с источником данных, например — с сервером, сосредоточено в одном месте.
'use strict';

// Start of getting Currency's Data from https://nomics.com/ API
//XMLHttpRequest to recieve Data
class CriptoCurrencyModel {
  constructor(){

  }
  static httpGet(url) {
    return new Promise(function(resolve, reject) {

      let xhr = new XMLHttpRequest();

      xhr.open('GET', url, true);

      xhr.onload = function() {
        if (this.status == 200) {
           return resolve(this.responseText);
        }
        };

      xhr.onerror = function() {
        reject(new Error("Network Error"));
      };

      xhr.send();
    });
  }
}



export default CriptoCurrencyModel;
