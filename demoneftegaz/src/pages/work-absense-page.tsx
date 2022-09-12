import Header from "../components/header";
import workAbsense from '../store/work-absense'
import user from '../store/user'
import persons from "../store/persons";
import WorkAbsenseWeekendRequest from "../components/work-absense-weekend";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import WorkAbsenseRegistryForm from "../components/work-absense-weekend/registry-form";
import Footer from "../components/footer";

const WorkAbsenseRequestPage: React.FC = () => {

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
                              workAbsenseRequest={workAbsense.workAbsenseRequest.bind(workAbsense)}
                              title="Служебная записка на отсутствие на рабочем месте"
          />
        }
        { tab === "agreementToMe" &&
          <WorkAbsenseRegistryForm workAbsenseRegistry={workAbsense.getAgreementedToMeByOwnerId(user.data.id)}
                                   personById={persons.getById.bind(persons)}                                   
                                   title="Cлужебные записки на отсутствие на рабочем месте / У меня на согласовании"
                                   agreeRequest={workAbsense.agreeRequest.bind(workAbsense)}
          />
        }
        { tab === "agreementFromMe" &&
          <WorkAbsenseRegistryForm workAbsenseRegistry={workAbsense.getAgreementedFromMeByOwnerId(user.data.id)}
                                   personById={persons.getById.bind(persons)}                                   
                                   title="Cлужебные записки на отсутствие на рабочем месте / На согласовании руководителя"
          />
        }
        { tab === "registry" &&
          <WorkAbsenseRegistryForm workAbsenseRegistry={workAbsense.getByOwnerId(user.data.id)}
                                   personById={persons.getById.bind(persons)}                                   
                                   title="Cлужебные записки на отсутствие на рабочем месте / Все мои документы"
          />
        }
         <Footer />  
      </>
      
      )
  }
    
export default observer(WorkAbsenseRequestPage);