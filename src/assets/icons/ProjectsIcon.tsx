import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';
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
            d="M13.2 0 0 2.4v19.2L13.2 24h1.2V0h-1.2Zm2.4 3.6v3.6h4.8v3.6h1.8l-2.4 2.4-2.4-2.4h1.8V8.4h-3.6v4.2l3 3-3 3v1.8H24V3.6h-8.4ZM6.638 7.088c2.948-.263 3.3 1.917 3.3 3.074 0 1.158-.807 3.47-3.45 3.3l-.976-.037.038 3.3L3.6 16.5V7.463l3.038-.375Zm-.375 1.724-.788.038.038 2.963H6.3c1.134-.005 1.734-.516 1.725-1.575-.01-1.036-.628-1.51-1.763-1.425Z"
        />
    </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
