import * as React from "react"
import { Dialog } from '@headlessui/react'
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
const [isNewShapeDialogOpen, setIsNewShapeDialogOpen] = React.useState({
  data: false,
  relation: false,
  function: false,
})
let [isOpen, setIsOpen] = React.useState('')
  return (
    <div className="App">
      <header className="flex basis-[5%] flex-row items-center justify-between p-1">
        <div className="flex flex-row gap-2 items-center">

        {headerIcon.map(icon => <img onClick={() => {setActiveItem(icon.id)}} key={icon.id} src={icon.url} alt={'icon'} className={activeItem === icon.id ? 'active' : ''} />)}  
        <select className="w-[8rem]" disabled >
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
      <main className="flex flex-row basis-[95%]">
      <canvas className="basis-3/4"></canvas>
      <aside className="flex flex-col gap-2 basis-1/4">
        <div className="flex flex-col p-2 gap-2 border-b border-black items-center flex-wrap ">
          <button className="border-black w-full border hover:opacity-60 px-2 cursor-pointer whitespace-nowrap flex flex-row gap-0 items-center rounded-full py-1" onClick={() => setIsOpen('data')}><img src="/icons/add.svg" alt="new" />New Data</button>
          <button className="border-black w-full border hover:opacity-60 px-2 cursor-pointer whitespace-nowrap flex flex-row gap-0 items-center rounded-full py-1" onClick={() => setIsOpen('function')}><img src="/icons/add.svg" alt="new" />New Function</button>
          <button className="border-black w-full border hover:opacity-60 px-2 cursor-pointer whitespace-nowrap flex flex-row gap-0 items-center rounded-full py-1" onClick={() => setIsOpen('relation')}><img src="/icons/add.svg" alt="new" />New Relation</button>
          <Dialog
            open={isOpen === 'data'}
            onClose={() => setIsOpen('')}
            className="relative z-50"
          >
            {/* The backdrop, rendered as a fixed sibling to the panel container */}
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

            {/* Full-screen container to center the panel */}
            <div className="fixed inset-0 flex items-center justify-center p-4">
              {/* The actual dialog panel  */}
              <Dialog.Panel className="flex flex-col mx-auto max-w-sm rounded bg-white">
                <header className="border-b border-black px-5 py-2 flex flex-row items-center justify-between">New Data</header>
                <main className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-5">
                  <div className="form-el">
                    <label for="Name" >Name</label>
                    <input type={'text'} id="Name"/>
                  </div>
                  <div className="form-el">
                    <label for="Value" >Value</label>
                    <input type={'text'} id="Value"/>
                  </div>
                </main>
                <footer className="border-black flex flex-row items-center gap-2 justify-end border-t px-5 py-3">
                  <button className="px-5 py-1 rounded border bg-green-400 border-black grid place-items-center text-center" >Create</button>
                  <button className="px-5 py-1 rounded border border-black grid place-items-center text-center" >Cancel</button>
                </footer>
              </Dialog.Panel>
            </div>
          </Dialog>
          <Dialog
            open={isOpen === 'function'}
            onClose={() => setIsOpen('')}
            className="relative z-50"
          >
            {/* The backdrop, rendered as a fixed sibling to the panel container */}
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

            {/* Full-screen container to center the panel */}
            <div className="fixed inset-0 flex items-center justify-center p-4">
              {/* The actual dialog panel  */}
              <Dialog.Panel className="flex flex-col mx-auto max-w-sm rounded bg-white">
                <header className="border-b border-black px-5 py-2 flex flex-row items-center justify-between">New Function</header>
                <main className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-5">
                  <div className="form-el">
                    <label for="Name" >Name</label>
                    <input type={'text'} id="Name"/>
                  </div>
                  <div className="form-el">
                    <label for="Value" >Value</label>
                    <input type={'text'} id="Value"/>
                  </div>
                </main>
                <footer className="border-black flex flex-row items-center gap-2 justify-end border-t px-5 py-3">
                  <button className="px-5 py-1 rounded border bg-green-400 border-black grid place-items-center text-center" >Create</button>
                  <button className="px-5 py-1 rounded border border-black grid place-items-center text-center" >Cancel</button>
                </footer>
              </Dialog.Panel>
            </div>
          </Dialog>
          <Dialog
            open={isOpen === 'relation'}
            onClose={() => setIsOpen('')}
            className="relative z-50"
          >
            {/* The backdrop, rendered as a fixed sibling to the panel container */}
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

            {/* Full-screen container to center the panel */}
            <div className="fixed inset-0 flex items-center justify-center p-4">
              {/* The actual dialog panel  */}
              <Dialog.Panel className="flex flex-col mx-auto max-w-sm rounded bg-white">
                <header className="border-b border-black px-5 py-2 flex flex-row items-center justify-between">New Relation</header>
                <main className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-5">
                  <div className="form-el">
                    <label for="Name" >Name</label>
                    <input type={'text'} id="Name"/>
                  </div>
                  <div className="form-el">
                    <label for="Value" >Value</label>
                    <input type={'text'} id="Value"/>
                  </div>
                </main>
                <footer className="border-black flex flex-row items-center gap-2 justify-end border-t px-5 py-3">
                  <button className="px-5 py-1 rounded border bg-green-400 border-black grid place-items-center text-center" >Create</button>
                  <button className="px-5 py-1 rounded border border-black grid place-items-center text-center" >Cancel</button>
                </footer>
              </Dialog.Panel>
            </div>
          </Dialog>
        </div>
        <div className="flex flex-col gap-2 p-2"></div>
      </aside>
      </main>

    </div>
  );
}

export default App;
