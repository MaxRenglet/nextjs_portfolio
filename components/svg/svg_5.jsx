import * as React from "react"

const SvgComponent = (props) => (
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
  >
    <path
      d="M0 305L50 261.7C100 218.3 200 131.7 300 112.2C400 92.7 500 140.3 600 182.3C700 224.3 800 260.7 850 278.8L900 297L900 451L850 451C800 451 700 451 600 451C500 451 400 451 300 451C200 451 100 451 50 451L0 451Z"
      fill="#0066FF"
      strokeLinecap="round"
      strokeLinejoin="miter"
    />
  </svg>
)

export default SvgComponent
