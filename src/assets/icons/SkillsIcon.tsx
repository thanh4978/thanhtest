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
      d="M20.229 12.152h-8.381v-8.38a.188.188 0 0 0-.188-.188h-.61a9.342 9.342 0 0 0-6.62 2.742 9.327 9.327 0 0 0-2.742 6.623A9.341 9.341 0 0 0 4.43 19.57c.86.86 1.86 1.535 2.976 2.007 1.154.489 2.394.74 3.647.738a9.34 9.34 0 0 0 6.621-2.742 9.316 9.316 0 0 0 2.006-2.977c.49-1.153.74-2.394.739-3.647v-.61a.192.192 0 0 0-.19-.187Zm2.06-1.3-.06-.661a9.303 9.303 0 0 0-2.698-5.726 9.34 9.34 0 0 0-5.74-2.693l-.664-.061a.186.186 0 0 0-.204.185v8.993c0 .103.085.188.188.188l8.99-.024a.188.188 0 0 0 .188-.201Z"
    />
  </Svg>
)
const Memo = memo(SvgComponent)
export default Memo
