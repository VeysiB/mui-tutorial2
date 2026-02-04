import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import "@fontsource/roboto";
import "./App.css";
import theme from "./assets/theme";
import { ThemeProvider } from "@mui/material";
import Hero from "./components/Hero/Hero";
import Coffee from "./components/Coffee/Coffee";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Hero/>
        <Coffee/>
      </ThemeProvider>
    </>
  );
}

export default App;
