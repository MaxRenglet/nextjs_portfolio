import * as React from "react"



const SVG = (props) => {


let svgs = [
  <svg
    {...props}
    preserveAspectRatio="none"
    id="visual"
    viewBox="0 0 900 450"
    width={900}
    height={450}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className="svg_bg"
    key="1"
  >
    <path
      d="M0 56L50 79.2C100 102.3 200 148.7 300 189.3C400 230 500 265 600 275.5C700 286 800 272 850 265L900 258L900 451L850 451C800 451 700 451 600 451C500 451 400 451 300 451C200 451 100 451 50 451L0 451Z"
      fill="#0066FF"
      strokeLinecap="round"
      strokeLinejoin="miter"
    />
  </svg>,
  <svg
  className="svg_bg"
    {...props}
    preserveAspectRatio="none"
    id="visual"
    viewBox="0 0 900 450"
    width={900}
    height={450}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    key="2"
  >
    <path
      d="M0 141L50 151.5C100 162 200 183 300 218C400 253 500 302 600 277.7C700 253.3 800 155.7 850 106.8L900 58L900 451L850 451C800 451 700 451 600 451C500 451 400 451 300 451C200 451 100 451 50 451L0 451Z"
      fill="#0066FF"
      strokeLinecap="round"
      strokeLinejoin="miter"
    />
  </svg>,
   <svg
   {...props}
   preserveAspectRatio="none"
   id="visual"
   viewBox="0 0 900 450"
   width={900}
   height={450}
   xmlns="http://www.w3.org/2000/svg"
   xmlnsXlink="http://www.w3.org/1999/xlink"
   className="svg_bg"
   key="3"
 >
   <path
     d="M0 254L50 272.7C100 291.3 200 328.7 300 310.2C400 291.7 500 217.3 600 192.3C700 167.3 800 191.7 850 203.8L900 216L900 451L850 451C800 451 700 451 600 451C500 451 400 451 300 451C200 451 100 451 50 451L0 451Z"
     fill="#0066FF"
     strokeLinecap="round"
     strokeLinejoin="miter"
   />
 </svg>,
  <svg
  {...props}
  preserveAspectRatio="none"
  id="visual"
  viewBox="0 0 900 450"
  width={900}
  height={450}
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  className="svg_bg"
  key="4"
>
  <path
    d="M0 305L50 261.7C100 218.3 200 131.7 300 112.2C400 92.7 500 140.3 600 182.3C700 224.3 800 260.7 850 278.8L900 297L900 451L850 451C800 451 700 451 600 451C500 451 400 451 300 451C200 451 100 451 50 451L0 451Z"
    fill="#0066FF"
    strokeLinecap="round"
    strokeLinejoin="miter"
  />
</svg>,
<svg
    {...props}
    preserveAspectRatio="none"
    id="visual"
    viewBox="0 0 900 450"
    width={900}
    height={450}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className="svg_bg"
    key="5"
  >
    <path
      d="M0 133L50 148.3C100 163.7 200 194.3 300 203.2C400 212 500 199 600 212C700 225 800 264 850 283.5L900 303L900 451L850 451C800 451 700 451 600 451C500 451 400 451 300 451C200 451 100 451 50 451L0 451Z"
      fill="#0066FF"
      strokeLinecap="round"
      strokeLinejoin="miter"
    />
  </svg>,
  <svg
  {...props}
  preserveAspectRatio="none"
  id="visual"
  viewBox="0 0 900 450"
  width={900}
  height={450}
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  className="svg_bg"
  key="6"
>
  <path
    d="M0 278L50 254.7C100 231.3 200 184.7 300 152.5C400 120.3 500 102.7 600 134C700 165.3 800 245.7 850 285.8L900 326L900 451L850 451C800 451 700 451 600 451C500 451 400 451 300 451C200 451 100 451 50 451L0 451Z"
    fill="#0066FF"
    strokeLinecap="round"
    strokeLinejoin="miter"
  />
</svg>,
  <svg className="svg_bg"
  {...props}
  preserveAspectRatio="none"
  width={900}
  height={450}
  viewBox="0 0 900 450"
  xmlns="http://www.w3.org/2000/svg"
  key="7"
>
  <path
    d="m0 312 50 19.7c50 19.6 150 59 250 27.5s200-133.9 300-191.5C700 110 800 97 850 90.5l50-6.5v367H0Z"
  />
</svg>,
<svg
    {...props}
    preserveAspectRatio="none"
    id="visual"
    viewBox="0 0 900 450"
    width={900}
    height={450}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className="svg_bg"
    key="8"
  >
    <path
      d="M0 252L50 281.8C100 311.7 200 371.3 300 329.3C400 287.3 500 143.7 600 80.8C700 18 800 36 850 45L900 54L900 451L850 451C800 451 700 451 600 451C500 451 400 451 300 451C200 451 100 451 50 451L0 451Z"
      fill="#0066FF"
      strokeLinecap="round"
      strokeLinejoin="miter"
    />
  </svg>,
  <svg
  {...props}
  preserveAspectRatio="none"
  id="visual"
  viewBox="0 0 900 450"
  width={900}
  height={450}
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  className="svg_bg"
  key="9"
>
  <path
    d="M0 174L50 197.7C100 221.3 200 268.7 300 248.2C400 227.7 500 139.3 600 92.2C700 45 800 39 850 36L900 33L900 451L850 451C800 451 700 451 600 451C500 451 400 451 300 451C200 451 100 451 50 451L0 451Z"
    fill="#0066FF"
    strokeLinecap="round"
    strokeLinejoin="miter"
  />
</svg>,
<svg
    {...props}
    preserveAspectRatio="none"
    id="visual"
    viewBox="0 0 900 450"
    width={900}
    height={450}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className="svg_bg"
    key="10"
  >
    <path
      d="M0 333L50 281.3C100 229.7 200 126.3 300 103C400 79.7 500 136.3 600 158.3C700 180.3 800 167.7 850 161.3L900 155L900 451L850 451C800 451 700 451 600 451C500 451 400 451 300 451C200 451 100 451 50 451L0 451Z"
      fill="#0066FF"
      strokeLinecap="round"
      strokeLinejoin="miter"
    />
  </svg>
]

let id = Math.floor((Math.random()*svgs.length));


  return (

  <div className="svg" data-id={id}>
    {svgs[id]}
  </div>
  )
}

export default SVG
