import React, { CSSProperties } from "react";
type BtnProps = {
    btnStyles?: CSSProperties;
    labele: string;
    subLabel?: string;
    labelStyles?: CSSProperties;
    subLabelStyles?: CSSProperties;
    background?: string;
    activeBackground?: string;
    isActive?: Boolean;
    onClick?: () => any;
};
declare const Button: (props: BtnProps | any) => React.JSX.Element;
export default Button;
