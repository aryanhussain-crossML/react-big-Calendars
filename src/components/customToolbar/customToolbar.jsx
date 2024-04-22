import dayjs from "dayjs";
import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import "./customToolbar.scss";

const CustomToolbar = ({ onNavigate, label }) => {
  const [date, setDate] = useState(dayjs());

  const handleMonthChange = (date) => {
    setDate(date);
    const newDate = dayjs(date).startOf("month");
    onNavigate("GOTO", newDate.toDate());
  };

  return (
    <div id="customToobar">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          views={["month", "day"]}
          // defaultValue={new Date()}
          value={date}
          onChange={handleMonthChange}
          onMonthChange={handleMonthChange}
          // openTo="month"
          renderInput={(params) => <TextField {...params} helperText={null} />}
          label="Month and Year"
          minDate={dayjs('2000-01-01')}
          maxDate={dayjs('2030-12-31')}
        />
      </LocalizationProvider>
    </div>
  );
};

export default CustomToolbar;
