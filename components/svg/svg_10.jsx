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
      d="M0 333L50 281.3C100 229.7 200 126.3 300 103C400 79.7 500 136.3 600 158.3C700 180.3 800 167.7 850 161.3L900 155L900 451L850 451C800 451 700 451 600 451C500 451 400 451 300 451C200 451 100 451 50 451L0 451Z"
      fill="#0066FF"
      strokeLinecap="round"
      strokeLinejoin="miter"
    />
  </svg>
)

export default SvgComponent
