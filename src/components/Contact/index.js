import React from 'react'


    const Contact = () => {
        return (
        
            <>
        <div class="w3-display-container">
            <div class="w3-display-middle">
                    <span class="w3-xxlarge w3-text-white w3-wide">CONTACT</span>
            </div>
        </div>

          <div>
        <form className="form">
          <input
            
            name="Name"
            
            type="text"
            placeholder="Email"
          />
          <input
            
            name="Email"
            
            type="text"
            placeholder="Email"
          />
          <input
            
            name="Message"
            
            type="textarea"
            placeholder="Message"
          />
          <br></br>
          <button className="btn btn-outline-light bg-dark">Enter</button>
        </form>
          </div>
        
        </>
         
    
    
        )
    }

export default Contact;