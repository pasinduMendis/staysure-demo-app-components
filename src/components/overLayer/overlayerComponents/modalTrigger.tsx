import {useOverlayTrigger} from 'react-aria';
import {useOverlayTriggerState} from 'react-stately';
import Button from '../../button';
import Modal from './modal';
import React, { CSSProperties} from 'react';

type IconProps={ 
    //iconStyles?:CSSProperties,
    bottomLayerStyles?:CSSProperties,
    icon:string,
    }

/*     const iconSvg=(color:string="#1173d5",size:string="20px")=>{
        return <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path
          d="M11 12H9v-.148c0-.876.306-1.499 1-1.852.385-.195 1-.568 1-1a1.001 1.001 0 00-2 0H7c0-1.654 1.346-3 3-3s3 1 3 3-2 2.165-2 3zm-2 3h2v-2H9v2z"
          fill={color}
        />
        <path
          d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1116 0 8 8 0 01-16 0z"
          fill={color}
        />
        </svg>} */

const ModalTrigger=({ label, children, ...props }:IconProps|any)=> {
  let state = useOverlayTriggerState(props);
  let { triggerProps, overlayProps } = useOverlayTrigger(
    { type: 'dialog' },
    state
  );
  

  return (
    <>
    {props.label}
      {/* <Button style={props?.iconStyles} {...triggerProps} label={props.icon?props.icon:"overLayer"}/> */}
      {state.isOpen &&
        (
          <Modal {...props} state={state}>
            {React.cloneElement(children(), overlayProps)}
          </Modal>
        )}
    </>
  );
}

export default ModalTrigger