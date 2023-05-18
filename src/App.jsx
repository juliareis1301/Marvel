import Header from "./Pages/CharactersPage/components/Header/Header";
import './index.css';
import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./Routes";


function App() {

  return (
    <BrowserRouter className="App">
      <Header/>     
      <RoutesApp/>
    </BrowserRouter>
  );
}

export default App;