import React, {useState} from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import Template from './Components/Template';
import SideBar from './Components/Organisam/SideBar';
import MyMap from './Components/Organisam/MyMap';

import data from './data/pois.json';


const mapboxToken =
  'pk.eyJ1IjoiaWdvcml2YW5vdiIsImEiOiJjbDRteDlseHcxOXlyM2NtaDFqYm1zajBzIn0.Ih1dDKmkuHaXZpLKUaR0Iw';

function App() {
   
    const [zoomIntoview, setZoomIntoview] = useState(null);
 

 
    return (
        
        <Template
            sideBar={<SideBar setZoomIntoview={setZoomIntoview} data={data} />}
        >
            <MyMap mapboxToken={mapboxToken} data={data} zoomIntoview={zoomIntoview} setZoomIntoview={setZoomIntoview}/>
        </Template>
      
    );
}

export default App;
