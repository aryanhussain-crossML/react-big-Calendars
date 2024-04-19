import "./App.css";
import MyCalendar from "./components/calender/calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import RoasterCalendar2 from "./components/roasterCalendar2/roasterCalendar2";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import screenShot from "./assets/ss.png"


function App() {
  return (
    <>
      <MyCalendar />
      <RoasterCalendar2 />
      <img src={screenShot} alt="img not found" />
    </>
  );
}

export default App;
