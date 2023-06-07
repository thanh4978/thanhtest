import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
        {...props}
    >
        <Path
            fill="#246BFE"
            d="M9 0v20c-5.07-.5-9-4.79-9-10S3.93.5 9 0Zm2.03 0v8.99H20C19.53 4.25 15.76.47 11.03 0Zm0 11.01V20c4.74-.47 8.5-4.25 8.97-8.99h-8.97Z"
        />
    </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
