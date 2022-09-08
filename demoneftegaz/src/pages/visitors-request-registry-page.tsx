import { observer } from "mobx-react-lite";
import Footer from "../components/footer";
import Header from "../components/header";
import VisitorRequestRegistryForm from "../components/visitor-request/registry-form";
import visitors from '../store/visitor-request'

const VisitorRequestRegistryPage: React.FC = () => {
    return (
      <>
        <Header />
        <VisitorRequestRegistryForm visitors={visitors.getAll()}                                     
                                    title="Реестр заявок на пропуск посетителей"
        />
        <Footer />  
      </>
       
      )
  }
    
export default observer(VisitorRequestRegistryPage);