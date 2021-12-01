import React, {Component} from 'react'
import { Fade } from "react-awesome-reveal";

class Footer extends React.Component {
  render() {
    return (

      <Fade
      direction="up"
      >
      <footer className="footer">
        <div className="columns">
        <div className="column">
            Fullstack Developper, <br />
            Digital Artist, <br />
            Teacher
          </div>

          <div className="column has-text-centered">
            maxime.renglet@gmail.com<br />
            +32 476 64 16 69
          </div>
          <div className="column has-text-right">
            Brussels, BE
          </div>

        </div>
      </footer>

      </Fade>
    );
  }
}

export default Footer;