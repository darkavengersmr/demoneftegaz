import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { observer } from "mobx-react-lite";
import user from './store/user'
import LoadingSpinnerPage from "./pages/loading-spinner-page";
const MainPagePage = lazy(() => import("./pages/main-page-page"));
const VisitorRequestPage = lazy(() => import("./pages/visitor-request-page"));
const NewComponentPage = lazy(() => import("./pages/new-component-page"));
const PhoneBookPage = lazy(() => import("./pages/phonebook-page"));
const NewsPage = lazy(() => import("./pages/news-main-page"));
const UserInfoPage = lazy(() => import("./pages/user-info-page"));
const OfficialEmailsPage = lazy(() => import("./pages/official-emails.page"));
const VisitorRequestRegistryPage = lazy(() => import("./pages/visitors-request-registry-page"));
const WorkAbsensePage = lazy(() => import("./pages/work-absense-page"));
const WorkAbsenseRegistryPage = lazy(() => import("./pages/work-absense-registry-page"));
const WorkWeekendRequestRegistryPage = lazy(() => import("./pages/work-weekend-registry-page"));
const WorkWeekendRequestPage = lazy(() => import("./pages/work-weekend-page"));
const CdsRequestPage = lazy(() => import("./pages/cds-request-page"));
const TransportRequestPage = lazy(() => import("./pages/transport-page"));
const TransportRequestRegistryPage = lazy(() => import("./pages/transport-registry-page"));
const AskChiefPage = lazy(() => import("./pages/ask-chief-page"));
const AskChiefRegistryPage = lazy(() => import("./pages/ask-chief-registry-page"));
const WorkPermitGORequestPage = lazy(() => import("./pages/work-permit-go-page"));
const WorkPermitOGRequestPage = lazy(() => import("./pages/work-permit-og-page"));
const WorkPermitVSRequestPage = lazy(() => import("./pages/work-permit-vs-page"));
const WorkPermitPORequestPage = lazy(() => import("./pages/work-permit-po-page"));
const FSDocsTemplatesPage = lazy(() => import("./pages/fs-docs-templates"));
const FSContractTemplatesPage = lazy(() => import("./pages/fs-contract-templates"));
const FSRiskMatrixPage = lazy(() => import("./pages/fs-risk-matrix"));
const MyDocsPage = lazy(() => import("./pages/my-docs-page"));
const ResourceListPage = lazy(() => import("./pages/resource-list-page"));
const HallOfFameUnofficialPage = lazy(() => import("./pages/hall-of-fame-unofficial"));
const HallOfFameOfficialPage = lazy(() => import("./pages/hall-of-fame-official"));
const FSNewEmployeePage = lazy(() => import("./pages/fs-new-employee"));
const FSYoungSpecialistPage = lazy(() => import("./pages/fs-young-specialist"));
const NewsProfsouzPage = lazy(() => import("./pages/news-profsouz"));
const FsProfsouzTemplates = lazy(() => import("./pages/fs-profsouz-templates"));
const NewsAhuPage = lazy(() => import("./pages/news-ahu"));
const FSFoodPage = lazy(() => import("./pages/fs-food"));
const SrPersonalContacts = lazy(() => import("./pages/sr-personal-contacts"));
const SRHealthPage = lazy(() => import("./pages/sr-health"));
const OrgHistoryPage = lazy(() => import("./pages/org-history"));
const OrgStructurePage = lazy(() => import("./pages/org-structure"));
const PhotoGalleryPage = lazy(() => import("./pages/photo-gallery-page"));
const UserSettingsPage = lazy(() => import("./pages/user-settings-page"));
const BacklogRequestPage = lazy(() => import("./pages/backlog-request-page"));

function App() {

  const portalTheme = createTheme({
    typography: {
      fontSize: 12        
    },
    palette: {
      mode: user.data.settings?.theme ? user.data.settings?.theme : 'light', 
      primary: {
        main: '#ffce07',
        light: '#ffce07',
        dark: '#ffce07',
      },
      secondary: {
        main: '#e24826',
        light: '#e24826',
        dark: '#e24826',
      },        
    },  
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarColor: "#E24825 #E24825",
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              backgroundColor: "#E24825",
              width: "1em"
            },
            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
              borderRadius: 0,
              backgroundColor: "#FFCE07",
              minHeight: 24,
              border: "0px solid #AC202D",
              
            },
            "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
              backgroundColor: "#E24825",
            },
            "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
              backgroundColor: "#E24825",
            },
            "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#E24825",
            },
            "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
              backgroundColor: "#E24825",
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={portalTheme}> 
      <CssBaseline />
      <BrowserRouter> 
        <Suspense fallback={<LoadingSpinnerPage />}>
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

          <Route path="personal-contacts" element={<SrPersonalContacts />} />          

          <Route path="photo-gallery" element={<PhotoGalleryPage />} />

          <Route path="user-settings" element={<UserSettingsPage />} />
          
          <Route path="backlog" element={<BacklogRequestPage />} />          

          <Route path="new" element={<NewComponentPage />} />
          <Route path="static-pdf" element={<SRHealthPage />} />
          <Route path="loading" element={<LoadingSpinnerPage />} /> 
        </Routes>
        </Suspense>
      </BrowserRouter> 
    </ThemeProvider>
  );
}

export default observer(App);
