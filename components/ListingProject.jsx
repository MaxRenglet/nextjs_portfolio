import axios from 'axios';
import React, { Component } from 'react'
import CardProject from './CardProject';
import gsap from 'gsap';

class ListingProjects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: this.props.projects,
            categories: this.props.categories
        };
    }


    render() {

        const { url } = this.props;

        const { projects, categories } = this.state;

        let sub = this;
        const handleClick = (e) => {

            categories.forEach(category => {
                if(category.id === e.target.value){
                    category.select = true;
                } else {
                    category.select = false;
                }
            });

            sub.setState({
                categories:categories
            })

            let result = document.querySelector('.results');
            // result.classList.add('tofade');
            gsap.to(
                result, 1,
                {
                    opacity: 0,
                    y: 50,
                    onComplete: function(){axios.get(`${url}/projects?categories.id=${e.target.value}`)
                    .then(function (response, data) {
                        sub.setState({
                            projects: response.data,
                        })
                        gsap.to(
                            result, 1,
                            {
                                opacity: 1,
                                y: 0, 
                            }
                        )
                    });
                }
                },
            );

  


        }


        let _projects = projects.map((project, index) => (
            <CardProject
                key={index}
                k={index}
                url={url}
                project={project}
            />
        ));

        let _categories = categories.map((category, index) => (
            <li key={index} className={category.select ? "selected" : ""} value={category.id} onClick={handleClick}>{category.title}</li>
        ));



        return (
            <section className="listingProjects">
                <div className="filters">
                    <div>
                        
                    </div>
                    <div>
                    {_categories}
                    </div>
                </div>
                <div className="results">
                    {_projects}
                </div>
            </section>

        );
    }
}

export default ListingProjects;