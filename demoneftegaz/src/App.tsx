import { Routes, Route, BrowserRouter } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import MainPagePage from "./pages/main-page-page";
import VisitorRequestPage from "./pages/visitor-request-page";
import NewComponentPage from "./pages/new-component-page";
import PhoneBookPage from "./pages/phonebook-page";
import NewsPage from "./pages/news-main-page";
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
import WorkPermitGORequestPage from "./pages/work-permit-go-page";
import WorkPermitOGRequestPage from "./pages/work-permit-og-page";
import WorkPermitVSRequestPage from "./pages/work-permit-vs-page";
import WorkPermitPORequestPage from "./pages/work-permit-po-page";
import FSDocsTemplatesPage from "./pages/fs-docs-templates";
import FSContractTemplatesPage from "./pages/fs-contract-templates"
import FSRiskMatrixPage from "./pages/fs-risk-matrix"
import MyDocsPage from "./pages/my-docs-page"
import ResourceListPage from "./pages/resource-list-page";
import HallOfFameUnofficialPage from "./pages/hall-of-fame-unofficial";
import HallOfFameOfficialPage from "./pages/hall-of-fame-official";
import FSNewEmployeePage from "./pages/fs-new-employee";
import FSYoungSpecialistPage from "./pages/fs-young-specialist";
import NewsProfsouzPage from "./pages/news-profsouz";
import FsProfsouzTemplates from "./pages/fs-profsouz-templates";
import NewsAhuPage from "./pages/news-ahu";
import FSFoodPage from "./pages/fs-food";
import SrPersonalContacts from "./pages/sr-personal-contacts";
import SRHealthPage from "./pages/sr-health";
import OrgHistoryPage from "./pages/org-history";
import OrgStructurePage from "./pages/org-structure";

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
          
          <Route path="visitor" element={<VisitorRequestPage />} />
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
          <Route path="work-permit-go" element={<WorkPermitGORequestPage />} />
          <Route path="work-permit-og" element={<WorkPermitOGRequestPage />} />
          <Route path="work-permit-vs" element={<WorkPermitVSRequestPage />} />
          <Route path="work-permit-po" element={<WorkPermitPORequestPage />} />

          <Route path="fs-docs-templates" element={<FSDocsTemplatesPage />} />          
          <Route path="fs-contract-templates" element={<FSContractTemplatesPage />} />
          <Route path="fs-risk-matrix" element={<FSRiskMatrixPage />} />
          <Route path="fs-new-employee" element={<FSNewEmployeePage />} />
          <Route path="fs-young-specialist" element={<FSYoungSpecialistPage />} />          
          <Route path="fs-profsouz-templates" element={<FsProfsouzTemplates />} />
          <Route path="fs-food" element={<FSFoodPage />} />    

          <Route path="news" element={<NewsPage />} />
          <Route path="news-profsouz" element={<NewsProfsouzPage />} />
          <Route path="news-ahu" element={<NewsAhuPage />} />

          <Route path="org-history" element={<OrgHistoryPage />} />
          <Route path="org-structure" element={<OrgStructurePage />} />

          <Route path="my-docs" element={<MyDocsPage />} />
          <Route path="resource-list" element={<ResourceListPage />} />

          <Route path="hall-of-fame-unofficial" element={<HallOfFameUnofficialPage />} />
          <Route path="hall-of-fame-official" element={<HallOfFameOfficialPage />} />

          <Route path="new" element={<NewComponentPage />} />
          <Route path="personal-contacts" element={<SrPersonalContacts />} />
          <Route path="static-pdf" element={<SRHealthPage />} />

        </Routes>
      </BrowserRouter> 
    </ThemeProvider>
  );
}

export default App;
