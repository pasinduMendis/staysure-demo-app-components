import React, { useState, useEffect } from 'react';

const Button = (props) => {
    const [isActive, setIsActive] = useState((props === null || props === void 0 ? void 0 : props.isActive) ? props.isActive : false);
    useEffect(() => {
        setIsActive(props.isActive);
    }, [props.isActive]);
    const onClick = () => {
        setIsActive(true);
        props.onClick();
    };
    return (React.createElement("button", { style: Object.assign(Object.assign({}, props.btnStyles), { background: isActive
                ? props.activeBackground
                    ? props.activeBackground
                    : "lightBlue"
                : props.background
                    ? props.background
                    : "white" }), onClick: () => onClick() },
        React.createElement("p", { style: props.labelStyles }, props.label),
        (props === null || props === void 0 ? void 0 : props.subLabel) && React.createElement("p", { style: props.subLabelStyles }, props.subLabel)));
};

export { Button };
