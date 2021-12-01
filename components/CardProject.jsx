import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import Date from 'date-and-time';
import SVG from './Svg';
import Fade from 'react-reveal/Fade';

class CardProjects extends React.Component {

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    render() {

        const { url, project, k } = this.props;

        const { slug, date, title, description, categories, coverImage } = project;

        let _date = Date.parse(date, 'YYYY-MM-DD');
        _date = Date.format(_date, 'YYYY');


        const _categories = categories.map((category, index) => (
            <li key={index}>{category.title}</li>
        ));



        return (

            <Link href={`/projects/${slug}`}>
                {k % 2 ?
                 <Fade left  cascade>
                    <a className="project_card">
                        <h1>{title}</h1>


                        <div className="columns is-vcentered reverse-columns">
                            <div className="column is-two-thirds">
                                <img src={url + coverImage.url} />
                            </div>
                            <div className="column infos">
                                <span className="date">{_date}</span>
                                <ul className="categories">{_categories}</ul>
                                <ReactMarkdown>{description}</ReactMarkdown>
                                {/* <button className="readmore">Read More !</button> */}
                            </div>
                        </div>
                        <SVG />
                    </a>
                    </Fade>
                    :
                    <Fade right  cascade>
                    <a className="project_card">
                        <h1>{title}</h1>
                        <div className="columns is-vcentered">
                            <div className="column infos">
                            <span className="date">{_date}</span>
                                <ul className="categories">{_categories}</ul>
                                <ReactMarkdown>{description}</ReactMarkdown>
                                {/* <button className="readmore">Read More !</button> */}
                            </div>
                            <div className="column is-two-thirds">
                                <img src={url + coverImage.url} />
                            </div>
                        </div>
                        <SVG />
                    </a>
                    </Fade>
                }




            </Link>
       
        );
    }
}

export default CardProjects;