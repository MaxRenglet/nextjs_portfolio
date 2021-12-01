import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'


class HProjects extends React.Component {
    render() {

      
        const {title, description, slug, coverImage} = this.props.project;
        const url = process.env.NEXT_PUBLIC_ADMIN_URL;
        return (

            <Link href={"/projects/" + slug}>
                <a>
                <h2>{title}</h2>
                <ReactMarkdown>{description}</ReactMarkdown>
                <img src={url+coverImage.url} />
                </a>
            </Link>

        );
    }
}

export default HProjects;