import Header from "../components/header";
import VisitorRequest from "../components/visitor-request";
import visitors from '../store/visitor-request'
import user from '../store/user'
import VisitorRequestRegistryForm from "../components/visitor-request/registry-form";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import Footer from "../components/footer";

const VisitorRequestPage: React.FC = () => {

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
            <Tab value="request" label="Новая заявка" />
            <Tab value="registry" label="Мои заявки" />                     
          </Tabs>
        </Box>

        { tab === "request" && 
          <VisitorRequest user={user.data}
                          visitorRequest={visitors.addVisitorRequest.bind(visitors)}
          />
        }
        { tab === "registry" &&
          <VisitorRequestRegistryForm visitors={visitors.getByOwnerId(user.data.id)}                                    
                                      title="Мои заявки на пропуск посетителей"
          />
        }
       <Footer />  
      </>
      
      )
  }
    
export default observer(VisitorRequestPage);