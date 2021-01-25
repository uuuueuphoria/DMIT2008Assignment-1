//write a ejs template to show stock name as header, current close price, current date and current volume
//"data['Meta Data']['3. Last Refreshed']" is used to find the latest data and time
const stockView = `
    <div class="stock-view">
        <p><span>Stock ticker symbol: </span><%=data['Meta Data']['2. Symbol']%></p>
        <p><span>Current close price: </span><%=data['Time Series (1min)'][data['Meta Data']['3. Last Refreshed']]['4. close']%></p>
        <p><span>Current date:</span> <%=new Date()%></p>
        <p><span>Last refreshed date:</span> <%=data['Meta Data']['3. Last Refreshed']%></p>
        <p><span>Current volume: </span><%=data['Time Series (1min)'][data['Meta Data']['3. Last Refreshed']]['5. volume']%></p>  
     </div>
`;

//export the stockView
export default stockView;
