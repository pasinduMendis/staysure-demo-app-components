import React, { CSSProperties, useEffect, useState } from "react";
import { useButton } from "react-aria";
import { useRef } from "react";
import styled from "styled-components";

type BtnProps = {
  btnStyles?: CSSProperties;
  labele: string;
  subLabel?: string;
  labelStyles?: CSSProperties;
  subLabelStyles?: CSSProperties;
  background?: string;
  activeBackground?: string;
  isActive?: Boolean;
  border: string;
  activeBorder: string;
  hoverStyles?:CSSProperties;
  activeStyles?:CSSProperties;
  onClick?: () => undefined | any;
};

const ButtonComponent = styled.button`
&:hover {
  background: green !important;
}
  @media (max-width: 576px) {
    width: 100% !important;
    max-width: unset !important;

}
`

const Button = (props: BtnProps | any) => {
  let ref: React.MutableRefObject<any> = useRef();
  let { buttonProps } = useButton(props, ref);
  
  const [isActive, setIsActive] = useState(
    props?.isActive ? props.isActive : false
  );
  const [border, setBorder] = useState("none");
  const [background, setBackground] = useState("none");
  const [isHover, setIsHovered] = useState(false);

  useEffect(() => {
    setIsActive(props.isActive);
    if (props.isActive == true || isActive==true) {
      setBackground(
        props.activeBackground
          ? props.activeBackground
          : props.background
          ? props.background
          : "none"
      );
      if (props.activeBorder) {
        setBorder(
          `${props.activeBorder}`
        );
      } else if (props.border) {
        setBorder(
          `${props.border}`
        );
      } else {
        setBorder("none");
      }
    } else {
      setBackground(props.background ? props.background : "none");
      if (props.border) {
        setBorder(
          `${props.border}`
        );
      } else {
        setBorder("none");
      }
    }
  }, [props,isActive]);

  const handleOnClick = () => {
    if (props.onClick && typeof props.onClick === 'function') {
      props.onClick(); 
    }
    
  };

  return (
    <ButtonComponent
    
      {...buttonProps}
      style={{
        ...props.btnStyles,
        background: background,
        border: border,
        ...(isActive?props.activeStyles:{}),
        ...(isHover?props.hoverStyles:{}),
      }}
      onClick={() => handleOnClick()}
      onMouseOver={() => {setIsHovered(true)}}
      onMouseOut={() => setIsHovered(false)}

    >
      <p style={props.labelStyles}>{props.label}</p>
      {props?.subLabel && <p style={props.subLabelStyles}>{props.subLabel}</p>}
    </ButtonComponent>
  );
};

export default Button;
