import React, { useState, useEffect } from "react";
import { DatePicker, PickersDay } from "@mui/x-date-pickers";
import { createTheme, makeStyles } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ThemeProvider } from "@emotion/react";
// import axios from "axios";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& .MuiPickersDay-daySelected": {
//       backgroundColor: theme.palette.primary.main,
//       color: theme.palette.common.white,
//     },
//     "& .MuiPickersDay-day": {
//       color: theme.palette.common.black,
//     },
//   },
//   restDay: {
//     backgroundColor: theme.palette.error.main,
//     color: theme.palette.common.white,
//   },
//   nightShift: {
//     backgroundColor: theme.palette.warning.main,
//     color: theme.palette.common.white,
//   },
//   dayShift: {
//     backgroundColor: theme.palette.success.main,
//     color: theme.palette.common.white,
//   },
// }));

const restDayStyle = {
  backgroundColor: "#000",
  color: "white",
};

const nightShiftStyle = {
  backgroundColor: "#000",
  color: "white",
};

const dayShiftStyle = {
  backgroundColor: "#000",
  color: "white",
};

const ViewSchedule = () => {
  // const classes = useStyles();
  const [shiftData, setShiftData] = useState([
    {
      date: "2024-04-22",
      shiftType: "day",
    },
    {
      date: "2024-04-23",
      shiftType: "night",
    },
    {
      date: "2024-04-24",
      shiftType: "rest",
    },
    {
      date: "2024-04-25",
      shiftType: "day",
    },
    {
      date: "2024-04-26",
      shiftType: "night",
    },
    {
      date: "2024-04-27",
      shiftType: "day",
    },
    {
      date: "2024-04-28",
      shiftType: "rest",
    },
    {
      date: "2024-04-29",
      shiftType: "night",
    },
    // ... and so on
  ]);

  useEffect(() => {
    // const fetchShiftData = async () => {
    //   try {
    //     const response = await axios.get("/api/shift-data");
    //     setShiftData(response.data);
    //   } catch (error) {
    //     console.error("Error fetching shift data:", error);
    //   }
    // };
    // fetchShiftData();
  }, []);

  const renderDay = (day, selectedDate, isInCurrentMonth, dayComponent) => {
    const date = day.toISOString().split("T")[0];
    const shiftType = shiftData.find((item) => item.date === date)?.shiftType;

    let dayStyle;
    switch (shiftType) {
      case "rest":
        dayStyle = restDayStyle;
        break;
      case "night":
        dayStyle = nightShiftStyle;
        break;
      case "day":
        dayStyle = dayShiftStyle;
        break;
      default:
        dayStyle = {};
    }

    return React.cloneElement(dayComponent, { style: dayStyle });
  };

  const renderCustomDay = (date, selectedDates, pickersDayProps) => {
    const dateString = date.format("YYYY-MM-DD");
    const shift = shiftData.find((shift) => shift.date === dateString);
    let dayStyle = {};

    if (shift) {
      switch (shift.shiftType) {
        case "rest":
          dayStyle = restDayStyle;
          break;
        case "night":
          dayStyle = nightShiftStyle;
          break;
        case "day":
          dayStyle = dayShiftStyle;
          break;
        default:
          break;
      }
    }

    return <PickersDay {...pickersDayProps} sx={dayStyle} />;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        // variant="static"
        // className={classes.root}
        renderInput={(props) => <div {...props} />}
        components={{
          Day: renderCustomDay,
        }}
      />
    </LocalizationProvider>
  );
};

export default ViewSchedule;

// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import {
//   Box,
//   CssBaseline,
//   TextField,
//   ThemeProvider,
//   createTheme,
//   styled,
// } from "@mui/material";
// import dayjs from "dayjs";
// import Badge from "@mui/material/Badge";

// import { useEffect, useRef, useState } from "react";
// import { PickersDay } from "@mui/x-date-pickers";

// // import * as React from 'react';
// // import dayjs from 'dayjs';
// // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// // import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// // import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// // import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';

// // import * as React from 'react';
// // import dayjs from 'dayjs';
// // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// // import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// // import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// // import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
// // import TextField from '@mui/material/TextField';

// // import { DatePicker } from "@mui/x-date-pickers";
// // import { styled } from "@mui/material/styles";

// const StyledDay = styled("span")(({ theme, date, disabled }) => {
//   const day = date.getDate();

//   // Define background color based on day position
//   const backgroundColor =
//     day <= 5
//       ? theme.palette.error.main
//       : day <= 15
//       ? theme.palette.warning.main
//       : theme.palette.success.main;

