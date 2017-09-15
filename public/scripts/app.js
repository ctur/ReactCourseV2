'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.handleAddOne = _this.handleAddOne.bind(_this);
        _this.handleMinusOne = _this.handleMinusOne.bind(_this);
        _this.handleReset = _this.handleReset.bind(_this);

        _this.state = {
            count: 0
        };
        return _this;
    }

    _createClass(Counter, [{
        key: 'handleAddOne',
        value: function handleAddOne() {
            this.setState(function (prevState) {
                return {
                    // Just updating specific value inside state object
                    count: prevState.count + 1
                };
            });
        }
    }, {
        key: 'handleMinusOne',
        value: function handleMinusOne() {
            this.setState(function (prevState) {
                return {
                    count: --prevState.count
                };
            });
        }
    }, {
        key: 'handleReset',
        value: function handleReset() {
            this.setState(function () {
                return {
                    count: 0
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Count: ',
                    this.state.count,
                    ' '
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleAddOne },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleMinusOne },
                    '-1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleReset },
                    'Reset'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));

// const app = {
//     title: 'Indecision App',
//     subtitle: 'React web developer course Indecision App',
//     options: []

// };

// const onFormSubmit = (e) => {
//     e.preventDefault();

//     const option = e.target.elements.option.value;

//     if (option){
//         app.options.push(option);
//         e.target.elements.option.value = '';
//         render();
//     }

// };

// const onRemoveAll = () => {
//     app.options = [];
//     render();
// };

// const onMakeDecision = () =>{
//     const randomNum = Math.floor(Math.random() * app.options.length);
//     const option = app.options[randomNum];
//     alert(option);
// };

// const appRoot = document.getElementById('app');

// // this arrow function for re-rendering app
// const render = () => {
//         // JSX - JavaScript XML
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//                                                             {/* logical and operator */}
//             {app.subtitle && <p>{app.subtitle}</p>}
//                                                             {/* Adding our javascript inside curly braces*/}
//                                                             {/* Ternary operator true -> use left , wrong -> use right */}
//                                                             {/*(app.options.length > 0) ? <p>Here are your options</p> : <p>No options</p>
//                                                                         this was another way
//                                                                         second way below
//                                                             */}
//             <p>{(app.options.length > 0)
//                     ? 'Here are your options'
//                     : 'No options'}
//             </p>
//             <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do now?</button>
//             <button onClick={onRemoveAll}>Remove All</button>

//             <ol>
//                 {
//                     app.options.map((option) => <li key={option}>{option}</li>)
//                 }
//             </ol>

//             <form onSubmit={onFormSubmit}>
//             <input type="text" name="option"/>
//             <button>Add option</button>
//             </form>
//         </div>
//     ); // -> Wrapper div!

//     ReactDOM.render(template, appRoot);
// };

// render();
