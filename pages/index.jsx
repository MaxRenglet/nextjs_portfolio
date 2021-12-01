import React from 'react';
import ReactMarkdown from 'react-markdown'
import CardProject from '../components/CardProject'
import Button from '../components/Button';
import { Fade } from "react-awesome-reveal";
import Img from '../components/Img';
function Home({ page, projects, url }) {


  const _projects = projects.map((project,index) => (
   
    <CardProject
      key={index}
      k={index}
      url={url}
      project={project}
    />

  ));

  const { title, description, image } = page;

  return (
    <section className="container is-max-widescreen homepage pt-6">
      <Fade>
      <section className="hero">
      <h1>{title}</h1>
        <div className="columns">
          <div className="column">
            
            <ReactMarkdown className="mono">{description}</ReactMarkdown>
          </div>
          <div className="column">
            {image ?
              <img src={url + image.url} />
              : ""}

          </div>
        </div>
      </section>
      </Fade>
      <section className="projects">
        <div className="columns">
          <div className="column">
            <h1>Projects</h1>
            <section>
              {_projects}

              {/* <Link href="/projects">
                <a><div className="btn-large" data-title="Want to see more projects ?">Want to see more projects ?</div></a>
              </Link> */}
              <div className="has-text-centered">
              <Button href="/projects" style="btn-large">
              Want to see more projects ?
              </Button>
              </div>
            </section>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Home;


export async function getStaticProps(context) {


  const res = await fetch(`${process.env.ADMIN_URL}/home`);
  const page = await res.json();

  const res_ = await fetch(`${process.env.ADMIN_URL}/projects?_limit=3`);
  const projects = await res_.json();

  const url = process.env.ADMIN_URL;


  return {
    props: {
      page,
      projects,
      url
    }, // will be passed to the page component as props
  }
}