import { Grid } from "@mui/material";
import Footer from "../components/footer";
import Header from "../components/header";
import NewsComponent from "../components/news";

import news from "../store/news-ahu";

const NewsAhuPage: React.FC = () => {
    return (
      <>
        <Header />        
          <Grid container justifyContent="center" columnSpacing={4}>
            <Grid item sx={{ width: "95%"}}>
              <NewsComponent news={news} header="Новости Административно-хозяйственного управления"/>
            </Grid>                    
          </Grid>
        <Footer />  
      </>
      
      )
  }
    
export default NewsAhuPage;