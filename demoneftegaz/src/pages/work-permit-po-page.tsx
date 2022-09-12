import Header from "../components/header";
import workPermit from '../store/work-permit'
import user from '../store/user'
import persons from "../store/persons";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { WorkPermitIssueRequest, WorkPermitReceiveRequest } from "../components/work-permit";
import WorkPermitRegistryForm from "../components/work-permit/registry-form";
import Footer from "../components/footer";

const WorkPermitPORequestPage: React.FC = () => {

    const [tab, setTab] = useState('issue');

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
            <Tab value="issue" label="Зарегистрировать" />
            <Tab value="receive" label="Вернуть" />            
            <Tab value="registry" label="Журнал" />            
          </Tabs>
        </Box>
        
        { tab === "issue" && 
          <WorkPermitIssueRequest user={user.data}
                                  persons={persons.getAll()}
                                  personById={persons.getById.bind(persons)}
                                  getByTabnumber={persons.getByTabnumber.bind(persons)}                              
                                  workPermitRequest={workPermit.workPermitRequest.bind(workPermit)}
                                  title="Журнал регистрации нарядов-допусков на проведение работ повышенной опасности"
          />
        }
        { tab === "receive" && 
          <WorkPermitReceiveRequest workPermitsList={workPermit.getNotCompletedInJournal("Журнал регистрации нарядов-допусков на проведение работ повышенной опасности")}   
                                    workPermitReceive={workPermit.workPermitReceive.bind(workPermit)}
                                    title="Журнал регистрации нарядов-допусков на проведение работ повышенной опасности"
                                    personById={persons.getById.bind(persons)}
          />
        }
        { tab === "registry" &&
          <WorkPermitRegistryForm  workPermitRegistry={workPermit.getByJournal("Журнал регистрации нарядов-допусков на проведение работ повышенной опасности")}
                                   personById={persons.getById.bind(persons)}                                   
                                   title="Журнал регистрации нарядов-допусков на проведение работ повышенной опасности"
          />
        }
      <Footer />    
      </>
      
      )
  }
    
export default observer(WorkPermitPORequestPage);