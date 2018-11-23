//View
//Представление CriptoCurrencyView взаимодействует с DOM
'use strict';
import * as d3 from 'd3';
class CriptoCurrencyView {
  constructor() {

  }
  static buildTable(criptoDataArray) {
    for(var i = 0; i < criptoDataArray.length; i++) {
      let ATH = (criptoDataArray[i].close >= criptoDataArray[i].high) ? '100%' : Math.round((criptoDataArray[i].close*100/criptoDataArray[i].high)*100)/100 + "%";
      d3.select(".cripto-currency-table-data").append('tr').html(`<td>${i+1}</td><td>${criptoDataArray[i].currency}</td><td>${criptoDataArray[i].close}$</td><td>${criptoDataArray[i].high}$</td><td>${ATH}</td><td>${criptoDataArray[i].yearOpen}$</td>`);
    }
  }

}
export default CriptoCurrencyView;
