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
      d="M0 254L50 272.7C100 291.3 200 328.7 300 310.2C400 291.7 500 217.3 600 192.3C700 167.3 800 191.7 850 203.8L900 216L900 451L850 451C800 451 700 451 600 451C500 451 400 451 300 451C200 451 100 451 50 451L0 451Z"
      fill="#0066FF"
      strokeLinecap="round"
      strokeLinejoin="miter"
    />
  </svg>
)

export default SvgComponent
