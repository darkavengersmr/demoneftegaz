import { Box } from "@mui/material";
import Header from "../components/header";
import MainPage from "../components/main-page/main-page";
import NewsComponent from "../components/news";
import news from "../store/news";
import { initialPerfomanceIndicator, initialProductionData } from "../store/mock-data/perfomance-indicator"
import Footer from "../components/footer";


const MainPagePage: React.FC = () => {
    return (
      <>
        <Header />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly"
          }}
        >
          <Box sx={{width: 0.55}}>
            <NewsComponent news={news} header="Новости" forciblyNarrow={true}/>
          </Box>
          <MainPage initialPerfomanceIndicator={initialPerfomanceIndicator} 
                initialProductionData={initialProductionData}                
          /> 
        </Box>
        <Footer />     
      </>
      )
  }
    
  export default MainPagePage;