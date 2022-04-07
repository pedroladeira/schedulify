import ReactDOM from 'react-dom';
import React from 'react';
import { Skedule } from '..';

const exDate = new Date();
exDate.setHours(10);
exDate.setMinutes(0);

const events = [{
    id: 'aaa',
    title: 'Some example',
    startDate: exDate,
    duration: 60,
    data: undefined,
    onClick: (event) => console.log('onClick', event),
    onDblClick: (event) => console.log('onDblClick', event),
    onChange: (startDate) => console.log('onChange', startDate),
}];

const App = () => {
    return (<div>
        <h1>Skedule</h1>
        <div>
            <Skedule events={events} />
        </div>
    </div>);
}

ReactDOM.render(<App />, document.getElementById('app'));
