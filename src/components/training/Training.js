import { useState } from "react";
import React from "react";
import './Training.css';

function Training() {
  
  const handleSubmit = evt => {
    evt.preventDefault();
    
    let checkData = true; 
    items.forEach(element => {
      if (element.date == evt.target.date.value){
        element.distance += parseFloat(evt.target.distance.value);
        checkData = false;
      }
    });

    if (checkData){
      setItems([...items, form].sort((a, b) => {
        return new Date(a.date) > new Date(b.date) ? 1 : -1;
      }));
    } else {
      setItems([...items].sort((a, b) => {
        return new Date(a.date) > new Date(b.date) ? 1 : -1;
      }));
    }
  }

  const[form, setForm]= useState({
    date: '',
    distance: null
  });

  const handleClick = (form_date, form_distance) => {
    setForm(prevForm => ({...prevForm, date: form_date}));
    setForm(prevForm => ({...prevForm, distance: parseFloat(form_distance)}));
  }

  const handleNameChangeDate = evt => {
    setForm(prevForm => ({...prevForm, date: evt.target.value}));
  }

  const handleNameChangeDistance = evt => {
    let value;
    if (evt.target.value == ''){
      value = evt.target.value;
    } else {
      value = parseFloat(evt.target.value);
    }
    setForm(prevForm => ({...prevForm, distance: value}));
  }
  
  const [items, setItems] = useState([{
    date: '2019.07.20',
    distance: 5.7
  }, {
    date: '2019.07.19',
    distance: 14.2
  },{
    date: '2019.07.18',
    distance: 3.4
  }]);
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <th>Дата (ДД.ММ.ГГГГ)</th>
            <th>Пройдено, км</th>
            <th></th>
          </thead>
          <tbody>
            <tr>
              <td><input id="date" name="date" value={form.date} onChange={handleNameChangeDate} pattern="\d{4}\.\d{1,2}\.\d{1,2}"/></td>
              <td><input id="distance" name="distance" value={form.distance} onChange={handleNameChangeDistance}/></td>
              <td><button>ОК</button></td>
            </tr>
          </tbody>
        </table>
      </form>
      <table>
        <thead>
          <th>Дата (ДД.ММ.ГГГГ)</th>
          <th>Пройдено, км</th>
          <th></th>
        </thead>
        <tbody>
          {items.map((item) => 
            <tr>
              <td key={item.data}>{item.date}</td>
              <td key={item.distance}>{item.distance}</td>
              <td><button onClick={() => handleClick(item.date, item.distance)}>ред.</button>  / <button>уд.</button></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Training;