import { BrowserRouter } from "react-router-dom";
import Router from "./routes/sections";
import { useScrollToTop } from "./hooks/use-scroll-to-top";
import { Suspense } from "react";
import ThemeProvider from "./theme";

// ----------------------------------------------------------------------

const App = () => {
  return (
    <ThemeProvider>
      <Router></Router>
    </ThemeProvider>
  );
};

export default App;
