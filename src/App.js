import { useState } from 'react';
import { data } from './data';
import { data1 } from './data1';
import './App.css';

function App() {
  const [towns, setTowns] = useState(data);
  const [pic, setPic] = useState(0);
  const {image} = data1[pic];

  const removeLocation = (id) => {
    let newLocation = towns.filter(town => town.id !== id);
    setTowns(newLocation)
  }

  const clickBack =()=> {
    setPic((pic=>{
      pic --;
      if(pic<0){
        return data1.length-1;
      }
      return pic;
    }))
  }

  const clickNext =()=>{
    setPic((pic=>{
      pic ++;
      if(pic>data1.length-1) {
        pic=0;
      }
      return pic;
    }))
  }
//<h1>DISCOVER LISBON WITH US!</h1>
  return (
  <div>
    <div className='container'>
    <h1>DISCOVER LISBON WITH US!</h1>
    </div>
    <div className='block'>
    <div className='container'>
      <button className='btnSlide' onClick={clickBack}> 《 </button>
    <img src={image} alt="portugal"/>
      <button className='btnSlide' onClick={clickNext}> 》 </button>
    </div>
      <h4> ❰ There is so much to see in Lisbon that we divided the town in circuits. Whatever circuit you choose, you can count on a safe, comfortable and really funny tour. You can stay inside Lisbon and know all of it’s history, or choose the surroundings. You can also do your own tour, choosing the places you want to visit. ❱</h4>
    </div>
    <div className='container'>
      <h3> {towns.length} best destination :</h3>
    </div>
    

    {towns.map((element=>{
      const{id, townName, description, source} = element;
      return(
      <div key={id}>

        <div className='container'>
          <h2 className='number'>{id}.</h2>
          <h2 className='number'> {townName}</h2>
          <p className='description'>{description}</p>
        </div>
        <div className='container'>
        <p className='source'>Source: {source}</p>
        </div>
        <div className='container'>
        <button className='btn' onClick={()=>removeLocation(id)}>Remove</button>
        </div>
      <hr/>
      </div>
      )
    }))}
    <div className='container'>
    <button className='btnDelete' onClick={()=> setTowns([])}>Delete All Destinations</button>
    </div>

  </div>
  );
}

export default App;
