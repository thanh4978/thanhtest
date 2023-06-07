import * as React from 'react';
import Svg, { SvgProps, Path, Rect } from 'react-native-svg';
import { memo } from 'react';

const SvgComponent = (props: SvgProps) => {
    const colorIcon = props.stroke || '#246BFE';

    return (
        <Svg width={18} height={18} fill="none" viewBox="0 0 16 18" {...props}>
            <Path
                d="M10.5 14v.625a2.5 2.5 0 0 1-5 0V14m9.206-1.272c-1.003-1.228-1.711-1.853-1.711-5.238 0-3.1-1.583-4.204-2.886-4.74a.696.696 0 0 1-.389-.412C9.492 1.56 8.851.875 8 .875c-.852 0-1.493.686-1.719 1.464a.69.69 0 0 1-.389.411c-1.304.537-2.885 1.637-2.885 4.74-.002 3.385-.71 4.01-1.714 5.238C.878 13.236 1.242 14 1.97 14h12.066c.723 0 1.084-.766.671-1.272Z"
                stroke={colorIcon}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

const Memo = memo(SvgComponent);
export default Memo;
