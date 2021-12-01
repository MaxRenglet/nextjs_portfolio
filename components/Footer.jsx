import React, {Component} from 'react'


class Footer extends React.Component {
  render() {
    return (

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

    );
  }
}

export default Footer;