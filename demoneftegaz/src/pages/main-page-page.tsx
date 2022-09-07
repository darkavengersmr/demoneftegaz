import { Box } from "@mui/material";
import Header from "../components/header";
import MainPage from "../components/main-page/main-page";
import NewsComponent from "../components/news";
import news from "../store/news";

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
          <Box sx={{width: 0.5}}>
            <NewsComponent news={news} header="Новости" forciblyNarrow={true}/>
          </Box>
          <MainPage />
        </Box>
      </>
      )
  }
    
  export default MainPagePage;