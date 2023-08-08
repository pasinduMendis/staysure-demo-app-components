import { AriaCalendarGridProps, CalendarGridAria, useCalendarGrid, useLocale } from "react-aria";
import { getWeeksInMonth } from "@internationalized/date";
import CalendarCell from "./cal-cell";
import React, { CSSProperties } from "react";

type GridStyle={
  weekStyles?: CSSProperties,
  cellStyles?: CSSProperties,
  weekColor?: string,
  cellBackground?: string,
  cellBackgroundSelected?: string,
  rangeStartCellStyles?:CSSProperties,
  rangeEndCellStyles?:CSSProperties,
  hoverStyles?:CSSProperties,
  disableStyles?:CSSProperties,
}

type Props=AriaCalendarGridProps & {
  gridStyles?:GridStyle,
  state:any,
}

export default function CalendarGrid({ state, ...props }:Props) {
  let { locale } = useLocale();
  let { gridProps, headerProps, weekDays } = useCalendarGrid(props, state);

  // Get the number of weeks in the month so we can render the proper number of rows.
  let weeksInMonth:number = getWeeksInMonth(state.visibleRange.start, locale);

  return (
    <table {...gridProps}>
      <thead {...headerProps}>
        <tr>
          {weekDays.map((day, index) => (
            <th
              style={{
                ...props?.gridStyles?.weekStyles,
                color: props?.gridStyles?.weekColor,
              }}
              key={index}
            >
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
          <tr key={weekIndex}>
            {state
              .getDatesInWeek(weekIndex)
              .map((date:any, i:any) =>
                date ? (
                  <CalendarCell
                    key={i}
                    state={state}
                    date={date}
                    cellBackground={props?.gridStyles?.cellBackground}
                    cellBackgroundSelected={
                      props?.gridStyles?.cellBackgroundSelected
                    }
                    cellStyles={{ ...props?.gridStyles?.cellStyles }}
                    rangeEndCellStyles={{...props?.gridStyles?.rangeEndCellStyles}}
                    rangeStartCellStyles={props?.gridStyles?.rangeStartCellStyles}
                    hoverStyles={props?.gridStyles?.hoverStyles}
                    disableStyles={props?.gridStyles?.disableStyles}
                  />
                ) : (
                  <td key={i} />
                )
              )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
