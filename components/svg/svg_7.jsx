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
      d="M0 278L50 254.7C100 231.3 200 184.7 300 152.5C400 120.3 500 102.7 600 134C700 165.3 800 245.7 850 285.8L900 326L900 451L850 451C800 451 700 451 600 451C500 451 400 451 300 451C200 451 100 451 50 451L0 451Z"
      fill="#0066FF"
      strokeLinecap="round"
      strokeLinejoin="miter"
    />
  </svg>
)

export default SvgComponent
