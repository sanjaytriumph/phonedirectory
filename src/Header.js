import React from 'react';
import './Header.css';
const Header = function(){
    let headerStyle = {
        background: '#000',
        color: '#fff',
        textAlign:'center',
        padding: 20
    }
    return(
        <div className="header" style={headerStyle}>Phone Directory</div>
    )
}

export default Header;