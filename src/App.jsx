import "./App.css";
import MyCalendar from "./components/calender/calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import RoasterCalendar2 from "./components/roasterCalendar2/roasterCalendar2";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import screenShot from "./assets/ss.png";
import CustomToolbar from "./components/customToolbar/customToolbar";
import ViewSchedule from "./components/simplePicker/ViewSchedule";
import viewSchedule from "./assets/viewSchedule.png"
import NewViewSchedule from "./components/newViewScheduler/newViewScheduler";

function App() {
  return (
    <>
      {/* <CustomToolbar /> */}
      <MyCalendar />
      <RoasterCalendar2 />
      <img src={screenShot} alt="img not found" />
      {/* <ViewSchedule /> */}
      <NewViewSchedule />
      <img src={viewSchedule} alt="img not found" />

    </>
  );
}

export default App;



