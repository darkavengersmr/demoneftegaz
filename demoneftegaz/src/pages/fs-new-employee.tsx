import Header from "../components/header";
import user from '../store/user'
import persons from '../store/persons'
import fileStorage from '../store/file-storage'
import { observer } from "mobx-react-lite";

import FileStorage from "../components/file-storage";
import Footer from "../components/footer";

import newEmployee from "../img/new-employee.jpg"

const FSNewEmployeePage: React.FC = () => {

    return (
      <>
      <Header />      
          <FileStorage storage={fileStorage.getLibrary("Новому работнику")}
                       title="Материалы для вновь принятых сотрудников"
                       user={user.data}
                       personById={persons.getById.bind(persons)}
                       add={fileStorage.add.bind(fileStorage)}
                       remove={fileStorage.remove.bind(fileStorage)}
                       meta={["Комментарии"]}
                       imgOptional={newEmployee}                  
          />

      <Footer />    
      </>
      
      )
  }
    
export default observer(FSNewEmployeePage);