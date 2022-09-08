import Header from "../components/header";
import user from '../store/user'
import visitors from '../store/visitor-request'
import VisitorRequestRegistryForm from "../components/visitor-request/registry-form";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";

import workWeekend from '../store/work-weekend'
import persons from "../store/persons";
import WorkAbsenseWeekendRegistryForm from "../components/work-absense-weekend/registry-form";

import workAbsense from '../store/work-absense'
import WorkAbsenseRegistryForm from "../components/work-absense-weekend/registry-form";

import transport from "../store/transport";
import TransportRequestRegistryForm from "../components/transport/registry-form";

import askChiefReuestsStore from '../store/ask-chief'
import AskChiefRequestRegistryForm from "../components/ask-chief/registry-form/registry-form";
import Footer from "../components/footer";

const MyDocsPage: React.FC = () => {

    const [tab, setTab] = useState('visitors');

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
            <Tab value="visitors" label="Заявки на пропуск" />
            <Tab value="weekend" label="Работа в выходной" />
            <Tab value="absense" label="Отсутствие на работе" />
            <Tab value="transport" label="Заявки на транспорт" />
            <Tab value="ask-chief" label="Вопросы ГД" />                    
          </Tabs>
        </Box>

        { tab === "visitors" &&
          <VisitorRequestRegistryForm visitors={visitors.getByOwnerId(user.data.id)}                                    
                                      title="Мои заявки на пропуск посетителей"
          />
        }

        { tab === "weekend" &&
          <WorkAbsenseWeekendRegistryForm workAbsenseRegistry={workWeekend.getByOwnerId(user.data.id)}
                                   personById={persons.getById.bind(persons)}                                   
                                   title="Служебные записки на работу в выходной день"
          />
        }
        { tab === "absense" &&
          <WorkAbsenseRegistryForm workAbsenseRegistry={workAbsense.getByOwnerId(user.data.id)}
                                   personById={persons.getById.bind(persons)}                                   
                                   title="Cлужебные записки на отсутствие на рабочем месте"
          />
        }
        { tab === "transport" &&
          <TransportRequestRegistryForm transportRegistry={transport.getByOwnerId(user.data.id)}
                                   personById={persons.getById.bind(persons)}                                   
                                   title="Заявки на транспорт"
          />
        }
        { tab === "ask-chief" &&
          <AskChiefRequestRegistryForm askChiefRequests={askChiefReuestsStore.getByOwnerId(user.data.id)}                                       
          />
        }
         <Footer />  
      </>
      
      )
  }
    
export default observer(MyDocsPage);