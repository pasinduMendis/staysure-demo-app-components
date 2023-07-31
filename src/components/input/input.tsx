import React, { CSSProperties } from 'react'
import type {AriaTextFieldProps} from 'react-aria';
import {useTextField} from 'react-aria';

type InputProps={
  textFieldStyles?:CSSProperties,
  labelStyles?:CSSProperties,
  inputStyles?:CSSProperties,
  descriptionStyles?:CSSProperties,
  errorMessageStyles?:CSSProperties,
}

const TextField = (props: AriaTextFieldProps|InputProps|any) => {
    let { label } = props;
    let ref = React.useRef(null);
    let { labelProps, inputProps, descriptionProps, errorMessageProps } =
      useTextField(props, ref);
  
    return (
      <div style={{ display: 'flex', flexDirection: 'column', width: 200,...props?.textFieldStyles }}>
        <label {...labelProps} style={props?.labelStyles}>{label}</label>
        <input {...inputProps} ref={ref} style={props?.inputStyles}/>
        {props.description && (
          <div {...descriptionProps} style={{ fontSize: 12,...props?.descriptionStyles}}>
            {props.description}
          </div>
        )}
        {props.errorMessage && (
          <div {...errorMessageProps} style={{ color: 'red', fontSize: 12 ,...props?.errorMessageStyles}}>
            {props.errorMessage}
          </div>
        )}
      </div>
    );
}

export default TextField
