class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer!!';
        const options = ['Thing one', 'Thing two', 'Thing five'];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}



class Header extends React.Component {
    render() {        
        return (
            <div>
             <h1>{this.props.title}</h1>
             <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
             <button>What should i do?</button>
            </div>
        );
    }
}

class Options extends React.Component{
    render() {
      return (
        <div>
         <p> Options will be here</p> 
         {
             // key reserved key and cannot usable as props key.
            this.props.options.map((option) => <Option key={option} optionText={option}/>)
         }
         
        </div>
      );
    }
}

class Option extends React.Component{
    render() {
        console.log(this.props);
        return (
           <div>
            {this.props.optionText}
           </div>
        );
    }
}

class AddOption extends React.Component{
    render() {
        return (
            <div>
                <p> Add option will be here</p>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));