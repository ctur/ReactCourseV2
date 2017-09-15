
const app = {
    title: 'Indecision App',
    subtitle: 'React web developer course Indecision App',
    options: []

};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    
    if (option){
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
  
};

const onRemoveAll = () => {
    app.options = [];
    render();
};

const onMakeDecision = () =>{
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

// this arrow function for re-rendering app
const render = () => {
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
                    : 'No options'}
            </p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do now?</button>
            <button onClick={onRemoveAll}>Remove All</button>

            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>

            <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add option</button>
            </form>
        </div>
    ); // -> Wrapper div!

    ReactDOM.render(template, appRoot);
};

render();



