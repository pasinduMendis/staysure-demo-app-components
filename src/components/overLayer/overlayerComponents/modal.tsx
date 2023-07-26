import React, { CSSProperties, ReactNode } from 'react';
import {Overlay, useModalOverlay,OverlayProps} from 'react-aria';

type bottomLayerrops={ 
  bottomLayerStyles?:CSSProperties,
  }

const Modal=({ state, children, ...props }:bottomLayerrops|any) =>{
  let ref = React.useRef(null);
  let { modalProps, underlayProps } = useModalOverlay(props, state, ref);

  return (
    <Overlay>
      <div
        style={{
          position: 'fixed',
          zIndex: 100,
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ...(props.bottomLayerStyles?props.bottomLayerStyles:{}),
        }}
        {...underlayProps}
      >
        <div
          {...modalProps}
          ref={ref}
          style={{
            background: 'var(--page-background)',
            border: '1px solid gray'
          }}
        >
          {children}
        </div>
      </div>
    </Overlay>
  );
}

export default Modal