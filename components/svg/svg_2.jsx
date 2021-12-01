import * as React from "react"

const SvgComponent = (props) => (
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
  >
    <path
      d="M0 141L50 151.5C100 162 200 183 300 218C400 253 500 302 600 277.7C700 253.3 800 155.7 850 106.8L900 58L900 451L850 451C800 451 700 451 600 451C500 451 400 451 300 451C200 451 100 451 50 451L0 451Z"
      fill="#0066FF"
      strokeLinecap="round"
      strokeLinejoin="miter"
    />
  </svg>
)

export default SvgComponent
