import React, { Component } from 'react';


export default class Navbar extends Component{
    render(){ 
        return (
            <>
            <nav className="navbar navbar-expand-lg " style={{backgroundColor: "#00A8B0"}}>
                <h2 style={{color: "#FFFFFF"}}>Random User Generator</h2>
            </nav>
            </>
        )
    }
}