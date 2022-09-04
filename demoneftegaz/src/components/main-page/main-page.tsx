import { IPerfomanceIndicatorData, IProductionData } from "../../interfaces/interfaces";
import PerfomanceIndicator from "../perfomance-indicator";

type MainPageProps = {
  initialPerfomanceIndicator: IPerfomanceIndicatorData
  initialProductionData: IProductionData[]
}

const MainPage = ({initialPerfomanceIndicator, initialProductionData}: MainPageProps) => {
  return (
    <>
      <PerfomanceIndicator initialPerfomanceIndicator={initialPerfomanceIndicator} 
                           initialProductionData={initialProductionData}
      />
    </>
    
    )
}
  
export default MainPage;