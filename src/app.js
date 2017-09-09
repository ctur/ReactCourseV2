
// JSX - JavaScript XML
var template = (
               <div>
                 <h1>Indecision App</h1>
                 <p>This is some info</p>
                 <ol>
                  <li>Item one</li>
                  <li>Item two</li>
                 </ol>
               </div>
); // -> Wrapper div!

var templateTwo = (
    <div>
        <h1> Ctur</h1>
        <p>  Age: 23</p>
        <p>  Location: Istanbul</p>
    </div>    
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);

