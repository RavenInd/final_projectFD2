"use strict";
import CriptoCurrencyModel from './CriptoCurrencyModel.js';
import CriptoCurrencyView from './CriptoCurrencyView.js';
import Router from './Router.js';
import * as d3 from 'd3';


location.hash = '#home';
//Promise, в сотоянии fullfilled, получает JSON-файл с данными по криптовалюте.
CriptoCurrencyModel.httpGet("https://api.nomics.com/v1/dashboard?key=ca9591ddb4080432e2d6a9a9d45d25af")
.then(response => {
    var data = JSON.parse(response).filter((d) => d.close < 1 && d.close > 0.1).splice(0, 13); // data - это массив объектов, в которых содержаться данные по конкретной криптовалюте
// Данные можно использовать только внутри этой функции.
    CriptoCurrencyView.buildTable(data);
    CriptoCurrencyView.buildGraphic(data);

  });
const router = new Router;
