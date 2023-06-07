import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';
import { theme } from '../../theme';
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={21}
        height={21}
        fill="none"
        {...props}
    >
        <Path
            fill="#246BFE"
            fillRule="evenodd"
            d="M17.25 9.5a7.75 7.75 0 1 1-15.5 0 7.75 7.75 0 0 1 15.5 0ZM9.5 18.75a9.25 9.25 0 1 0 0-18.5 9.25 9.25 0 0 0 0 18.5Zm10.922 1.672a1.975 1.975 0 0 1-2.793 0l-1.873-1.873a11.062 11.062 0 0 0 2.793-2.793l1.873 1.873a1.975 1.975 0 0 1 0 2.793Z"
            clipRule="evenodd"
        />
    </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
