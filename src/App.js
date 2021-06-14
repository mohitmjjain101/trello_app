import logo from './logo.svg';
import './App.css';
import {BoxComponent} from './component/input'
import { useState } from 'react';
function App() { 

  const [list , setList] = useState([
    // {
    //     "title" : "titleName",
    //     "cardList":[
    //         {
    //             "cardTitle":"cardTitle",
    //             "cardDescription" : "cardDescription",
    //             "time":1500093039303
    //         },
    //         {
    //             "cardTitle":"cardTitle",
    //             "cardDescription" : "cardDescription",
    //             "time":1500093039303
    //         },
    //         {
    //             "cardTitle":"cardTitle",
    //             "cardDescription" : "cardDescription",
    //             "time":1500093039303
    //         }
    //     ]
    // }
    // ,
    // {
    //     "title" : "titleName",
    //     "cardList":[
    //         {
    //             "cardTitle":"cardTitle",
    //             "cardDescription" : "cardDescription",
    //             "time":1500093039303
    //         },
    //         {
    //             "cardTitle":"cardTitle",
    //             "cardDescription" : "cardDescription",
    //             "time":1500093039303
    //         },
    //         {
    //             "cardTitle":"cardTitle",
    //             "cardDescription" : "cardDescription",
    //             "time":1500093039303
    //         }
    //     ]
    // },
    // {
    //     "title" : "titleName",
    //     "cardList":[
    //         {
    //             "cardTitle":"cardTitle",
    //             "cardDescription" : "cardDescription",
    //             "time":1500093039303
    //         },
    //         {
    //             "cardTitle":"cardTitle",
    //             "cardDescription" : "cardDescription",
    //             "time":1500093039303
    //         },
    //         {
    //             "cardTitle":"cardTitle",
    //             "cardDescription" : "cardDescription",
    //             "time":1500093039303
    //         }
    //     ]
    // }
]);

  const handleClick = ()=>{

    let data = list;
    let object = {
      "title" : "xyz",
      "cardList":[]
    }
    data.push(object)
    setList(data)
    console.log(list)

  }


  return (
    <div className="App">
      <h1>Trello Board</h1>
      <button onClick={handleClick}>Add List</button>
      {
        list.map((value)=>{
          return(
          <BoxComponent  data={value} />
          )
        })
      }
    </div>
  );
}

export default App;
