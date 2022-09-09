import { observer } from "mobx-react-lite";
import Footer from "../components/footer";
import Header from "../components/header";
import ResourceList from "../components/resources-list";
import { initialResourcesList } from "../store/mock-data/resources-list";


const ResourceListPage: React.FC = () => {
    return (
      <>
        <Header />
        <ResourceList resourceList={initialResourcesList}/>
        <Footer />  
      </>
      
      )
  }
    
export default observer(ResourceListPage);