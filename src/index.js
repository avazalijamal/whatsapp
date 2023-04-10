import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import { Button, Result } from "antd";
import { Chat, Login, Register } from "./Pages";
import { Authentication, IsLogin } from "./Layout";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path='login'
          element={
            <IsLogin>
              <Login />
            </IsLogin>
          }
        />
        <Route path='register' element={<Register />} />
        <Route
          path='chat'
          element={
            <Authentication>
              <Chat />
            </Authentication>
          }
        />
        <Route path='*' element={<Navigate to={process.env.REACT_APP_404} />} />
        <Route
          path='404'
          element={
            <Result
              status='404'
              title='404'
              subTitle='Sorry, the page you visited does not exist.'
              extra={
                <Button href={process.env.REACT_APP_CHAT} type='primary'>
                  Back Home
                </Button>
              }
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
