import { observer } from "mobx-react-lite";
import Footer from "../components/footer";
import HallOfFame from "../components/hall-of-fame";
import Header from "../components/header";
import persons from "../store/persons";

const HallOfFamePage: React.FC = () => {
    return (
      <>
        <Header />
        <HallOfFame persons={persons.getForHallOfFame()}/>
        <Footer />  
      </>
      
      )
  }
    
export default observer(HallOfFamePage);