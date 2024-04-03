import React, { Suspense } from "react";
import Home from "./pages/home/Home";
import QuestionAnswer from "./pages/1-question-answer/QuestionAnswer";
import Root from "./components/Root/Root";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import { createTheme } from "@mui/material/styles";
import Shout from "./pages/2-shout-me/ShoutMe";

import ColorPicker from "./pages/3-color-picker/ColorPicker";
import Facts from "./pages/4-facts/Facts";
import Reminder from "./pages/5-reminder/Reminder";
import Thoughts from "./pages/6-log/Thoughts";
import PetLog from "./pages/7-petlog/PetLog";
import Drink from "./pages/8-drink/Drink";
import FoodOrder from "./pages/9-food/FoodOrder";
import Weather from "./pages/10-weather/Weather";
import Quiz from "./pages/11-quiz/Quiz";
import TicTac from "./pages/12-tictac/TicTac";
import TimerFind from "./pages/13-timer/TimerFind";
import CrudTask from "./pages/14-crud/CrudTask";
import PasswordGenerator from "./pages/15-password-gen/PasswordGenerator";
import Notes from "./pages/16-notes/Notes";
import QrCodeGenerator from "./pages/17-qr-code/QrCodeGenerator";

// const ShoutMe = lazy(() => import("./pages/2-shout-me/ShoutMe"));

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
      white: "#ffffff",
      black: "#000000",
      blue: "#1e88e5",
      darkblue: "#5e35b1",
    },
  },
});

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Home />} />
        <Route path="/question-answer" element={<QuestionAnswer />} />
        <Route path="/shout" element={<Shout />} />

        {/* <Route
          path="/shout"
          element={
            <Suspense fallback="loading...">
              <ShoutMe />
            </Suspense>
          }
        /> */}
        <Route path="/color-picker" element={<ColorPicker />} />
        <Route path="/facts" element={<Facts />} />
        <Route path="/reminder" element={<Reminder />} />
        <Route path="/thoughts" element={<Thoughts />} />
        <Route path="/petlog" element={<PetLog />} />
        <Route path="/drink" element={<Drink />} />
        <Route path="/food" element={<FoodOrder />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/quiz" element={<Quiz />} />
        {/* <Route path="/tictac" element={<TicTac />} /> */}
        <Route path="/timerfind" element={<TimerFind />} />
        <Route path="/crudtask" element={<CrudTask />} />
        <Route path="/random-password" element={<PasswordGenerator />} />
        <Route path="/notes" element={<Notes></Notes>} />
        <Route path="/qrcode" element={<QrCodeGenerator></QrCodeGenerator>} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
