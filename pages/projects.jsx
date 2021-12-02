import ReactMarkdown from 'react-markdown'
import CardProject from '../components/CardProject'
import Link from 'next/dist/client/link';
import ListingProjects from '../components/ListingProject';

export default function Page({ page, projects, url, categories }) {

  const { title, description } = page;

  // let _projects = projects.map((project, index) => (
  //   <CardProject
  //     key={index}
  //     k={index}
  //     url={url}
  //     project={project}
  //   />
  // ));


  return (
    <section className="container is-max-widescreen projects pt-6">
      <h1>{title}</h1>
     
      <ReactMarkdown>{description}</ReactMarkdown>


      <ListingProjects 
      projects={projects}
      categories={categories}
      url={url}
      />


    </section>
  )
}


export async function getStaticProps(context) {


  const res = await fetch(`${process.env.ADMIN_URL}/projects-index`);
  const page = await res.json();
  const url = process.env.ADMIN_URL;


  const res_ = await fetch(`${process.env.ADMIN_URL}/projects`);
  const projects = await res_.json();

  const res__ = await fetch(`${process.env.ADMIN_URL}/categories`);
  const categories = await res__.json();


  return {
    props: {
      categories,
      page,
      projects,
      url
    }, // will be passed to the page component as props
  }
}