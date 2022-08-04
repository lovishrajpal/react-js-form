import logo from './logo.svg';
import './App.css';
import MultipleInputs from './components/MultipleInputs';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           React js Application made by Lovish Rajpal!
//         </a>
//       </header>
//     </div>
//   );
// }
const App = () =>{
  return(
    <div className='App'>
      <header className="App-header">
        <MultipleInputs/>
      </header>
    </div>

  ) 
}


export default App;