//   return {
//     display: "inline-flex",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: theme.spacing(1),
//     borderRadius: theme.shape.borderRadius,
//     color: disabled ? theme.palette.grey[500] : theme.palette.text.primary,
//     backgroundColor,
//     cursor: disabled ? "default" : "pointer",
//   };
// });

// function ViewSchedule2() {
//   const renderDay = (date, isSelected, isDisabled) => (
//     <StyledDay date={date} disabled={isDisabled}>
//       {date.getDate()}
//     </StyledDay>
//   );

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DatePicker
//         // label="Choose a date"
//         // value={value}
//         // onChange={(newValue) => setValue(newValue)}
//         // renderInput={(params) => <TextField {...params} />}
//         renderDay={renderDay}
//       />
//     </LocalizationProvider>
//   );
// }

// export default ViewSchedule2;

// export default function ViewSchedule2() {
//   const [value, setValue] = useState(dayjs());

//   // Custom day rendering logic
//   const renderWeekendDays = (date, selectedDates, pickersDayProps) => {
//     // const isWeekend = date.day() === 0 || date.day() === 6; // 0 = Sunday, 6 = Saturday
//     const isWeekend = true ;
//     const customDayStyle = {
//       backgroundColor: isWeekend ? '#000 !important' : '#000',
//       color: isWeekend ? '#000 !important' : '#000',
//     };

//     return (
//       <PickersDay {...pickersDayProps} sx={customDayStyle} />
//     );
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DatePicker
//         label="Choose a date"
//         value={value}
//         onChange={(newValue) => setValue(newValue)}
//         renderInput={(params) => <TextField {...params} />}
//         renderDay={renderWeekendDays}
//       />
//     </LocalizationProvider>
//   );
// }

// Custom day rendering logic
// const CustomDay = (props) => {
//   const isWeekend = [0, 6].includes(props.day.day()); // Sunday (0) and Saturday (6)

//   return (
//     <PickersDay
//       {...props}
//       sx={{
//         backgroundColor: isWeekend ? '#f44336' : 'transparent',
//         '&:hover': {
//           backgroundColor: isWeekend ? '#e57373' : '#1976d2',
//         },
//       }}
//     />
//   );
// };

// export default function CustomCalendar() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DatePicker
//         label="Choose a date"
//         renderDay={CustomDay}
//         // ... other props if needed
//       />
//     </LocalizationProvider>
//   );
// }

// Functions --------------------------------------------------------------------------------

// function getRandomNumber(min, max) {
//   return Math.round(Math.random() * (max - min) + min);
// }

// function fakeFetch(date, { signal }) {
//   return new Promise((resolve, reject) => {
//     const timeout = setTimeout(() => {
//       const daysInMonth = date.daysInMonth();
//       const daysToHighlight = [1, 2, 3].map(() =>
//         getRandomNumber(1, daysInMonth)
//       );
//       resolve({ daysToHighlight });
//     }, 500);

//     signal.onabort = () => {
//       clearTimeout(timeout);
//       reject(new DOMException("aborted", "AbortError"));
//     };
//   });
// }

// const initialValue = dayjs("2022-04-17");

// function ServerDay(props) {
//   const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;
//   const isSelected =
//     !props.outsideCurrentMonth &&
//     highlightedDays.indexOf(props.day.date()) >= 0;

//   return (
//     <Badge
//       key={props.day.toString()}
//       overlap="circular"
//       badgeContent={isSelected ? "🌚🌚🌚🌚🌚🌚" : undefined}
//     >
//       <PickersDay
//         {...other}
//         outsideCurrentMonth={outsideCurrentMonth}
//         day={day}
//       />
//     </Badge>
//   );
// }

// // Functions End -------------------------------------------------------------------------------------------

// const ViewSchedule2 = () => {
//   const requestAbortController = useRef(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [highlightedDays, setHighlightedDays] = useState([1, 2, 15]);
//   const [selectedDate, setSelectedDate] = useState(initialValue);

//   const fetchHighlightedDays = (date) => {
//     const controller = new AbortController();
//     fakeFetch(date, { signal: controller.signal })
//       .then(({ daysToHighlight }) => {
//         setHighlightedDays(daysToHighlight);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         if (error.name !== "AbortError") {
//           throw error;
//         }
//       });
//     requestAbortController.current = controller;
//   };

//   useEffect(() => {
//     if (selectedDate) {
//       fetchHighlightedDays(selectedDate);
//     }

//     return () => requestAbortController.current?.abort();
//   }, [selectedDate]);

//   const handleDateChange = (date) => {
//     if (requestAbortController.current) {
//       requestAbortController.current.abort();
//     }
//     setIsLoading(true);
//     setHighlightedDays([]);
//     setSelectedDate(date);
//   };

