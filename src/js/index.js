//import all required function
import { getStockRequest } from './fetch/get-request.js';
window.addEventListener('load', function (e) {
  //load the window
  //DOM select the button and add click event
  document.querySelector('button').addEventListener('click', function (e) {
    //get the input data
    const keyword = document.querySelector('input').value;
    //remove any space in the input to get a valid searching keyword
    const valid = keyword.replace(/\s/g, '');
    //get data by calling the function getRequest from the import
    //the url is followed the document on the website
    const dataRequest = getStockRequest(
      'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=' +
        valid +
        '&apikey=SEHS7IHXN02VEG7B'
    );
  });
});
