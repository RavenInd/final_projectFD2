"use strict";
import CriptoCurrencyModel from './CriptoCurrencyModel.js';
import * as d3 from 'd3';

//Promise, в сотоянии fullfilled, получает JSON-файл с данными по криптовалюте.
CriptoCurrencyModel.httpGet("https://api.nomics.com/v1/dashboard?key=ca9591ddb4080432e2d6a9a9d45d25af")
.then(response => {
    var data = JSON.parse(response); // data - это массив объектов, в которых содержаться данные по конкретной криптовалюте
                                    // Данные можно использовать только внутри этой функции.
    for(var i = 0; i < data.length; i++){
      let ATH = (data[i].close >= data[i].high) ? '100%' : Math.round((data[i].close*100/data[i].high)*100)/100 + "%";
      d3.select(".cripto-currency-table-data").append('tr').html(`<td>${i+1}</td><td>${data[i].currency}</td><td>${data[i].close}$</td><td>${data[i].high}$</td><td>${ATH}</td><td>${data[i].yearOpen}$</td>`);
    }





  });
