
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {setStateRoverName} from './actions';

function App() {

  const imageDate = useSelector(state => state.imageDate)
  const roverChosen = useSelector(state => state.roverChosen)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>NASA Mars Rover Dashboard</h1>

      <div className='currentState'></div>
      <h2>Current State</h2>
      <p>RoverChosen: {roverChosen}</p>
      <p>ImageDate: {imageDate}</p>
      {/* <p>data: {data}</p> */}
      

      <button onClick={() => dispatch(setStateRoverName("Curiosity"))}>Click me</button>
      <button onClick={() => dispatch(setStateRoverName("Opportunity"))}>Click me</button>
      <button onClick={() => dispatch(setStateRoverName("Spirit"))}>Click me</button>


    </div>
  );
}

export default App;
