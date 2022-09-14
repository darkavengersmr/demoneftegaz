import { observer } from "mobx-react-lite";
import Footer from "../components/footer";
import Header from "../components/header";
import UserSettings from "../components/user-settings";
import user from "../store/user"

const UserSettingsPage: React.FC = () => {

    return (
      <>
        <Header />
        <UserSettings user={user}
        />
        <Footer />  
      </>
      
      
      )
  }
    
export default  observer(UserSettingsPage);