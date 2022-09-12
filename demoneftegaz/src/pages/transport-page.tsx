import Header from "../components/header";
import user from '../store/user'
import persons from "../store/persons";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import TransportRequest from "../components/transport";
import transport from "../store/transport";
import TransportRequestRegistryForm from "../components/transport/registry-form";
import Footer from "../components/footer";

const TransportRequestPage: React.FC = () => {

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
            <Tab value="request" label="Новая заявка на транспорт" />
            <Tab value="agreementToMe" label="Мне на согласование" />
            <Tab value="agreementFromMe" label="От меня на согласование" />
            <Tab value="registry" label="Все заявки на транспорт" />            
          </Tabs>
        </Box>
        
        { tab === "request" && 
          <TransportRequest   user={user.data}
                              persons={persons.getAll()}
                              personById={persons.getById.bind(persons)}
                              getByTabnumber={persons.getByTabnumber.bind(persons)}                              
                              transportRequest={transport.transportRequest.bind(transport)}
          />
        }
        { tab === "agreementToMe" &&
          <TransportRequestRegistryForm transportRegistry={transport.getAgreementedToMeByOwnerId(user.data.id)}
                                   personById={persons.getById.bind(persons)}                                   
                                   title="Заявки на транспорт / У меня на согласовании"
                                   agreeRequest={transport.agreeRequest.bind(transport)}
          />
        }
        { tab === "agreementFromMe" &&
          <TransportRequestRegistryForm transportRegistry={transport.getAgreementedFromMeByOwnerId(user.data.id)}
                                   personById={persons.getById.bind(persons)}                                   
                                   title="Заявки на транспорт / На согласовании руководителя"
          />
        }
        { tab === "registry" &&
          <TransportRequestRegistryForm transportRegistry={transport.getByOwnerId(user.data.id)}
                                   personById={persons.getById.bind(persons)}                                   
                                   title="Заявки на транспорт / Все мои документы"
          />
        }
       <Footer />    
      </>
      
      )
  }
    
export default observer(TransportRequestPage);