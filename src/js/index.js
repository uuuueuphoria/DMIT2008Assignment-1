//import all required function
import { getStockRequest } from './fetch/get-request.js';
import { getStockInfo } from './controllers/stock-controller.js';
import { setStocks } from './models/stocks.js';
window.addEventListener('load', function (e) {
  //load the window
  //DOM select the button and add click event
  document.querySelector('button').addEventListener('click', function (e) {
    //clear all the display
    document.querySelector('.display').textContent = '';
    //get the input data
    const keyword = document.querySelector('input').value;
    //remove any space in the input to get a valid searching keyword
    const valid = keyword.replace(/\s/g, '');
    //get data by calling the function getRequest from the import,get the data for interval of 1 minute

    //if the input is not empty, call the API to get the data, remove the error message
    if (valid != '') {
      document.querySelector('.error').textContent = '';
      const dataRequest = getStockRequest(
        'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=' +
          valid +
          '&interval=1min&apikey=SEHS7IHXN02VEG7'
      ).then((data) => {
        setStocks(data);
        //if the user input an valid stock, retrieve the stock info and display the result
        if (data['Error Message'] == undefined) {
          const temp = getStockInfo();
          document.querySelector('.display').append(temp);
        } else {
          //if the user input an invalid stock
          //display error message
          document.querySelector('.error').textContent =
            '*Invalid stock, please enter a correct name';
        }
      });
    } else {
      //if the input is empty, show error message
      document.querySelector('.error').textContent =
        '*Please enter a stock name';
    }
  });
});
