
let count = 0;
const addOne = () => {
    count ++;
    renderCounterApp();
};

const minusOne = () => {
    count --;
    renderCounterApp();
};

const reset = () => { 
    count = 0;
    renderCounterApp();    
};



const renderCounterApp = () => {
    // React using efficient virtual DOM algorithm.
    // Only updating changed part was count h1 tag on this example
    const templateTwo = (
        <div>
          <h1>Count: {count}</h1>
          <button onClick={addOne}>+1</button>
          <button onClick={minusOne}>-1</button>
          <button onClick={reset}>reset</button>
        </div>
    );


    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
