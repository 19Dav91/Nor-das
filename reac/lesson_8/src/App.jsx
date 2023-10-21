import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


const initNotes = [
    {
        id: 'GYi9G_uC4gBF1e2SixDvu',
        prop1: 'value11',
        prop2: 'value12',
        prop3: 'value13',
    },
    {
        id: 'IWSpfBPSV3SXgRF87uO74',
        prop1: 'value21',
        prop2: 'value22',
        prop3: 'value23',
    },
    {
        id: 'JAmjRlfQT8rLTm5tG2m1L',
        prop1: 'value31',
        prop2: 'value32',
        prop3: 'value33',
    },
];

function App() {
    const [notes, setNotes] = useState(initNotes);

    const result = notes.map(note => {
        return <li key={note.id}>
            <span>{note.prop1}</span>
            <span>{note.prop2}</span>
            <span>{note.prop3}</span>
        </li>;
    });
    let el = {
        id: 'JAmjRlfQTsaf8rLTm5tG2m1L',
        prop1: 'value41',
        prop2: 'value42',
        prop3: 'value43',
    }
    function addElem() {
        setNotes([...notes, el])
    }
    return <div>
        <ul>
            {result}
        </ul>
        <button onClick={addElem()}>Add</button>
    </div>;
}