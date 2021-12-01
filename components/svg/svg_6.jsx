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
      d="M0 133L50 148.3C100 163.7 200 194.3 300 203.2C400 212 500 199 600 212C700 225 800 264 850 283.5L900 303L900 451L850 451C800 451 700 451 600 451C500 451 400 451 300 451C200 451 100 451 50 451L0 451Z"
      fill="#0066FF"
      strokeLinecap="round"
      strokeLinejoin="miter"
    />
  </svg>
)

export default SvgComponent
