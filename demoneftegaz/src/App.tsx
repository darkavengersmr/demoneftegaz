import { Routes, Route, BrowserRouter } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import MainPagePage from "./pages/main-page-page";
import VisitorAppPage from "./pages/visitor-app-page";
import NewComponentPage from "./pages/new-component-page";
import PhoneBookPage from "./pages/phonebook-page";

const portalTheme = createTheme({
  typography: {
    fontSize: 12    
  },
  palette: {
    mode: 'light', 
    primary: {
      main: '#ffce07',
      light: '#f37d01',
      dark: '#d84f00',
    },
    secondary: {
      main: '#e24826',
      dark: '#ac202d',
    },        
  },
  
});

function App() {
  return (
    <ThemeProvider theme={portalTheme}> 
      <CssBaseline />
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<MainPagePage />} />
          <Route path="phonebook" element={<PhoneBookPage />} />
          <Route path="visitor" element={<VisitorAppPage />} />
          <Route path="new" element={<NewComponentPage />} />
        </Routes>
      </BrowserRouter> 
    </ThemeProvider>
  );
}

export default App;
