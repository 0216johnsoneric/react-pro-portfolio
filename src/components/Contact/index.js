import React from 'react'


    const Contact = () => {
        return (
        
            <>
        <div class="w3-display-container">
            <div class="w3-display-middle">
                    <span class="w3-xxlarge w3-text-white w3-wide">CONTACT</span>
            </div>
        </div>


        <form className="form">
          <input
            value={this.state.email}
            name="Name"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Email"
          />
          <input
            value={this.state.username}
            name="Email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Username"
          />
          <input
            value={this.state.password}
            name="Message"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <br></br>
          <button className="btn btn-outline-light bg-dark" onClick={this.handleLogin}>Enter</button>
        </form>
      
        
        </>
         
    
    
        )
    }

export default Contact;