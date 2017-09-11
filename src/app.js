const app = {
    title: 'Indecision App',
    subtitle: 'React web developer course Indecision App',
    options: ['One', 'Two']

};

// JSX - JavaScript XML
const template = (
    <div>
        <h1>{app.title}</h1>
        {/* logical and operator */}
        {app.subtitle && <p>{app.subtitle}</p>}
        {/* Adding our javascript inside curly braces*/}
        {/* Ternary operator true -> use left , wrong -> use right */}
        {/*(app.options.length > 0) ? <p>Here are your options</p> : <p>No options</p>
                    this was another way
                    second way below
                */}
        <p>{(app.options.length > 0)
                ? 'Here are your options'
                : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
); // -> Wrapper div!

let count = 0;
const addOne = () => {
    console.log('add one');
};

const minusOne = () => {
    console.log('minusOne');
};

const reset = () => { console.log('reset'); };

const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
