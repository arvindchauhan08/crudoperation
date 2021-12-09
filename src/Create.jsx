import React, { useState } from 'react';
import axios from 'axios';
const Create=()=> {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    // const postData = () => {
    //     console.log(firstName);
    //     console.log(lastName);
    
    // }

    const reges = (e) => {
e.preventDefault();
        console.log('arvind')
    
        axios.post(`https://61b1f303c8d4640017aaf0a6.mockapi.io/data/`, {
            
            firstName,
            lastName,
            
        })
    }
    return (
        <div  className="create_form">
            <form className="create_form">
                
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
                
                
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                
                
                <button onClick={reges} >Submit</button>
            </form>
        </div>
    )
}
export default Create;