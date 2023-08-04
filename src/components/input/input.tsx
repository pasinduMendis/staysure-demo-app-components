import React, { CSSProperties, useState } from "react";
import type { AriaTextFieldProps } from "react-aria";
import { useTextField } from "react-aria";
import styled from "styled-components";

type InputProps = {
  textFieldStyles?: CSSProperties;
  labelStyles?: CSSProperties;
  inputStyles?: CSSProperties;
  focusInputStyles?: CSSProperties;
  descriptionStyles?: CSSProperties;
  errorMessageStyles?: CSSProperties;
};

const TextField = (props: AriaTextFieldProps | InputProps | any) => {
  let { label } = props;
  let ref = React.useRef(null);
  let { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField(props, ref);

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const TextInput = styled.input`
  &::placeholder{
    color:red;
  }
  @media (max-width: 576px) {
    width: 100% !important;
    max-width:unset !important;
}
  `

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: 200,
        ...props?.textFieldStyles,
      }}
      onFocus={() => handleFocus()}
      onBlur={() => handleBlur()}
    >
      <label {...labelProps} style={props?.labelStyles}>
        {label}
      </label>
      <TextInput {...inputProps} ref={ref} style={{...props?.inputStyles, ...(isFocused?props?.focusInputStyles:{}),}} />
      {props.description && (
        <div
          {...descriptionProps}
          style={{ fontSize: 12, ...props?.descriptionStyles}}
        >
          {props.description}
        </div>
      )}
      {props.errorMessage && (
        <div
          {...errorMessageProps}
          style={{ color: "red", fontSize: 12, ...props?.errorMessageStyles }}
        >
          {props.errorMessage}
        </div>
      )}
    </div>
  );
};

export default TextField;
