     ////js version
// let value = document.createElement('h1')
// value.innerHTML = 'hello world!';

// let root = document.querySelector('.id')
// root.appendChild(value);

  //react version

  let heading = React.createElement('h3',
    {id: 'heading', xyz: 'abc'},
    'hello world , my first react');

  let root = ReactDOM.createRoot(document.querySelector('.root'));

  root.render(heading);

//  console.log(heading)
//  console.log(root)


  //nested element
  let parent = React.createElement('div', {id: 'parent'},[
  React.createElement('div', {id: 'child'},
    [ React.createElement('h1', {id: 'sibling'}, 'i am sibling 1'),
      React.createElement('h2', {id: 'sibling'}, 'i am sibling 2'),
      React.createElement('h3', {id: 'sibling'}, 'i am sibling 3')
    ]),
      React.createElement('div', {id: 'chil2'},
    [ React.createElement('h3', {id: 'sibling'}, 'i am sibling of c2'),
      React.createElement('h3', {id: 'sibling'}, 'i am sibling of c2'),
      React.createElement('button', {id: 'sibling'}, 'i am sibling of c2 button')
    ])
  ]);
  let root2 = ReactDOM.createRoot(document.querySelector('.root2'));

  root2.render(parent);


