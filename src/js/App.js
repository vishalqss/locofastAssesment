import React, {useState} from 'react';
import MaterialCard from './form/MaterialCard'
import MaterialForm from './form/MaterialForm'
import {Thumbnails} from './common/constants'
import '../css/App.scss';


function App() {
  let [selected, setSelected] = useState({id: 0});
  let [open, setOpen] = useState(false);

  const onClickHandler = (id, source) => {
    setSelected({id: id, source: source});
  }

  const toggleOpen = () => {
    setOpen(!open);
  }

  return (
    <div className="App">
        {Thumbnails.map(({id = '', source, desc}, index) => {
          const isSelected = selected.id === id;
            return <MaterialCard key={id+"-key-"+index} id={id} source={source} desc={desc} isSelected={isSelected}
                                 onClick={onClickHandler.bind(this, id, source)} toggleOpen={toggleOpen}/>
        })}
      {open && <MaterialForm toggleOpen={toggleOpen} selected={selected}/>}
    </div>
  );
}

export default App;
