import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import UserInfo from "../components/user-info";
import persons from "../store/persons";
import user from "../store/user"
import hallOfHame from "../store/hall-of-hame";

const UserInfoPage: React.FC = () => {

    const { id = "-1" } = useParams()
    const person = persons.getById(parseInt(id))

    return (
      <>
        <Header />
        <UserInfo person={person} 
                  user={user.data}
                  setDescription={user.setDescription.bind(user)} 
                  like={persons.likeToPerson.bind(persons)} 
                  personById={persons.getById.bind(persons)}
                  setPersonLocation={persons.setPersonLocation.bind(persons)}
                  addAward={hallOfHame.addAward.bind(hallOfHame)}
        />
        <Footer />  
      </>
      
      
      )
  }
    
export default  observer(UserInfoPage);