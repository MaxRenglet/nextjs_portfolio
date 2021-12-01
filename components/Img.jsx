import React, { Component } from 'react'
import Image from 'next/image'

  const Img = (props) => {


    const {src, size} = props;


    // const myLoader = ({ src, width, quality }) => {
    //     return `https://example.com/${src}?w=${width}&q=${quality || 75}`
    //   }
      


    return (
     <div></div>
    )
  }
  
  export default Img


  export async function getStaticProps(context) {


    console.log(context);
  
  
    return {
      props: {
       
      }, // will be passed to the page component as props
    }
  }