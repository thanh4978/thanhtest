import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { memo } from "react"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#246BFE"
      d="M16 14a5 5 0 0 1 5 5v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1a5 5 0 0 1 5-5h8Zm4-6a1 1 0 0 1 1 1v1h1a1 1 0 0 1 0 2h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1V9a1 1 0 0 1 1-1Zm-8-6a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z"
    />
  </Svg>
)
const Memo = memo(SvgComponent)
export default Memo
