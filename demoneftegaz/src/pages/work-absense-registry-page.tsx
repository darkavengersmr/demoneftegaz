import { observer } from "mobx-react-lite";
import Header from "../components/header";
import WorkAbsenseWeekendRegistryForm from "../components/work-absense-weekend/registry-form";
import workAbsense from "../store/work-absense"
import persons from "../store/persons"

const WorkAbsenseRequestRegistryPage: React.FC = () => {
    return (
      <>
        <Header />
        <WorkAbsenseWeekendRegistryForm workAbsenseRegistry={workAbsense.getAll()}
                                 personById={persons.getById.bind(persons)}
                                 title="Реестр служебных записок на отсутствие на рабочем месте"
        />
      </>
      
      )
  }
    
export default observer(WorkAbsenseRequestRegistryPage);