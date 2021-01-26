//import ALL required methods
import { getStocks } from '../models/stocks.js';
import ejs from 'ejs';
import stockView from '../views/stock-view';

//create the function to convert returned data into document fragment
function getStockInfo() {
  //get the data
  const data = getStocks();

  //use ejs to display the template
  const template = ejs.render(stockView, { data });
  //create document fragment
  const element = document.createRange().createContextualFragment(template);
  return element;
}

//export the function
export { getStockInfo };
