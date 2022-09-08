import Footer from "../components/footer";
import Header from "../components/header";
import NewsComponent from "../components/news";

import news from "../store/news";

const NewsPage: React.FC = () => {
    return (
      <>
        <Header />
        <NewsComponent news={news} header="Новости"/>
        <Footer />  
      </>
      
      )
  }
    
export default NewsPage;