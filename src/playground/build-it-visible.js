let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    render();
};

const render = () => {
    const jsx = (
        <div>
          <h1>Visibility Toggle</h1>
          <button onClick={toggleVisibility}>
            {visibility ? 'Hide details' : 'Show details'}
          </button>
          {visibility && (
              <div>
                <p>Hey. These are some details you can now see !</p>
              </div>
          )}
        </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
};

render();




// const appRoot = document.getElementById('app');

// let buttonClicked = true;
// const onButtonClick = () => {
//     buttonClicked = !buttonClicked;
//     render();
// };

// const render = () => {

//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onButtonClick}> {buttonClicked ? 'Show Details' : 'Hide Details'}</button>
//             <p disabled={buttonClicked}> {buttonClicked ? '' : 'Hey ' }</p>
//         </div>
//     );
   
//     ReactDOM.render(template, appRoot);
// };

// render();