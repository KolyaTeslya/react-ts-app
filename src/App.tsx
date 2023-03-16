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
  city?: string
  country: string
}

type UserType = {
  sayHello: (message: string) => void
  name: string
  age: number
  isSamurai: boolean
  address: AddressType | null
}

let user: UserType ={ 
  sayHello(message: string) {alert('yo')},
  name: 'Kolya',
  age: 2,
  isSamurai:true,
  address: {
    country: "Ukraine"
  }
}

console.log(user.sayHello("yo yo"));

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
