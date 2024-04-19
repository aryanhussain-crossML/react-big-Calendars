import { useState, useCallback, useMemo } from "react";
import { Calendar, Views, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "./calendar.scss";
import events from "../../events";
import styles from "./calendar.module.scss";

const localizer = dayjsLocalizer(dayjs);

const MyCalendar = (props) => {
  const [myEvents, setEvents] = useState(events);
  const [myBcEvents, setBCEvents] = useState([
    {
      id: 0,
      title: "Available for Clients",
      start: new Date(2015, 3, 13, 6),
      end: new Date(2015, 3, 13, 18),
    },
  ]);

  localizer.formats = {
    ...localizer.formats,
    weekdayFormat: "dddd", // Use 'dddd' for full weekday names
  };

  console.log(localizer.formats, "checking the weekdays of the localizer");

  const handleSelectSlot = useCallback(
    ({ start, end }) => {
      const title = window.prompt("New Event name");
      if (title) {
        setEvents((prev) => [...prev, { start, end, title }]);
      }
    },
    [setEvents]
  );

  const handleSelectEvent = useCallback(
    (event) => window.alert(event.title),
    []
  );

  const { defaultDate, scrollToTime } = useMemo(
    () => ({
      defaultDate: new Date(2015, 3, 12),
      scrollToTime: new Date(1970, 1, 1, 6),
    }),
    []
  );

  // onestone #157570

  const eventStyleGetter = (event) => {
    const backgroundColor =
      event.shift === "rest"
        ? "#ddd"
        : event.shift === "day"
        ? "#ffedd1"
        : event.shift === "night"
        ? "#a6ddde"
        : ""; // Default color if hexColor is not provided

    const color =
      event.shift === "rest"
        ? "#505050"
        : event.shift === "day"
        ? "#664404"
        : event.shift === "night"
        ? "#0B4246"
        : "";
    return {
      style: {
        backgroundColor,
        borderRadius: "4px",
        opacity: 0.8,
        color,
        border: "none",
      },
    };
  };

  //   // Get all elements with the class name "rbc-btn-group"
  // const elements = document.querySelector("span.rbc-btn-group");
  // console.log(elements,"check the content of the querySelector");
  // const secondElement = elements[0];

  // const backButton = elements.querySelector("button:nth-child(2)");
  // console.log(backButton,"check the backButton content of the querySelector");

  const backButton = document.querySelector(
    ".reactBigCalender .rbc-toolbar .rbc-btn-group button:nth-child(2)"
  );
  console.log(backButton, "check the backButton");

  if (backButton) {
    // Change the text content of the button
    backButton.textContent = "<"; // Use 'textContent' for plain text
    // Or use 'innerHTML' if you need to include HTML content
    // backButton.innerHTML = 'New <strong>Text</strong>';
  }
  const nextButton = document.querySelector(
    ".reactBigCalender .rbc-toolbar .rbc-btn-group button:nth-child(3)"
  );
  console.log(backButton, "check the backButton");

  if (nextButton) {
    // Change the text content of the button
    nextButton.textContent = ">"; // Use 'textContent' for plain text
    // Or use 'innerHTML' if you need to include HTML content
    // backButton.innerHTML = 'New <strong>Text</strong>';
  }
  return (
    <div id="firstCalendar">
      <div className={`${styles.dateWrapper} dateWrapper`}>
        <Calendar
          className={`${styles.Calendar} reactBigCalender`}
          backgroundEvents={myBcEvents}
          defaultDate={defaultDate}
          localizer={localizer}
          defaultView={Views.MONTH}
          events={myEvents}
          startAccessor="start"
          view={["month"]}
          endAccessor="end"
          style={{ height: 600 }}
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}
          selectable
          scrollToTime={scrollToTime}
          eventPropGetter={eventStyleGetter}
        />
        <div className={`${styles.helperBar}`}>
          <span className={`${styles.legend}`}>LEGEND</span>
          <span className={`${styles.rest}`}>Rest Day</span>
          <span className={`${styles.day}`}>Day Shift</span>
          <span className={`${styles.night}`}>Night Shift</span>
        </div>
      </div>
    </div>
  );
};

export default MyCalendar;
