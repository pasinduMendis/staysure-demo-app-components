import React, { CSSProperties } from 'react'
import ModalTrigger from './overlayerComponents/modalTrigger'

type IconProps={ 
    iconStyles?:CSSProperties,
    isOpen?:boolean,
    bottomLayerStyles?:CSSProperties,
    }
const OverLayer = ({children,...props}:IconProps|any) => {

  return (<>
<ModalTrigger {...props} isOpen={props.isOpen}>
  {() =>
  <>
    {children}
    </>
  }
</ModalTrigger>
    </>
  )
}

export default OverLayer