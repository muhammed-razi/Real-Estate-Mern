import { useState } from 'react';
import './contact.css'



const Contact = () => {

  const [name, setName] =  useState('');
  const [mail, setMail] = useState('');
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');

  return (

    <div className='mainContact'>
    <h2 className='contactH2'>RAAZ PROPERTY</h2>
    <p className='context'> RAAZ Real Estate, we are on a mission to redefine the real estate experience. We aim to empower our clients with the knowledge and resources needed to make informed decisions and find their perfect home.</p>
    <form className='formmain'>
    <div className='arr'>
    <div>
      <label htmlFor='name'>Name:</label>
    </div>
    <input type="text"  id="name"  className='input' value={name} onChange={(e) => setName(e.target.value)}/>
    </div>
    <div className='arr1'>
   < div>
      <label htmlFor='email'>E-MAIL:</label>
    </div>
    <input type="text"  id="email"  className='input' value={mail} onChange={(e) => setMail(e.target.value)}/>
    </div>
    <div className='arr2'>
    <div>
      <label htmlFor='title'>TITLE:</label>
    </div>
    <input type="text"  id="title"  className='input' value={title} onChange={(e) => setTitle(e.target.value)}/>
    </div>
    <div className='arr2'>
    <div>
      <label htmlFor='about'> ABOUT:</label>
    </div>
    <textarea  id="about"  className='textbox'  rows="6" value={about}  onChange={(e) => setAbout(e.target.value)}/>
    </div>
    <div className='btnmain'>
      <div>
    <button className='btnsub'>SUBMIT</button>
     </div>
     <div>
    <button className='btncancel' >CANCEL</button>
     </div>

    </div>


    </form>
    </div>

)
}

export default Contact
