import './App.css';
import ClockControl from './components/ClockControl';

function App() {
  
  const myStyle = {
    

    padding: " 10px 10px 10px 100px" ,
    fontFamily: "Serif",
    width: "500px",
    margin:"auto"
  };

  return (

    <div style={myStyle}>
    <ClockControl/>
    </div>
    
  );
}

export default App;
