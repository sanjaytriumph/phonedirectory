import React from 'react';
import './Header.css';
const Header = function(props){
    let headerStyle = {
        background: '#000',
        color: '#fff',
        textAlign:'center',
        padding: 20
    }
    return(
        <div className="header" style={headerStyle}>{props.headertext}</div>
    )
}

export default Header;