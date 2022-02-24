import React from 'react';
import {Link} from "react-router-dom"

function Error() {
  return (
    <div style={{
        display:'flex',
        flexDirection:'column',
        justifyItems:'center',
        alignItems:'center',
        marginTop:'10rem',
        fontSize:'5rem'
        }}> <p>404 Error</p>
        <Link style={{
            marginTop:'10rem',
        }}to="/">
            <button  style={{
                fontSize:'5rem',
                padding:'1.2rem 2rem',
                borderRadius:'1rem',
                backgroundColor:'lightgreen',
                cursor:'pointer',
                border:'none'
            }}>Back to our website</button>
        </Link>
        </div>
  )
}

export default Error