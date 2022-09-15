import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Map from "./components/Map/Map";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Map/>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
