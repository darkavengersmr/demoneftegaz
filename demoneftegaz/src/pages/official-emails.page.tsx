import { observer } from "mobx-react-lite";
import Header from "../components/header";
import OfficialEmails from "../components/official=emails";
import persons from "../store/persons";

const OfficialEmailsPage: React.FC = () => {
    return (
      <>
        <Header />
        <OfficialEmails officialEmailsByFilter={persons.getOfficialEmailsByFilter.bind(persons)}/>
      </>
      
      )
  }
    
export default observer(OfficialEmailsPage);