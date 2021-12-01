import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import Date from 'date-and-time';
import SVG from './Svg';


class Button extends React.Component {


    render() {

        const { href, children, style } = this.props;

       

        return (
            <Link href={href}>

                <a className={`btn ${style}`}>
                    <div className="btn-label">{children}</div>
                    <SVG />
                </a>

            </Link>

        );
    }
}

export default Button;