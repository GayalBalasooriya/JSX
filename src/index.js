import React from 'react';
import ReactDOM from 'react-dom';



const App = () => {

    const buttonText = { text: 'Click Me'};

    // function getButtonText() {
    //     return "Click on me"
    // }

    return (<div>
    <label className="label" htmlFor="name">Enter name:</label>
    <input id="name" type="text"/>
    <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText.text}</button>
    </div>);
};

ReactDOM.render(<App/>, document.querySelector('#root'));