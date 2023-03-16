import React from 'react';
import logo from './logo.svg';
import './App.css';


let a : number | null = 10;
let name: string = "it-proger";
name = "it-proger";

let sex: "male" | "female";
//sex = "man"

let isSamurai: boolean | null = true;
isSamurai = null;

let names: Array<string> = ["Kolya", "Dimych", "Valera"];
// alert( names[0].toUpperCase());
names.forEach(n =>{
  // alert(n)
});

type AddressType = {
  city?: string | null
  country: string | null
}



let initialState = { 
  name: null as string | null,
  age: null as number | null, 
  isSamurai: null as boolean | null,
  addresses: [] as Array<AddressType>, 
  counter: 0
}

export type InitialStateType = typeof initialState;
let state: InitialStateType = {
    addresses: [{city: "rrcrc", country: "crcr"}],
    age: null,
    counter: 10,
    isSamurai: true,
    name: "Kolya"
}


let GET_TASKS = "APP/GetTASKS";
type GetTasksActionType = {
  id: number,
  type: typeof GET_TASKS
}

let action: GetTasksActionType = {
  type: GET_TASKS,
  id: 12
}


// console.log(user.sayHello("yo yo"));

const summ = (a:any , b:any ) => {
  return a + b;
}

summ(10, "20")

console.log(summ(10, "20"));



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
