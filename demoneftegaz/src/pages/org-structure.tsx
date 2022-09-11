import Footer from "../components/footer";
import Header from "../components/header";
import OrgStructure from "../components/org-structure";
import { initialDepartaments } from "../store/mock-data/departaments";
import persons from "../store/persons"

const OrgStructurePage: React.FC = () => {
    return (
      <>
        <Header />
        <OrgStructure departaments={initialDepartaments} 
                      persons={persons}
        />
        <Footer />  
      </>
      
      )
  }
    
export default OrgStructurePage;