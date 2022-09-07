import { Routes, Route, BrowserRouter } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import MainPagePage from "./pages/main-page-page";
import VisitorRequestPage from "./pages/visitor-request-page";
import NewComponentPage from "./pages/new-component-page";
import PhoneBookPage from "./pages/phonebook-page";
import UserInfoPage from "./pages/user-info-page";
import OfficialEmailsPage from "./pages/official-emails.page";
import VisitorRequestRegistryPage from "./pages/visitors-request-registry-page";
import WorkAbsensePage from "./pages/work-absense-page";
import WorkAbsenseRegistryPage from "./pages/work-absense-registry-page";
import WorkWeekendRequestRegistryPage from "./pages/work-weekend-registry-page";
import WorkWeekendRequestPage from "./pages/work-weekend-page";
import CdsRequestPage from "./pages/cds-request-page";
import TransportRequestPage from "./pages/transport-page";
import TransportRequestRegistryPage from "./pages/transport-registry-page";
import AskChiefPage from "./pages/ask-chief-page";
import AskChiefRegistryPage from "./pages/ask-chief-registry-page";

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
          <Route path="official-emails" element={<OfficialEmailsPage />} />
          <Route path="userinfo/:id" element={<UserInfoPage />} />
          <Route path="visitors" element={<VisitorRequestPage />} />
          <Route path="visitors-registry" element={<VisitorRequestRegistryPage />} />
          <Route path="work-absense" element={<WorkAbsensePage />} />
          <Route path="work-absense-registry" element={<WorkAbsenseRegistryPage />} />
          <Route path="work-weekend" element={<WorkWeekendRequestPage />} />
          <Route path="work-weekend-registry" element={<WorkWeekendRequestRegistryPage />} />
          <Route path="cds" element={<CdsRequestPage />} />
          <Route path="transport" element={<TransportRequestPage />} />
          <Route path="transport-registry" element={<TransportRequestRegistryPage />} />
          <Route path="ask-chief" element={<AskChiefPage />} />
          <Route path="ask-chief-registry" element={<AskChiefRegistryPage />} />
          <Route path="new" element={<NewComponentPage />} />
        </Routes>
      </BrowserRouter> 
    </ThemeProvider>
  );
}

export default App;
