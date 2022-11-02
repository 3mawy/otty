import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Layout from "./app/components/Layout";
import Home from "./app/pages/Home";
import Camera from "./app/pages/Camera";
import Map from "./app/pages/Map";
import UploadForm from "./app/pages/UploadForm";
import ButtonsOverlay from "./app/components/ButtonsOverlay";

function App() {
    return (
        <div className="App">
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path={"map"} element={<Map/>}>
                            <Route path={"lost"} element={<ButtonsOverlay lost={true}/>}/>
                            <Route path={"found"} element={<ButtonsOverlay/>}/>
                            <Route exact path={"upload"} element={<UploadForm/>}/>
                            <Route exact path={"camera"} element={<Camera/>}/>
                        </Route>
                    </Routes>
                </Layout>
            </Router>
        </div>
    );
}

export default App;
