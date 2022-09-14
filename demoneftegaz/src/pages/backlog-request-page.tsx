import Header from "../components/header";
import backlog from '../store/backlog-request'
import user from '../store/user'
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import Footer from "../components/footer";
import BacklogRequest from "../components/backlog";
import BacklogRequestRegistryForm from "../components/backlog/registry-form/registry-form";
import persons from "../store/persons";

const BacklogRequestPage: React.FC = () => {

    const [tab, setTab] = useState('registry');

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
            <Tab value="registry" label="Запросы на доработку" />   
            <Tab value="request" label="Новый запрос на доработку" />
                  
          </Tabs>
        </Box>

        { tab === "request" && 
          <BacklogRequest user={user.data}
                          backlog={backlog}
          />
        }
        { tab === "registry" &&
          <BacklogRequestRegistryForm backlog={backlog}
                                      personById={persons.getById.bind(persons)}                                    
                                      title="Список запросов на доработку функционала портала"
          />
        }
       <Footer />  
      </>
      
      )
  }
    
export default observer(BacklogRequestPage);