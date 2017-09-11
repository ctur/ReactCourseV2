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

const user = {
    name: 'Ctur',
    age: 23,
    location: 'Istanbul'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

const templateTwo = (
    <div>
        <h1>{user.name
                ? user.name
                : 'Anonymous'}</h1>
        {(user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
