import ReactMarkdown from 'react-markdown'
import CardProject from '../components/CardProject'

export default function Page({page, projects, url}) {

  const {title, description} = page;

  const _projects = projects.map((project,index) => (
    <CardProject
      key={index}
      k={index}
      url={url}
      project={project}
    />
  ));


  return (
    <section className="container is-max-widescreen projects pt-6">
   <h1>{title}</h1>
    <ReactMarkdown>{description}</ReactMarkdown>

    {_projects}




 </section>
  )
}


export async function getStaticProps(context) {


  const res = await fetch(`${process.env.ADMIN_URL}/projects-index`);
  const page = await res.json();
  const url = process.env.ADMIN_URL;


  const res_ = await fetch(`${process.env.ADMIN_URL}/projects`);
  const projects = await res_.json();


  return {
    props: {
      page,
      projects,
      url
    }, // will be passed to the page component as props
  }
}