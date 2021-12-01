import ReactMarkdown from 'react-markdown'

const Project = ({ project }) => {

  const { title, description } = project;


  return (
    <section className="container is-max-widescreen row">

      <h1>{title}</h1>
      {description}

    </section>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.ADMIN_URL}/projects`);
  const projects = await res.json()

  const paths = projects.map((project) => ({
    params: { pid: project.slug },
  }))

  return { paths, fallback: false }
}


export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.ADMIN_URL}/projects?slug=${params.pid}`)
  const projects = await res.json()
  const project = projects[0]

  return { props: { project } }
}


export default Project;
