import Header from "../components/header";
import user from '../store/user'
import persons from '../store/persons'
import fileStorage from '../store/file-storage'
import { observer } from "mobx-react-lite";

import FileStorage from "../components/file-storage";
import Footer from "../components/footer";

import docsTemplates from "../img/docs-templates.jpg"

const FSDocsTemplatesPage: React.FC = () => {

    return (
      <>
      <Header />      
          <FileStorage storage={fileStorage.getLibrary("Шаблоны документов")}
                       title="Шаблоны документов"
                       user={user.data}
                       personById={persons.getById.bind(persons)}
                       add={fileStorage.add.bind(fileStorage)}
                       remove={fileStorage.remove.bind(fileStorage)}
                       meta={["Направление", "Примечание"]}       
                       imgOptional={docsTemplates}           
          />

      <Footer />  
      </>
      
      )
  }
    
export default observer(FSDocsTemplatesPage);