import * as React from "react"
import L from 'leaflet'
import { MapContainer, FeatureGroup, TileLayer } from 'react-leaflet';
import { EditControl } from "react-leaflet-draw"
import '../node_modules/leaflet/dist/leaflet.css'
import '../node_modules/leaflet-draw/dist/leaflet.draw.css'
import './App.css';
const {log} = console

function App() {
  const headerIcon = [{
    id: 0,
    url: '/icons/add.svg',
    isActive: false
  },
  {
    id: 1,
    url: '/icons/brush.svg',
    isActive: false
  },
  {
    id: 2,
    url: '/icons/cut.svg',
    isActive: false
  },
  {
    id: 3,
    url: '/icons/info.svg',
    isActive: false
  },
  {
    id: 4,
    url: '/icons/left.svg',
    isActive: false
  },
  {
    id: 5,
    url: '/icons/tool.svg',
    isActive: false
  },
  {
    id: 6,
    url: '/icons/undo.svg',
    isActive: false
  }
]
// React.useEffect(() => {
//   var map = L.map('map', {drawControl: true}).setView([51.505, -0.09], 13);
//   var drawnItems = new L.FeatureGroup();
//   map.addLayer(drawnItems);
//   var drawControl = new L.Control.Draw({
//       edit: {
//           featureGroup: drawnItems
//       }
//   });
//   map.addControl(drawControl);
// })
const colorInput = React.useRef()
const [activeItem, setActiveItem] = React.useState(-1)
  return (
    <div className="App">
      <header>
        <div className="tools">

        {headerIcon.map(icon => <img onClick={() => {setActiveItem(icon.id)}} key={icon.id} src={icon.url} alt={'icon'} className={activeItem === icon.id ? 'active' : ''} />)}  
        <select className="font-select" disabled >
          <option>Calibri</option>
          <option>Arial</option>
          <option>Arial</option>
        </select>
        <select disabled>
          <option >2</option>
          <option >4</option>
          <option >6</option>
          <option >8</option>
          <option >10</option>
          <option >12</option>
          <option >14</option>
          <option >16</option>
          <option >18</option>
          <option >20</option>
          <option >24</option>
          <option >32</option>
          <option >48</option>
          <option >72</option>
        </select>
        <input type={'color'} ref={colorInput} />
        </div>
        {/* <img src="/icons/save.svg" alt="save" /> */}
      </header>  
      <main>
      <MapContainer id="map" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        url="https://wallpaperaccess.com/full/6302899.jpg"
      />
      <FeatureGroup>
        <EditControl
          position='topright'
          draw= {{
            polyline: {
                shapeOptions: {
                    color: '#f357a1',
                    weight: 10
                }
            },
            polygon: {
                allowIntersection: false, // Restricts shapes to simple polygons
                drawError: {
                    color: '#e1e100', // Color the shape will turn when intersects
                    message: '<strong>Oh snap!<strong> you can\'t draw that!' // Message that will show when intersect
                },
                shapeOptions: {
                    color: '#bada55'
                }
            },
            marker: false, // Turns off this drawing tool
            circlemarker: false, // Turns off this drawing tool
            rectangle: {
                shapeOptions: {
                    clickable: false
                }
            }
        }}
        />
      </FeatureGroup>
      </MapContainer>
      </main>

    </div>
  );
}

export default App;
