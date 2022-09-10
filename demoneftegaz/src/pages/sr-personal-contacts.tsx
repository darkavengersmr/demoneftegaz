import Header from "../components/header";
import { observer } from "mobx-react-lite";
import StaticHtml from "../components/static-html";
import Footer from "../components/footer";

const SRPersonalContactsPage: React.FC = () => {

    return (
      <>
      <Header />      
          <StaticHtml url="/contacts.html" />
      <Footer />    
      </>
      
      )
  }
    
export default observer(SRPersonalContactsPage);