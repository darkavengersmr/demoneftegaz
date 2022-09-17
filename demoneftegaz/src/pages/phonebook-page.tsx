import { Box, Tab, Tabs } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import Footer from "../components/footer";
import GlobalMapComponent from "../components/global-map";
import Header from "../components/header";
import PhoneBook from "../components/phonebook";
import persons from "../store/persons";

const PhoneBookPage: React.FC = () => {

    const [tab, setTab] = useState('phonebook');

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
            <Tab value="phonebook" label="Телефонный справочник" />
            <Tab value="map" label="Показать на карте" />                     
          </Tabs>
        </Box>

        {
          tab === 'map' &&
          <Box sx={{maxHeight: 0.95}}>
            <GlobalMapComponent users={persons.getAll()}></GlobalMapComponent>
        </Box>
        }

        {
          tab === 'phonebook' &&
          <PhoneBook personsByFilter={persons.getPersonsByFilter.bind(persons)}
                   personById={persons.getById.bind(persons)}
          />
        }
                
        <Footer />  
      </>
      
      )
  }
    
export default observer(PhoneBookPage);