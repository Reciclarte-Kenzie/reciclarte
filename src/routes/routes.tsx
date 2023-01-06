import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Slider } from "../components/Slider/SliderInput";
import { LoginPage } from "../pages/login";
import { IdeasProvider } from "../providers/IdeasProvider";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      {/* <Route path="/register" element={<Register />} /> */}
      <Route element={<IdeasProvider />}>
        {/* <Route path="/" element={<Home/>}> */}
        {/* <Route path="/profile" element={<Profile />} />  */}
      </Route>
      {/* <Route path="*" element={<Navigate to="/" />}/> */}
      <Route path="/slider" element={<Slider min={1} max={5} />} />
    </Routes>
  );
};
