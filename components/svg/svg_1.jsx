import * as React from "react"

const SvgComponent = (props) => (
  <svg className="svg_bg"
    {...props}
    preserveAspectRatio="none"
    width={900}
    height={450}
    viewBox="0 0 900 450"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m0 312 50 19.7c50 19.6 150 59 250 27.5s200-133.9 300-191.5C700 110 800 97 850 90.5l50-6.5v367H0Z"
    />
  </svg>
)

export default SvgComponent
