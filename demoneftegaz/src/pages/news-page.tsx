import { Grid } from "@mui/material";
import Footer from "../components/footer";
import Header from "../components/header";
import NewsComponent from "../components/news";

import news from "../store/news";

const NewsPage: React.FC = () => {
    return (
      <>
        <Header />        
          <Grid container justifyContent="center" columnSpacing={4}>
            <Grid item sx={{ width: "95%"}}>
              <NewsComponent news={news} header="Новости"/>
            </Grid>                    
          </Grid>
        <Footer />  
      </>
      
      )
  }
    
export default NewsPage;