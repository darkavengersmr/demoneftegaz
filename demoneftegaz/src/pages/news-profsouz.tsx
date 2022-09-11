import { Grid } from "@mui/material";
import Footer from "../components/footer";
import Header from "../components/header";
import NewsComponent from "../components/news";

import news from "../store/news-profsouz";

const NewsProfsouzPage: React.FC = () => {
    return (
      <>
        <Header />        
          <Grid container justifyContent="center" columnSpacing={4} minHeight="100%">
            <Grid item sx={{ width: "95%"}}>
              <NewsComponent news={news} header="Новости Профсоюза"/>
            </Grid>                    
          </Grid>
        <Footer />  
      </>
      
      )
  }
    
export default NewsProfsouzPage;