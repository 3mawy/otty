import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Layout from "./app/components/Layout";
import Home from "./app/pages/Home";
import Camera from "./app/pages/Camera";

function App() {
    return (
        <div className="App">
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/otty/" element={<Home/>}/>
                        <Route exact path={"camera"} element={<Camera/>}/>
                    </Routes>
                </Layout>
            </Router>
        </div>
    );
}

export default App;
