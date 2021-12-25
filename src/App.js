import React from 'react';
import Tree from 'react-tree-graph';
// import data from './data';
import 'react-tree-graph/dist/style.css';
import './App.css';

const App = (props) => {
  let data = {
    name: 'Root',
    children: [
      {
        name: 'Eventi',
        children: [],
      },
      {
        name: 'Residenze Artistiche',
        children: [],
      },
      {
        name: 'Chi Siamo',
        children: [],
      },
      {
        name: 'Festival',
        children: [
          {
            name: 'Programma Completo',
            children: [],
          },
          {
            name: 'Biglietti',
            children: [],
          },
        ],
      },
      {
        name: 'Progetti',
        children: [],
      },
      {
        name: 'Workshop',
        children: [],
      },
      {
        name: 'Programma Completo',
        children: [],
      },
      {
        name: 'Report',
        children: [],
      },
      {
        name: 'Studio',
        children: [
          {
            name: 'Residenze Artistiche',
            children: [],
          },
          {
            name: 'Workshop',
            children: [],
          },
          {
            name: 'Educazione',
            children: [],
          },
        ],
      },
      {
        name: 'Artisti Associati',
        children: [],
      },
      {
        name: 'Biglietti',
        children: [],
      },
      {
        name: 'Educazione',
        children: [],
      },
      {
        name: 'Partners',
        children: [],
      },
      {
        name: 'Contaminazioni',
        children: [
          {
            name: 'Eventi',
            children: [],
          },
          {
            name: 'Progetti',
            children: [],
          },
          {
            name: 'Artisti Associati',
            children: [],
          },
        ],
      },
      {
        name: 'Info',
        children: [
          {
            name: 'Chi Siamo',
            children: [],
          },
          {
            name: 'Report',
            children: [],
          },
          {
            name: 'Partners',
            children: [],
          },
        ],
      },
      {
        name: 'News',
        children: [],
      },
    ],
  };

  const handleClick = (event, node) => {
    console.log('handle click ', event);
    console.log('handle click node', node);
    alert(`${node} got clicked`);
  };

  let coords = {
    x1: 50,
    x2: 50,
    y1: 50,
    y2: 700,
  };

  return (
    <svg width={800} height={600}>
      <line {...coords} stroke="black" strokeWidth={1} />
      <circle cx={50} cy={50} r={10} fill="red" onClick={handleClick} />
    </svg>
  );
};

export default App;
