import React from "react"
import * as ReactDOMClient from "react-dom/client"
import App from "./App"
import './css/style.css'

const app = ReactDOMClient.createRoot(document.getElementById("app"))
app.render(<App/>)



//  function App() {
//   return (<div  className="name">
//     <Header />
//     <Header />
//     <Header />
//     <h1>{helpText}</h1>
//     <input placeholder={helpText} onClick={inputClick} onMouseEnter={mouseOver}/>
//     <p>{helpText === "help text" ? "yes" : "no"}</p>
// </div>)
//  }

// ReactDOM.render(React.createElement('input', {
//     placeholder: "Help text",
//     value:"",
//     onClick: () => console.log("clicked"),
//     onMouseEnter: () => console.log("Mouse over"),
// }), document.getElementById("app"))
