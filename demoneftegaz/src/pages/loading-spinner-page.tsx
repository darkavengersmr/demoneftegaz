import Footer from "../components/footer";
import Header from "../components/header";
import LoadingSpinner from "../components/loading-spinner";

const LoadingSpinnerPage: React.FC = () => {
    return (
      <>
        <Header />
        <LoadingSpinner />
        <Footer />  
      </>
      
      )
  }
    
export default LoadingSpinnerPage;