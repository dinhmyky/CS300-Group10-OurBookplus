import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import QAndAPage from "scenes/QAndAPage";
import PostPage from "scenes/PostPage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import SettingsPage from "scenes/settingsPage";
import BookingsPage from "scenes/bookingsPage";
import NotisPage from "scenes/notiPage";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            />
            <Route
              path="/profile/:userId"
              element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
            />
            <Route 
              path="/QAndA"
              element={isAuth ? <QAndAPage /> : <Navigate to="/" />}
            />
            <Route
              path="/posts/:postId"
              element={isAuth ? <PostPage /> : <Navigate to="/" />}
            />
            <Route
              path="/settings/:userId"
              element={isAuth ? <SettingsPage /> : <Navigate to="/" />}
            />
            <Route
              path="/bookings/:postId"
              element={isAuth ? <BookingsPage /> : <Navigate to="/" />}
            />
            <Route
              path="/notifications/:userId"
              element={isAuth ? <NotisPage /> : <Navigate to="/" />}
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
