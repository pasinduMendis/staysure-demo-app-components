import React, { CSSProperties, ReactElement, useEffect, useState } from "react";

type BtnProps = {
  btnStyles?: CSSProperties;
  labele: string;
  subLabel?: string;
  labelStyles?: CSSProperties;
  subLabelStyles?: CSSProperties;
  background?: string;
  activeBackground?: string;
  isActive?:Boolean;
  onClick?:() => any
};

const Button = (props: BtnProps | any) => {
  const [isActive, setIsActive] = useState(props?.isActive?props.isActive:false);

  useEffect(() => {
    setIsActive(props.isActive)
  }, [props.isActive])
  

  const onClick = () => {
    setIsActive(true);
    props.onClick()
  };



  return (
    <button
      style={{
        ...props.btnStyles,
        background: isActive
          ? props.activeBackground
            ? props.activeBackground
            : "lightBlue"
          : props.background
          ? props.background
          : "white",
      }}
      onClick={() => onClick()}
    >
      <p style={props.labelStyles}>{props.label}</p>
      {props?.subLabel && <p style={props.subLabelStyles}>{props.subLabel}</p>}
    </button>
  );
};

export default Button;
