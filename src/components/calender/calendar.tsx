import { AriaRangeCalendarProps, DateValue, useDateFormatter, useLocale, useRangeCalendar } from "react-aria";
import { useRangeCalendarState } from "react-stately";
import { createCalendar} from "@internationalized/date";

import React, { CSSProperties } from "react";
import CalendarGrid from "./cal-grid";
import Button from "../button";

type Props=AriaRangeCalendarProps<DateValue> &{
      btnBackground?:string,
      btnStyles?:CSSProperties,
      headreStyle?:CSSProperties,
      weekColor?:string,
      weekStyles?:CSSProperties,
      cellBackground?:string
      cellBackgroundSelected?:string,
      cellStyles?:CSSProperties,
      rangeStartCellStyles?:CSSProperties,
      rangeEndCellStyles?:CSSProperties,
      hoverStyles?:CSSProperties,
      disableStyles?:CSSProperties,
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
        <Button label="<"
          btnStyles={{ ...props.btnStyles, background: props.btnBackground }}
          {...prevButtonProps}
        >
          &lt;
        </Button>

        <YearDropdown state={state} />
        <MonthDropdown state={state} />

        <Button label=">"
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
          rangeEndCellStyles:props.rangeEndCellStyles,
          rangeStartCellStyles:props.rangeStartCellStyles,
          hoverStyles:props.hoverStyles,
          disableStyles:props.disableStyles,
        }}
      />
    </div>
  );
}


function YearDropdown({ state }:any) {
  let years:any = [];
  let formatter = useDateFormatter({
    year: "numeric",
    timeZone: state.timeZone
  });

  for (let i = -5; i <= 5; i++) {
    let thisYear=new Date().getFullYear()
    let date = state.focusedDate.add({ years: i });
    if(thisYear<=parseInt(formatter.format(date.toDate(state.timeZone)))){
    years.push({
      value: date,
      formatted: formatter.format(date.toDate(state.timeZone))
    });
  }
  }



  let onChange = (e:any) => {
    let index = Number(e.target.value);
    let date = years[index].value;
    state.setFocusedDate(date);
  };

  return (
    <select
      aria-label="Year"
      onChange={onChange}
    >
      {years.map((year:any, i:any) => (
        // use the index as the value so we can retrieve the full
        // date object from the list in onChange. We cannot only
        // store the year number, because in some calendars, such
        // as the Japanese, the era may also change.
        <option key={i} value={i}>
          {year.formatted}
        </option>
      ))}
    </select>
  );
}

function MonthDropdown({ state }:any) {
  let months = [];
  let formatter = useDateFormatter({
    month: "long",
    timeZone: state.timeZone
  });

  // Format the name of each month in the year according to the
  // current locale and calendar system. Note that in some calendar
  // systems, such as the Hebrew, the number of months may differ
  // between years.
  let numMonths = state.focusedDate.calendar.getMonthsInYear(state.focusedDate);
  for (let i = 1; i <= numMonths; i++) {
    let date = state.focusedDate.set({ month: i });
    months.push(formatter.format(date.toDate(state.timeZone)));
  }

  let onChange = (e:any) => {
    let value = Number(e.target.value);
    let date = state.focusedDate.set({ month: value });
    state.setFocusedDate(date);
  };

  return (
    <select
      aria-label="Month"
      onChange={onChange}
      value={state.focusedDate.month}
    >
      {months.map((month, i) => (
        <option key={i} value={i + 1}>
          {month}
        </option>
      ))}
    </select>
  );
}
