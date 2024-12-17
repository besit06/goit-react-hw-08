import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { RestrictedRoute } from './components/RestrictedRoute/RestrictedRoute';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './components/AppBar/AppBar';
import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';

import { ThemeProvider, createTheme, CssBaseline, Container } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
      dispatch(refreshUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Toaster position="top-right" reverseOrder={false} />
      {isRefreshing ? (
        <p>Loading...</p> 
      ) : (
        <>
          <AppBar />
          <Container sx={{ mt: 4 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/register"
                element={
                  <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
                }
              />
            </Routes>
          </Container>
        </>
      )}
    </ThemeProvider>
  );
};