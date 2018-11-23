//View
//Представление CriptoCurrencyView взаимодействует с DOM
'use strict';
import * as d3 from 'd3';
class CriptoCurrencyView {
  constructor() {

  }
  static buildTable(criptoDataArray) {
    for(var i = 0; i < criptoDataArray.length; i++) {
      let ATH, high,
          currentElement = criptoDataArray[i];

      if(criptoDataArray[i].high) {
        high = currentElement['high'];
        ATH = (criptoDataArray[i].close > criptoDataArray[i].high) ?
       '100%' :
       (Math.round(criptoDataArray[i].close * 10000 / high)/100) + "%";
     } else {
       ATH = '100%';
       high = ''
     }


      d3.select(".cripto-currency-table-data").append('tr').html(`<td>${i+1}</td><td>${currentElement['currency']}</td><td>${currentElement['close']}$</td><td>${high}$</td><td>${ATH}</td><td>${currentElement['yearOpen']}$</td>`);
    }
  }

}
export default CriptoCurrencyView;
