import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Forms from './components/Forms';
import WheatherContainer from './components/WheatherContainer';



function App() {
  return (
    <div className="App">
     <Forms></Forms>
     <WheatherContainer></WheatherContainer>
    </div>
  );
}

export default App;
