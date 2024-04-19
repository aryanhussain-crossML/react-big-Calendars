import { useState, useCallback, useMemo } from "react";
import { Calendar, Views, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import events from "../../events";
import styles from "./roasterCalendar.module.scss";
import "./roasterCalendar.scss";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import eventsTwo, { sndCal } from "../../eventsTwo";

const localizer = dayjsLocalizer(dayjs);

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const RoasterCalendar2 = () => {
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const [myEvents, setEvents] = useState(eventsTwo);
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
        color, // Text color
        border: "none",
      },
    };
  };
  
  const backButton = document.querySelector(
    ".reactBigCalender .rbc-toolbar .rbc-btn-group button:nth-child(2)"
  );
  console.log(backButton, "check the backButton");

  if (backButton) {
    backButton.textContent = "<";
  }
  const nextButton = document.querySelector(
    ".reactBigCalender .rbc-toolbar .rbc-btn-group button:nth-child(3)"
  );
  console.log(backButton, "check the backButton");

  if (nextButton) {
    nextButton.textContent = ">";
  }
  return (
    <section id="roasterCalendar2">
      <div className={`${styles.container}`}>
        <div className={`${styles.roasterCalendar2}`}>
          <div className={`${styles.topFilter}`}></div>
          <div className={`${styles.visibleCalendar}`}>
            <div className={`${styles.dateWrapper} dateWrapper`}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Calendar
                  className={`${styles.Calendar} reactBigCalender top`}
                  defaultDate={defaultDate}
                  localizer={localizer}
                />
              </Box>

              <div className="lower">
                {Array(4)
                  .fill(null)
                  .map((_, index) => (
                    <Accordion
                      key={index}
                      expanded={expanded === "panel1"}
                      onChange={handleChange("panel1")}
                      sx={{ backgroundColor: "#fff" }}
                    >
                      <AccordionSummary
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                        sx={{
                          backgroundColor: "#fff",
                        }}
                      >
                        <Typography sx={{ width: "100%" }}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: "1rem",
                            }}
                          >
                            <Typography>Mines Crew 4</Typography>
                            <Calendar
                              key={index}
                              className={`${styles.Calendar} reactBigCalender lowerRow`}
                              // backgroundEvents={myBcEvents}
                              defaultDate={defaultDate}
                              localizer={localizer}
                              defaultView={Views.MONTH}
                              events={myEvents}
                              startAccessor="start"
                              view={["month"]}
                              endAccessor="end"
                              // style={{ height: 600 }}
                              onSelectEvent={handleSelectEvent}
                              onSelectSlot={handleSelectSlot}
                              selectable
                              scrollToTime={scrollToTime}
                              eventPropGetter={eventStyleGetter}
                            />
                          </Box>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: "1rem",
                            }}
                          >
                            <Typography>Mines Crew 4</Typography>
                            <Calendar
                              key={index}
                              className={`${styles.Calendar} reactBigCalender lowerRow`}
                              // backgroundEvents={myBcEvents}
                              defaultDate={defaultDate}
                              localizer={localizer}
                              defaultView={Views.MONTH}
                              events={myEvents}
                              startAccessor="start"
                              view={["month"]}
                              endAccessor="end"
                              // style={{ height: 600 }}
                              onSelectEvent={handleSelectEvent}
                              onSelectSlot={handleSelectSlot}
                              selectable
                              scrollToTime={scrollToTime}
                              eventPropGetter={eventStyleGetter}
                            />
                          </Box>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
              </div>
              <div className={`${styles.helperBar}`}>
                <span className={`${styles.legend}`}>LEGEND</span>
                <span className={`${styles.rest}`}>Rest Day</span>
                <span className={`${styles.day}`}>Day Shift</span>
                <span className={`${styles.night}`}>Night Shift</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoasterCalendar2;
