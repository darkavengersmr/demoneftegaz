import { Grid } from "@mui/material";
import Header from "../components/header";
import MainPage from "../components/main-page/main-page";
import NewsComponent from "../components/news";
import news from "../store/news-mainpage";
import { initialPerfomanceIndicator, initialProductionData } from "../store/mock-data/perfomance-indicator"
import Footer from "../components/footer";
import NewDocs from "../components/new-docs";
import NewTasks from "../components/new-tasks";

const MainPagePage: React.FC = () => {
    return (
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
          </Grid>
          
        </Grid>

        <Footer />     
      </>
      )
  }
    
  export default MainPagePage;