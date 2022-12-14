import { observer } from "mobx-react-lite";
import AskChiefRequestRegistryForm from "../components/ask-chief/registry-form/registry-form";
import Footer from "../components/footer";
import Header from "../components/header";
import askChiefReuestsStore from '../store/ask-chief'

const AskChiefRequestRegistryPage: React.FC = () => {
    return (
      <>
        <Header />
        <AskChiefRequestRegistryForm askChiefRequests={askChiefReuestsStore.getAll()}        
        />
        <Footer />  
      </>
      
      )
  }
    
export default observer(AskChiefRequestRegistryPage);