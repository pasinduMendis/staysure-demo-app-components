import { isSameDay } from "@internationalized/date";
import React, { CSSProperties, useState } from "react";
import { AriaCalendarCellProps, useCalendarCell } from "react-aria";

type Props=AriaCalendarCellProps & {
  state:any,
  key:string,
  cellBackground?:string,
  cellBackgroundSelected?:string,
  cellStyles?:CSSProperties,
  rangeStartCellStyles?:CSSProperties,
  rangeEndCellStyles?:CSSProperties,
  disableStyles?:CSSProperties,
  hoverStyles?:CSSProperties
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

  let isSelectionStart = state.highlightedRange
  ? isSameDay(date, state.highlightedRange.start)
  : isSelected;
let isSelectionEnd = state.highlightedRange
  ? isSameDay(date, state.highlightedRange.end)
  : isSelected;

  const [isHover, setIsHovered] = useState(false);

  return (
    <td {...cellProps} onMouseOver={() => {setIsHovered(true)}}
    onMouseOut={() => setIsHovered(false)}>
      <div
        style={{
          ...props.cellStyles,
          background: `${
            isSelected
              ? props.cellBackgroundSelected
              : props.cellBackground?props.cellBackground:"white"
          }`,
          ...(isDisabled?props.disableStyles?props.disableStyles:{color:"gray"}:{}),
          ...(isHover?props.hoverStyles:{}),
          ...(
            isSelectionStart?props.rangeStartCellStyles:
            isSelectionEnd?props.rangeEndCellStyles:{})
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
