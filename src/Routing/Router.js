import { lightTheme, darkTheme } from "../Utility/Theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../Utility/GlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "../Components/Layout/MainLayout";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Skills from "../Components/Skills/Skills";
import Education from "../Components/Education/Education";
import Experience from "../Components/Experience/Experience";
import Projects from "../Components/Projects/Projects";
import Resume from "../Components/Resume/Resume";
import { THEME_TYPES } from "../Utility/Constants/AppConstants";
import { useSelector } from "react-redux";
import { getThemeType } from "../Store/Selectors/UserSelector";

export default function Router() {
  const themeType = useSelector(getThemeType);
  return (
    <ThemeProvider
      theme={themeType === THEME_TYPES.light ? lightTheme : darkTheme}
    >
      <GlobalStyles />
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" Component={Home} />

            <Route path="/about" Component={About} />

            <Route path="/skills" Component={Skills} />

            <Route path="/education" Component={Education} />

            <Route path="/experience" Component={Experience} />

            <Route path="/projects" Component={Projects} />

            <Route path="/resume" Component={Resume} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}
