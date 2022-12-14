import Header from "../components/header";
import user from '../store/user'
import persons from '../store/persons'
import fileStorage from '../store/file-storage'
import { observer } from "mobx-react-lite";

import FileStorage from "../components/file-storage";
import Footer from "../components/footer";

import contractTemplates from "../img/contract-templates.jpg"

const FSContractTemplatesPage: React.FC = () => {

    return (
      <>
      <Header />      
          <FileStorage storage={fileStorage.getLibrary("Стандартные формы договоров")}
                       title="Стандартные формы договоров"
                       user={user.data}
                       personById={persons.getById.bind(persons)}
                       add={fileStorage.add.bind(fileStorage)}
                       remove={fileStorage.remove.bind(fileStorage)}
                       meta={["Номер и дата приказа", "Область действия"]}                  
                       imgOptional={contractTemplates}
          />

      <Footer />    
      </>
      
      )
  }
    
export default observer(FSContractTemplatesPage);