//   return (
//     <Box sx={{ textAlign: "center", margin: "5rem auto" }}>
//       <div className="viewSchedule2">
//         <div className="materialUIcal">
//           <LocalizationProvider dateAdapter={AdapterDayjs}>
//             {/* <DatePicker label="Basic date picker" /> */}
//             <DatePicker
//               value={selectedDate}
//               loading={isLoading}
//               onChange={handleDateChange}
//               renderDay={(day, _value, DayComponentProps) => (
//                 <ServerDay
//                   {...DayComponentProps}
//                   highlightedDays={highlightedDays}
//                 />
//               )}
//             />
//           </LocalizationProvider>
//         </div>
//       </div>
//     </Box>
//   );
// };

// export default ViewSchedule2;

//-------------------------------------------------------------------------------------------

// import * as React from 'react';
// import dayjs, { Dayjs } from 'dayjs';
// import Badge from '@mui/material/Badge';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { PickersDay } from '@mui/x-date-pickers/PickersDay';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
// import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';

// function getRandomNumber(min, max) {
//   return Math.round(Math.random() * (max - min) + min);
// }

// function fakeFetch(date, { signal }) {
//   return new Promise((resolve, reject) => {
//     const timeout = setTimeout(() => {
//       const daysInMonth = date.daysInMonth();
//       const daysToHighlight = [1, 2, 3].map(() => getRandomNumber(1, daysInMonth));

//       resolve({ daysToHighlight });
//     }, 500);

//     signal.onabort = () => {
//       clearTimeout(timeout);
//       reject(new DOMException('aborted', 'AbortError'));
//     };
//   });
// }

// const initialValue = dayjs('2022-04-17');

// function ServerDay(props) {
//   const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

//   const isSelected =
//     !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) >= 0;

//   return (
//     <Badge
//       key={props.day.toString()}
//       overlap="circular"
//       badgeContent={isSelected ? '' : undefined}
//     >
//       <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
//     </Badge>
//   );
// }

// export default function ViewSchedule2() {
//   const requestAbortController = React.useRef<AbortController | null>(null);
//   const [isLoading, setIsLoading] = React.useState(false);
//   const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);

//   const fetchHighlightedDays = (date) => {
//     const controller = new AbortController();
//     fakeFetch(date, {
//       signal: controller.signal,
//     })
//       .then(({ daysToHighlight }) => {
//         setHighlightedDays(daysToHighlight);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         // ignore the error if it's caused by `controller.abort`
//         if (error.name !== 'AbortError') {
//           throw error;
//         }
//       });

//     requestAbortController.current = controller;
//   };

//   React.useEffect(() => {
//     fetchHighlightedDays(initialValue);
//     // abort request on unmount
//     return () => requestAbortController.current?.abort();
//   }, []);

//   const handleMonthChange = (date) => {
//     if (requestAbortController.current) {
//       // make sure that you are aborting useless requests
//       // because it is possible to switch between months pretty quickly
//       requestAbortController.current.abort();
//     }

//     setIsLoading(true);
//     setHighlightedDays([]);
//     fetchHighlightedDays(date);
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <div>
//         <DatePicker label="Select Date" /> {/* Basic Date Picker */}
//         <DateCalendar
//           defaultValue={initialValue}
//           loading={isLoading}
//           onMonthChange={handleMonthChange}
//           renderLoading={() => <DayCalendarSkeleton />}
//           slots={{
//             day: ServerDay,
//           }}
//           slotProps={{
//             day: {
//               highlightedDays,
//             } ,
//           }}
//         />
//       </div>
//     </LocalizationProvider>
//   );
// }

// export DateCalendar

// ------------------------------------------------------------------------------------------------------------

// Define your custom theme
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#red", // Customize the primary color
//     },
//     secondary: {
//       main: "#f44336", // Customize the secondary color
//     },
//   },
// });

// // Custom day rendering logic
// const CustomDay = (props) => {
//   const isWeekend = [0, 6].includes(props.day.day()); // Sunday (0) and Saturday (6)

//   return (
//     <PickersDay
//       {...props}
//       sx={{
//         backgroundColor: isWeekend ? theme.palette.main : "transparent",
//         "&:hover": {
//           backgroundColor: isWeekend ? theme.palette.secondary : "red",
//         },
//       }}
//     />
//   );
// };

// export default function ViewSchedule() {
//   return (
//     <ThemeProvider theme={theme}>
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <DatePicker
//           label="Choose a date"
//           slots={CustomDay}
//           // ... other props if needed
//         />
//       </LocalizationProvider>
//     </ThemeProvider>
//   );
// }
