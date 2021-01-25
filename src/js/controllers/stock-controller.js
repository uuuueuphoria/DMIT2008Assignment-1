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

  //****This is the traditional way to create template literal */
  //define a currentTime variable used to retrieve real time data
  //let currentTime = data['Meta Data']['3. Last Refreshed'];
  //create the template literal
  //   const template = `
  //   <h2>Stock sicker symbol: ${data['Meta Data']['2. Symbol']}</h2>
  //   <p>Current close price: ${data['Time Series (1min)'][currentTime]['4. close']}</p>
  //   <p>Current date: ${data['Meta Data']['3. Last Refreshed']}</p>
  //   <p>Current volume: ${data['Time Series (1min)'][currentTime]['5. volume']}</p>
  // `;

  //create document fragment
  const element = document.createRange().createContextualFragment(template);
  return element;
}

//export the function
export { getStockInfo };
