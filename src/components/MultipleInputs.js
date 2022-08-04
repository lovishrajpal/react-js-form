import {useState} from 'react'
import React from 'react'

// I forgot to import axios. I added to the top of my script:

import axios from 'axios'


export const MultipleInputs = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [address,setAddress]=useState('');
    const [phone,setPhone]=useState('');
    const [comments,setComments]=useState('');

    const handlesubmit=(e)=>{
        e.preventDefault();
        const data={
            Name:name,
            Email:email,
            Address:address,
            Phone:phone,
            Comments:comments
        }
        axios.post('https://sheetdb.io/api/v1/86uxpl3pi4q2w',data).then((response)=>{
           console.log(response);
           setName('');
           setEmail('');
           setAddress('');
           setPhone('');
           setComments('');  

        })
    }

    return (
    
            <form  autoComplete="off" onSubmit={handlesubmit}>
                {/* <div>
                    <h1>Welcome to HCL!</h1>
                </div> */}
                <div class="pic">
                    <img src="istockphoto-1224831853-170667a.jpg" width="650" height="350"></img>
                </div>
                <div class="title-div">
                    <h1>Contact information</h1>
                     <p class="required">*Required</p>
                </div>
                <div class="name-div">
                    <div class="name">Name<span class="required">*</span></div>
                    <div class="input-div"><input type="input" name="Name" placeholder="Your answer" onChange={(e)=>setName(e.target.value)} value={name}/></div>
                </div>
                {/* <div class="name-div">
                    <label htmlFor='Name'>Name</label>
                    <input type='text' onChange={(e)=>setName(e.target.value)} value={name}/>
                </div> */}
                <br></br>
                <div class="college-div">
                    <div class="name">Email<span class="required">*</span></div>
                    <div class="input-div"><input type="input"  onChange={(e)=>setEmail(e.target.value)} value={email} name="Email" placeholder="Your answer"/></div>
                </div>
                {/* <div>
                    <label htmlFor='Email'>Email</label>
                    <input type='text' onChange={(e)=>setEmail(e.target.value)} value={email}/>
                </div> */}
                <br></br>
                <div class="gmail-div">
                    <div class="name">Address<span class="required">*</span></div>
                    <div class="input-div"><input type="input" onChange={(e)=>setAddress(e.target.value)} value={address} name="Address" placeholder="Your answer"/></div>
                </div>
                {/* <div>
                    <label htmlFor='Address'>Address</label>
                    <input type='text' onChange={(e)=>setAddress(e.target.value)} value={address}/>
                
                </div> */}
                <br></br>
                <div class="mobile-div">
                    <div class="name">Phone number</div>
                    <div class="input-div"><input type="input"  onChange={(e)=>setPhone(e.target.value)} value={phone} name="Phone" placeholder="Your answer"/></div>
                </div>
                {/* <div>
                    <label htmlFor='Phone number'>Phone number</label>
                    <input type='text' onChange={(e)=>setPhone(e.target.value)} value={phone}/>
                </div> */}
                <br></br>
                <div class="comments-div">
                    <div class="name">Comments</div>
                    <div class="input-div"><input type="input" onChange={(e)=>setComments(e.target.value)} value={comments} name="Comments" placeholder="Your answer"/></div>
                </div>
                {/* <div>
                    <label htmlFor='Comments'>Comments</label>
                    <input type='text' onChange={(e)=>setComments(e.target.value)} value={comments}/>
                </div> */}
                <br></br>
                <div>
                    <input type="submit" class='btn' name="Submit" value="Submit"/>
                </div>
            </form>

        

    )
 }

export default MultipleInputs
