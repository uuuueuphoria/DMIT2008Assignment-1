//set the request object
const aheader = new Headers();
const requestObject = {
  method: 'GET',
  headers: aheader,
  redirect: 'follow',
};

//write the function to get the data from url and parse into json file
function getStockRequest(url) {
  return fetch(url, requestObject)
    .then((respond) => respond.json())
    .then((data) => data);
}

//export the function
export { getStockRequest };
