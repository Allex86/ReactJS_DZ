import React from 'react';
//let React = require('react');
import ReactDOM from 'react-dom';

class App extends React.Component
{
    render()
    {
        return <div>
            <h1>Первое приложение на React!</h1>
            <p>Hello!</p>
            <p>Hello WebPack!!!</p>
            <button id='getData'>GET_DATA!</button>
        </div>;
    }
}

let current_date = require('./components/current_date');



let message = require('./message');

message('Модуль вызван из Index.js');

exports.message = message;

ReactDOM.render(<App/>, document.getElementById('root'));

current_date();