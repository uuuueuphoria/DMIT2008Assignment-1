//set the request object
const aheader = new Headers();
const requestObject = {
  method: 'GET',
  headers: aheader,
  redirect: 'follow',
};

//write the function to get the data from url and parse into json file
function getStockRequest(url) {
  const result = fetch(url, requestObject)
    .then((res) => res.json())
    .then((data) => data);
  return result;
}

//export the function
export { getStockRequest };
