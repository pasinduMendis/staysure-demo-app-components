import React from "react";
import { AriaCalendarCellProps, useCalendarCell } from "react-aria";

type Props=AriaCalendarCellProps & {
  state:any,
  key:string,
  cellBackgroundNonSelected?:string,
  cellBackgroundSelected?:string,
  cellStyles?:object
}

export default function CalendarCell({ state, date, ...props }:Props ) {
  let ref = React.useRef(null);
  let {
    cellProps,
    buttonProps,
    isSelected,
    isOutsideVisibleRange,
    isDisabled,
    isUnavailable,
    formattedDate,
  } = useCalendarCell({ date }, state, ref);

  return (
    <td {...cellProps}>
      <div
        style={{
          background: `${
            isSelected
              ? props.cellBackgroundSelected
              : props.cellBackgroundNonSelected
          }`,
          ...props.cellStyles,
        }}
        {...buttonProps}
        ref={ref}
        hidden={isOutsideVisibleRange}
        className={`cell ${isSelected ? "selected" : ""} ${
          isDisabled ? "disabled" : ""
        } ${isUnavailable ? "unavailable" : ""}`}
      >
        {formattedDate}
      </div>
    </td>
  );
}
