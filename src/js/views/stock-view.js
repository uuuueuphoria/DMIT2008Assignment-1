//write a ejs template to show stock symbol, current price, previous close price, current date, current volume, latest trading day and percent of change
const stockView = `
    <div class="stock-view">
        <p><span>Stock ticker symbol: </span><%=data['Global Quote']['01. symbol']%></p>
        <p><span>Current price: </span>$<%=data['Global Quote']['05. price']%></p>
        <p><span>Previous close price: </span>$<%=data['Global Quote']['08. previous close']%></p>
        <p><span>Change percent:</span> <%=data['Global Quote']['10. change percent']%></p>
        <p><span>Current volume: </span><%=data['Global Quote']['06. volume']%></p> 
        <p><span>Current date:</span> <%=new Date()%></p>
        <p><span>Latest trading day:</span> <%=data['Global Quote']['07. latest trading day']%></p>   
     </div>
`;

//export the stockView
export default stockView;
