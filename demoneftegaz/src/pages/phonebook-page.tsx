import { observer } from "mobx-react-lite";
import Footer from "../components/footer";
import Header from "../components/header";
import PhoneBook from "../components/phonebook";
import persons from "../store/persons";

const PhoneBookPage: React.FC = () => {
    return (
      <>
        <Header />
        <PhoneBook personsByFilter={persons.getPersonsByFilter.bind(persons)}
                   personById={persons.getById.bind(persons)}
        />
        <Footer />  
      </>
      
      )
  }
    
export default observer(PhoneBookPage);