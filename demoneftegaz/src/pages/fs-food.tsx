import Header from "../components/header";
import user from '../store/user'
import persons from '../store/persons'
import fileStorage from '../store/file-storage'
import { observer } from "mobx-react-lite";

import FileStorage from "../components/file-storage";
import Footer from "../components/footer";

import food from "../img/food.jpg"

const FSFoodPage: React.FC = () => {

    return (
      <>
      <Header />      
          <FileStorage storage={fileStorage.getLibrary("Столовая")}
                       title="Столовая"
                       user={user.data}
                       personById={persons.getById.bind(persons)}
                       add={fileStorage.add.bind(fileStorage)}
                       remove={fileStorage.remove.bind(fileStorage)}
                       meta={["Примечание"]}       
                       imgOptional={food}           
          />

      <Footer />  
      </>
      
      )
  }
    
export default observer(FSFoodPage);