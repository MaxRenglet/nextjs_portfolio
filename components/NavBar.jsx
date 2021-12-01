import React, { Component } from 'react'
import Link from 'next/link'

class NavBar extends React.Component {
    render() {
        return (

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <h1 className="logo"><Link className="navbar-item" href="/"><a>RM</a></Link></h1>
                </div>
                <div className="navbar-end">

                    <Link className="navbar-item" href="/projects">
                        <a>Projects</a>
                    </Link>

                    <Link className="navbar-item" href="/about">
                    <a>About</a>
                    </Link>


                </div>
            </div>

        );
    }
}

export default NavBar;