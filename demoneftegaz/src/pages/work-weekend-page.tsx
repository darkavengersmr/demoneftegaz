import Header from "../components/header";
import workWeekend from '../store/work-weekend'
import user from '../store/user'
import persons from "../store/persons";
import WorkAbsenseWeekendRequest from "../components/work-absense-weekend";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import WorkAbsenseWeekendRegistryForm from "../components/work-absense-weekend/registry-form";
import Footer from "../components/footer";

const WorkWeekendRequestPage: React.FC = () => {

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
            <Tab value="request" label="Новая служебная записка" />
            <Tab value="agreementToMe" label="Мне на согласование" />
            <Tab value="agreementFromMe" label="От меня на согласование" />
            <Tab value="registry" label="Все служебные записки" />            
          </Tabs>
        </Box>
        
        { tab === "request" && 
          <WorkAbsenseWeekendRequest user={user.data}
                              persons={persons.getAll()}
                              personById={persons.getById.bind(persons)}
                              getByTabnumber={persons.getByTabnumber.bind(persons)}                              
                              workAbsenseRequest={workWeekend.workWeekendRequest.bind(workWeekend)}
                              title="Служебная записка на работу в выходной день"
          />
        }
        { tab === "agreementToMe" &&
          <WorkAbsenseWeekendRegistryForm workAbsenseRegistry={workWeekend.getAgreementedToMeByOwnerId(user.data.id)}
                                   personById={persons.getById.bind(persons)}                                   
                                   title="Служебные записки на работу в выходной день / У меня на согласовании"
                                   agreeRequest={workWeekend.agreeRequest.bind(workWeekend)}
          />
        }
        { tab === "agreementFromMe" &&
          <WorkAbsenseWeekendRegistryForm workAbsenseRegistry={workWeekend.getAgreementedFromMeByOwnerId(user.data.id)}
                                   personById={persons.getById.bind(persons)}                                   
                                   title="Служебные записки на работу в выходной день / На согласовании руководителя"
          />
        }
        { tab === "registry" &&
          <WorkAbsenseWeekendRegistryForm workAbsenseRegistry={workWeekend.getByOwnerId(user.data.id)}
                                   personById={persons.getById.bind(persons)}                                   
                                   title="Служебные записки на работу в выходной день / Все мои документы"
          />
        }
        <Footer />  
      </>
      
      )
  }
    
export default observer(WorkWeekendRequestPage);