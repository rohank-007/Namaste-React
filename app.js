import React from "react";
import ReactDOM from "react-dom/client";

//react element 
const heading = React.createElement("h3", {id: 'heading', className:"hello"}, "React Element");


//react elemt using jsx
const jsxheading = <span className="class1" id="id1">
  JSX React Element
  </span>;
console.log(jsxheading)

const root = ReactDOM.createRoot(document.querySelector("div"))
// root.render(jsxheading)


//components 
// types => class based and functional componeneets
//react functional component
const FunctionalComp = () => {
  return <span className="new1">hello i am functional component</span>
}

const FunctionalComp2 = () => <span className="new1">hello i am functional component</span>

//shorthand version
const FunctionalComp3 = () => (
  <div id="container">
        <Secondcomponent />
        <Secondcomponent></Secondcomponent> 
        {Secondcomponent()}
       <span className="new1">hello i am functional component</span>
  </div>
)
root.render(<FunctionalComp3 />)


let value = 2000;


const Secondcomponent = () => (
  <div id="children">
    {jsxheading}
    <p>{value}</p>
    {20+30}
    <p>i am a component composistion</p>
  </div>
)