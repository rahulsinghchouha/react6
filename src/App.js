import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {

  // const[firstName,setFirstName]=useState("");
  // const[lastName,setLastName]=useState("");
  // console.log(firstName);
  // console.log(lastName);

  // function changefirstNameHandler(event)
  // {
  //   // console.log("first name");
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }

  // function changelastNameHandler(event)
  // {
  //   // console.log("last name");
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const[formData,setFormData]=useState( {firstName:"", lastName:"",email:"",comments:"",isVisible:false,mode:""
,favCar:""});
  console.log(formData);
    function changeHandler(event)
    {
      //ye nikalne ke baad hm sirf name likh kr hee store kr lenge
      const{name,value,type,checked}=event.target;

      setFormData(prevFormData=>{
        return{
          ...prevFormData,
         // [event.target.name]:event.target.value
          [name]:type==="checkbox" ? checked : value
        }
      })
    }

    function submitHandler(event){
      // submit ki property htane ke liye
      event.preventDefault();
      console.log("form data is");
      console.log(formData);

    }
  return (
    <div className="App">
     <form
     onSubmit={submitHandler}
     >
      <input
      type='text'
      placeholder='first name'
      onChange={changeHandler}
      // name ka use kreneg jis name ka object hai vahi likhkar
      name="firstName"
      value={formData.firstName}
/>
    <br/>
    <br/>
    <br/>

     <input
      type='text'
      placeholder='last name'
      onChange={changeHandler}
      name="lastName"
      value={formData.lastName}
      />
 
    <br/>
    <br/>
    <br/>

      <input
      type='email'
      placeholder='Enter email'
      onChange={changeHandler}
      name="email"
      value={formData.email}
      />
      <br/>
      <br/>
      <br/>
      <textarea
      placeholder='enter your comments'
      onChange={changeHandler}
      name='comments'
      value={formData.comments}
      />
      <br/>
      <br/>
      <br/>

    <fieldset>
      <legend>Mode:</legend>
      <label htmlFor='isVisible'>Am I Visible</label>
        <input
    type='checkbox'
    onChange={changeHandler}
    name='isVisible'
    id='isVisible'
    checked={formData.isVisible}
    />
<br/><br/>
    <input
    type="radio"
    onChange={changeHandler}
    name='mode'
    value="Online-Mode"
    id='Online-Mode'
    checked={formData.mode==="Online-Mode"}
   />
   <label htmlFor='Online-Mode'>Online Mode </label>

<input
    type="radio"
    onChange={changeHandler}
    name='mode'
    value="Offline-Mode"
    id='Offline-Mode'
    checked={formData.mode==="Offline-Mode"}
   />
   <label htmlFor='Offline-Mode'>Offline Mode </label>




    </fieldset>



    <select
    onChange={changeHandler}
    name='favCar'
    id='favCar'
    value={formData.favCar}
    >
      <option value="scorpio">Scorpio</option>
      <option value="fortuner">fortuner</option>
      <option value="Thar">Thar</option>
      <option value="Legender">Legender</option>
      <option value="Defender">Defender</option>




    </select>
<button>Submit</button>
     </form>
    </div>
  );
}

export default App;
