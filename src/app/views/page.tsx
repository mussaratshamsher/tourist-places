
// import Link from "next/link"


// export default function Shareviews ( ) {
// return(
//     <main className="card">
//         <p>
//     Share views  <br />& your favourite Journey with us <br />
//         feeling them as your Happy moments...</p>

    
// <button  className="btn">
//             <Link href="/views/stories"> Write story</Link>
//     </button>
// <br />
//     </main>

// )
// }

"use client"

import React from 'react'
import { useState } from 'react'

export default function Stories ( ) {

    const[name, setName] = useState(" ")
    const[story, setStory] = useState(" ")
    
  
    const [isTrue, setTrue] = useState(false)
  
  const onclickHandler =(e: any)=> {
    e.preventDefault();
    setTrue(true)
  }
    return(
        <main>


            <form id='form-body' >
            <p className='font-bold'>
                We will feel so Happy if you would like to Share
                 Your 
                 <br />
                 valuable thoughts & stories regarding your 
            meorable journey with us...</p>

            <div id='inputs'>
  <label htmlFor="name"> Name: </label>
  <input type="text" placeholder='type name here'
  onChange={(e) =>setName(e.target.value)} value={name} />

</div>
<br />
<div id="inputs">
  <label htmlFor="story"> Story: <br /></label>
 <textarea name="story" placeholder='3 lines' 
   onChange={(e) =>setStory(e.target.value)} value={story} ></textarea>
</div>
<br />
<div >
<button onClick={onclickHandler} id='button' >Post</button>
  </div>
            </form>
<br />
            {isTrue && <div  className='card'>
  <div id='story-body'> 
     <p><b>Name: </b>{name}</p>
    <p><b>Story: </b>{story}</p> 
   
  </div>
</div>
}  
        </main>
    
    )
    }
    



 

  