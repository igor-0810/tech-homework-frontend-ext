import React, {useState} from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import Template from './Components/Template';
import SideBar from './Components/organisam/SideBar';
import MyMap from './Components/organisam/MyMap';



function App() {

    const data = require('./data/pois.json');
    const [zoomIntoview, setZoomIntoview] = useState(null);
 
    return (
        
        <Template
            sideBar={<SideBar setZoomIntoview={setZoomIntoview} data={data} />}
        >
            <MyMap data={data} zoomIntoview={zoomIntoview} />
        </Template>
    
    );
}

export default App;
