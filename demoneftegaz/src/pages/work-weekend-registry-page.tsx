import { observer } from "mobx-react-lite";
import Header from "../components/header";
import WorkAbsenseWeekendRegistryForm from "../components/work-absense-weekend/registry-form";
import workWeekend from "../store/work-weekend"
import persons from "../store/persons"
import Footer from "../components/footer";

const WorkWeekendRequestRegistryPage: React.FC = () => {
    return (
      <>
        <Header />
        <WorkAbsenseWeekendRegistryForm workAbsenseRegistry={workWeekend.getAll()}
                                 personById={persons.getById.bind(persons)}
                                 title="Реестр служебных записок на работу в выходной день"                                 
        />
        <Footer />  
      </>
      
      )
  }
    
export default observer(WorkWeekendRequestRegistryPage);