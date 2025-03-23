import React from "react"
import ReactDOM from "react-dom/client"




// JSX -> JavaScript XML -> XML Like Syntax
// Not a Pure JavaScript
// Parcel is doing the job behind the scenes before the code is submitted to the browser's JS engine
// Babel is the tool that converts JSX to React.createElement that react understands
// JSX => React.createElement => Object => Rendering this onto DOM becomes HTML
const heading = (<h1 className = "head" tabIndex="5">
    Namaste React Using JSX
    </h1>)

// React Components
// 2 types of components - Functional Components and Class Components
// Class components are the older way of writing components
// Functional components are the new way of writing components

// React Functional Component - A function that returns JSX

const elem = <span>React Element </span>

// JSX sanitizes to prevent cross site scripting
const Title = () => (
    <h1 className="head">
        {elem}
        Namaste React
    </h1>
    
)
// Component Composition
const HeadingComponent = () => (
 <div id="container">
    {Title()}
    <h1>Namaste React Functional Component </h1>
 </div>    
)




const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent />)


