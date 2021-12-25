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

  return (
    <Tree
      data={data}
      gProps={{
        className: 'node',
        onClick: handleClick,
      }}
      height={700}
      width={1000}
    />
  );
};

export default App;
