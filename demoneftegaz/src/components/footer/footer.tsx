import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import QuizIcon from '@mui/icons-material/Quiz';
import OfflineShareIcon from '@mui/icons-material/OfflineShare';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import { Paper } from '@mui/material';
import { useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation()
  const globalFooter = <Box sx={{ width: "100%", height: "24px", background: "linear-gradient(white, #FFCE07 65%, #F58320 85%)" }} />  
                       
  if (location.pathname === '/') {
    return (
        <>  
        {globalFooter}      
        <Paper sx={{ position: 'fixed', bottom: 0, left: "10%", right: "10%" }} elevation={3}>
            <Box sx={{ width: "95%"}}>
                <BottomNavigation
                    showLabels
                >
                    <BottomNavigationAction label="НОБ" icon={<AssignmentIcon />} />
                    <BottomNavigationAction label="База рацпредложений" icon={<CorporateFareIcon />} />
                    <BottomNavigationAction label="Техэксперт" icon={<DashboardIcon />} />
                    <BottomNavigationAction label="КонсультантПлюс" icon={<QuizIcon />} />
                    <BottomNavigationAction label="Ресурс1" icon={<OfflineShareIcon />} />
                    <BottomNavigationAction label="Ресурс2" icon={<PhonelinkIcon />} />
                    <BottomNavigationAction label="Ресурс3" icon={<LocationOnIcon />} />
                    <BottomNavigationAction label="Мониторинг добычи" icon={<LocalGasStationIcon />} />
                </BottomNavigation>
            </Box>
        </Paper>    
        </>
      )
  } else {
    return (
        <>
            {globalFooter}                           
        </>        
    )
  }
  
}