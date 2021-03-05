import _ from "lodash";
import "./style.css";
import icon from "./icon.jpg";
import Data from './data.xml';
import Notes from './data.csv';
import toml from "./data.toml";

function component() {
    const element = document.createElement('div');
  
    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add("hello");
    
    const myIocn = new Image();
    myIocn.src = icon;
    element.appendChild(myIocn);

    console.log(Data);
    console.log(Notes);
    console.log(toml);
    return element;
  }
  
  document.body.appendChild(component());