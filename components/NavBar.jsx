import React, { Component } from 'react'
import Link from 'next/link'
import { Fade } from 'react-awesome-reveal';
class NavBar extends React.Component {
    render() {
        return (
            <Fade
            direction="down"
            >
            <div id="navbarBasicExample" className="navbar-menu">
            
                <div className="navbar-start is-vcentered">
                    <h1 className="logo"><Link className="navbar-item" href="/"><a>RM</a></Link></h1>
                </div>

                <div className="navbar-end is-vcentered">
       
                    <Link className="navbar-item" href="/projects">
                        <a>Projects</a>
                    </Link>

                    <Link className="navbar-item" href="/about">
                    <a>About</a>
                    </Link>


                </div>
            </div>
            </Fade>

        );
    }
}

export default NavBar;