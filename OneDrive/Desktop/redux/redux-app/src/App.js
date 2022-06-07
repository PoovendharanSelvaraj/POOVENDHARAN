import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  // const [count,setCount]=useState(0);
  const dispatch = useDispatch();
  const state = useSelector(state=>state);
  return (
    <div className="App" >
        <h1>Counter:{state.count}</h1>
        <button onClick={()=>dispatch({type:"decre"})} >-</button>
        <button onClick={()=>dispatch({type:"add"})}>+</button>
        <h1>x:{state.userValue}</h1>
        <button onClick={()=>dispatch({type:"minus"})} >-</button>
        <button onClick={()=>dispatch({type:"plus"})}>+</button>
         <h1>Multiply : {state.multiplyValue}</h1>
        <button onClick={()=>dispatch({type:"multiply"})} >multiply</button>
        <h1>divide: { state.divideValue===Infinity || state.divideValue<0?"can't be divided":state.divideValue}</h1>
        <button onClick={()=>dispatch({type:"divide"})}>divide</button>
    </div>
  );
}

export default App;
