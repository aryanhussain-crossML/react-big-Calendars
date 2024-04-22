import { DatePicker, LocalizationProvider, PickersDay } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";

const restDayStyle = {
  backgroundColor: "red",
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

const NewViewSchedule = () => {
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



  const renderCustomDay = (date, selectedDates, pickersDayProps) => {
    console.log(date, "cheking the date")
    const dateString = date.day.format("YYYY-MM-DD");
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
        variant="static"
        // className={classes.root}
        renderInput={(props) => <div {...props} >sldjkljflskjfskldjfskldjf</div>}
        slots={{
          day: renderCustomDay,
        }}
      />
    </LocalizationProvider>
  );
};

export default NewViewSchedule;