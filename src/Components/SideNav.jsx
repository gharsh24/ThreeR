import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const VerticalNavbar = () => {
    const divstyle={
        backgroundColor: '#1a1919',
        padding: '20px',
        color: 'white',
        height: '100vh'
    }
    
    
  return <div className='vertical-nav' style={divstyle}>
    <div style={{ width: '70px', height: '70px', borderRadius: '50%', overflow: 'hidden' }}>
    <img src='../../public/assets/userlogo.png' style={{ width: '100%', height: 'auto', display: 'block' }}/>

    </div>
    <br/>
    <h2>Welcome User</h2>
    <br/>
    <h5>Your points</h5>
    <br/>
    <h5>Your progress</h5>

  </div>
};

export default VerticalNavbar;
