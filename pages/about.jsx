import ReactMarkdown from 'react-markdown'

export default function Page({page}) {

  const {title, description} = page;

  return (
   
 <section className="container is-max-widescreen about pt-6">
   <h1>{title}</h1>
    <ReactMarkdown>{description}</ReactMarkdown>

 </section>

  )
}


export async function getStaticProps(context) {


  const res = await fetch(`${process.env.ADMIN_URL}/about`);
  const page = await res.json();

  const url = process.env.ADMIN_URL;

  return {
    props: {
      page,
      url
    }, // will be passed to the page component as props
  }
}