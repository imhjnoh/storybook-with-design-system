/** @jsx */
import { css } from "@emotion/react";

interface DisplayTypoProps {
    text?: string;
    size?: 'Large' | 'Medium' | 'Small';
    color?: string;
}

const LargeTheme = css({
    fontSize: 56
})
const MediumTheme = css({
    fontSize: 40
})
const SmallTheme = css({
    fontSize: 32
})

export const DisplayTypo = ({text = "Typography", size = 'Large', color = 'black'}: DisplayTypoProps) => {
    const SizeMap = {'Large': LargeTheme, 'Medium': MediumTheme, 'Small': SmallTheme};

    return (<p css={SizeMap[size]}>{text}</p>);
}
