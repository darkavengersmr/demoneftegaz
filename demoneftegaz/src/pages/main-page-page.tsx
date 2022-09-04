import Header from "../components/header";
import MainPage from "../components/main-page/main-page";
import { initialPerfomanceIndicator, initialProductionData } from "../store/mock-data/perfomance-indicator"

const MainPagePage: React.FC = () => {
    return (
      <>
      <Header />
      <MainPage initialPerfomanceIndicator={initialPerfomanceIndicator} 
                initialProductionData={initialProductionData}
      />
      </>
      )
  }
    
  export default MainPagePage;