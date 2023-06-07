import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';
import { theme } from '../../theme';
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={21}
        height={20}
        fill="none"
        {...props}
    >
        <Path
            fill="#246BFE"
            d="M13.94 2.66H9.22L11.58.3l2.36 2.36ZM9.25 17.37h4.66l-2.33 2.33-2.33-2.33ZM5.1 4.27.6 15.73h1.84l.92-2.45h5.11l.92 2.45h1.84L6.74 4.27H5.1Zm-1.13 7.37 1.94-5.18 1.94 5.18H3.97Zm10.76 2.5h6.12v1.59h-8.53v-1.29l5.92-8.56h-5.88v-1.6h8.3v1.26l-5.93 8.6Z"
        />
    </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
