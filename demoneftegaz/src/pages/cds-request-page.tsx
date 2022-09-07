import Header from "../components/header";
import user from '../store/user'
import { observer } from "mobx-react-lite";
import CdsRequest from "../components/cds-request";
import { ICdsRequest } from "../interfaces/interfaces";
const CdsRequestPage: React.FC = () => {

    const sendCdsRequest = (request: ICdsRequest) => {
        console.log(request )
    };

    return (
      <>
      <Header />

        <CdsRequest user={user.data}
                    cdsRequest={sendCdsRequest}
        />

      </>
      
      )
  }
    
export default observer(CdsRequestPage);