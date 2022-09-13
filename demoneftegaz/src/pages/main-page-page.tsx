import { Grid } from "@mui/material";
import Header from "../components/header";
import MainPage from "../components/main-page/main-page";
import NewsComponent from "../components/news";
import news from "../store/news-mainpage";
import { initialPerfomanceIndicator, initialProductionData } from "../store/mock-data/perfomance-indicator"
import Footer from "../components/footer";
import NewDocs from "../components/new-docs";
import NewTasks from "../components/new-tasks";
import { useWindowDimensions } from "../hooks";
import GoDesktop from "../components/go-desktop";
import TrafficStatistics from "../components/traffic-statictics";
import { initialTrafficStatistics } from "../store/mock-data/traffic-statistics";

const MainPagePage: React.FC = () => {

    const windowDimension = useWindowDimensions()
    
    return (
      <>        
        {
          windowDimension.width < windowDimension.height &&
          <GoDesktop />
        }
        {
          !(windowDimension.width < windowDimension.height) &&
        <>
        <Header />
        <Grid container justifyContent="center" columnSpacing={4}>
          <Grid item sx={{ width: "55%"}}>
            <NewsComponent news={news} header="Новости" forciblyNarrow={true}/>
          </Grid>
          <Grid item sx={{ width: "45%" }}>
            <MainPage initialPerfomanceIndicator={initialPerfomanceIndicator} 
                      initialProductionData={initialProductionData}                
            /> 
            <NewTasks />
            <NewDocs />
            <TrafficStatistics trafficStatistics={initialTrafficStatistics} />
          </Grid>          
        </Grid>
        <Footer /> 
        </>
        }
            
      </>
      )
  }
    
  export default MainPagePage;