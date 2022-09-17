import { Container } from "@mui/system";
import { observer } from "mobx-react-lite";
import Footer from "../components/footer";
import GlobalMapComponent from "../components/global-map";
import Header from "../components/header";
import PhoneBook from "../components/phonebook";
import persons from "../store/persons";

const PhoneBookPage: React.FC = () => {
    return (
      <>
        <Header />
        <Container sx={{maxWidth: 0.75}}>
          <GlobalMapComponent users={persons.getAll()}></GlobalMapComponent>
        </Container>
        <PhoneBook personsByFilter={persons.getPersonsByFilter.bind(persons)}
                   personById={persons.getById.bind(persons)}
        />
        <Footer />  
      </>
      
      )
  }
    
export default observer(PhoneBookPage);