import { observer } from "mobx-react-lite";
import Footer from "../components/footer";
import HallOfFame from "../components/hall-of-fame";
import Header from "../components/header";
import persons from "../store/persons";
import hallOfFame from "../store/hall-of-hame";

const HallOfFameUnofficialPage: React.FC = () => {
    return (
      <>
        <Header />
        <HallOfFame persons={persons} 
                    hallOfFame={hallOfFame.getUnofficial()} 
                    title="Неофициальные благодарности и респекты от коллег" 
        />
        <Footer />  
      </>
      
      )
  }
    
export default observer(HallOfFameUnofficialPage);