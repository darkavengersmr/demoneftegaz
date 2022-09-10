import Header from "../components/header";
import { observer } from "mobx-react-lite";
import Footer from "../components/footer";
import StaticPdf from "../components/static-pdf/static-pdf";

const SRHealthPage: React.FC = () => {

    return (
      <>
      <Header />      
          <StaticPdf />
      <Footer />    
      </>
      
      )
  }
    
export default observer(SRHealthPage);