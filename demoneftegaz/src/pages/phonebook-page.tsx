import { observer } from "mobx-react-lite";
import Header from "../components/header";
import PhoneBook from "../components/phonebook";
import persons from "../store/persons";

const PhoneBookPage: React.FC = () => {
    return (
      <>
        <Header />
        <PhoneBook personsByFilter={persons.getPersonsByFilter.bind(persons)}/>
      </>
      
      )
  }
    
export default observer(PhoneBookPage);