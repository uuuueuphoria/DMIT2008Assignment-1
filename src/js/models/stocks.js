//create a data store to store a copy of data
let store = {};

//get and set function
function setStocks(data) {
  store = { ...data };
}

function getStocks() {
  return store;
}

//export both functions
export { getStocks, setStocks };
