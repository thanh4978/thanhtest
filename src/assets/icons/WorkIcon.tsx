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
            d="M7 0v1H2a2 2 0 0 0-2 2v6c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V3a2 2 0 0 0-2-2h-5V0H7Zm3 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM0 12.443V15a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2.557A3.96 3.96 0 0 1 18 13H2a3.96 3.96 0 0 1-2-.557Z"
        />
    </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
