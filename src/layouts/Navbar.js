import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class Navbar extends Component{
    render(){ 
        return (
            <>
            <nav className="navbar navbar-expand-lg " style={{backgroundColor: "#00A8B0"}}>
                <Link className="navbar-brand text-white font-weight-bold text-monospace" to='/' >Random User Generator</Link>
            </nav>
            </>
        )
    }
}