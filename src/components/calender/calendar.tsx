import { AriaRangeCalendarProps, DateValue, useLocale, useRangeCalendar } from "react-aria";
import { useRangeCalendarState } from "react-stately";
import { createCalendar } from "@internationalized/date";

import React, { CSSProperties } from "react";
import CalendarGrid from "./cal-grid";
import Button from "../button/button";

type Props=AriaRangeCalendarProps<DateValue> &{
      btnBackground?:string,
      btnStyles?:CSSProperties,
      headreStyle?:CSSProperties,
      weekColor?:string,
      weekStyles?:CSSProperties,
      cellBackground?:string
      cellBackgroundSelected?:string,
      cellStyles?:CSSProperties
}

export type BtnProps=Props

export default function RangeCalendar(props:Props) {
  let { locale } = useLocale();
  let state = useRangeCalendarState({
    ...props,
    locale,
    createCalendar,
  });

  let ref = React.useRef(null);
  let { calendarProps, prevButtonProps, nextButtonProps, title } =
    useRangeCalendar(props, state, ref);

  return (
    <div {...calendarProps} ref={ref} className="calendar">
      <div className="header">
        <h2 style={props.headreStyle}>{title}</h2>
        <Button
          btnStyles={{ ...props.btnStyles, background: props.btnBackground }}
          {...prevButtonProps}
        >
          &lt;
        </Button>
        <Button
          btnStyles={{ ...props.btnStyles, background: props.btnBackground }}
          {...nextButtonProps}
        >
          &gt;
        </Button>
      </div>
      <CalendarGrid
        state={state}
        gridStyles={{
          weekStyles: props.weekStyles,
          cellStyles: props.cellStyles,
          weekColor: props.weekColor,
          cellBackground: props.cellBackground,
          cellBackgroundSelected: props.cellBackgroundSelected,
        }}
      />
    </div>
  );
}
