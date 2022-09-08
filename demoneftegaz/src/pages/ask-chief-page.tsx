import Header from "../components/header";
import askChiefReuestsStore from '../store/ask-chief'
import user from '../store/user'
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import AskChiefRequest from "../components/ask-chief";
import AskChiefRequestRegistryForm from "../components/ask-chief/registry-form/registry-form";
import Footer from "../components/footer";

const AskChiefRequestPage: React.FC = () => {

    const [tab, setTab] = useState('request');

    const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
      setTab(newValue);
    };

    return (
      <>
      <Header />

        <Box sx={{ width: '100%' }}>
          <Tabs
            value={tab}
            onChange={handleChangeTab}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="request" label="Задать вопрос" />
            <Tab value="registry" label="Мои вопросы" />            
          </Tabs>
        </Box>

        { tab === "request" && 
          <AskChiefRequest user={user.data}
                           askChiefRequests={askChiefReuestsStore.askChiefRequest.bind(askChiefReuestsStore)}
          />
        }
        { tab === "registry" &&
          <AskChiefRequestRegistryForm askChiefRequests={askChiefReuestsStore.getByOwnerId(user.data.id)}                                       
          />
        }
       <Footer />    
      </>
      
      )
  }
    
export default observer(AskChiefRequestPage);