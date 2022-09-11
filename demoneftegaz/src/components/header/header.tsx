import { observer } from "mobx-react-lite"
import { Accordion, AccordionDetails, AccordionSummary, AppBar, Avatar, Badge, Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, SpeedDial, SpeedDialAction, SpeedDialIcon, SxProps, Toolbar, Tooltip, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import WeekendIcon from '@mui/icons-material/Weekend';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SosIcon from '@mui/icons-material/Sos';

import headerBackground from "../../img/logo.png";
import system from "../../store/system"
import user from "../../store/user";

const Header: React.FC = observer(() => {
    const [menu, setMenu] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const navigate = useNavigate();

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleToProfile = () => {      
      navigate(`/userinfo/${user.data.id}`)
      setAnchorEl(null);
    }

    const handleToMyDocs = () => {      
      navigate(`/my-docs`)
      setAnchorEl(null);
    }

    const toggleDrawer = (event: boolean) => setMenu(event)

    const navigateAndCloseDrawer = (url: string): void => {
      navigate(url);
      setMenu(false);
    }

    const actions = [
      { icon: <PeopleOutlineIcon onClick={() => navigate('/work-absense')} />, name: 'Отпроситься' },
      { icon: <WeekendIcon onClick={() => navigate('/work-weekend')} />, name: 'Поработать в выходные' },
      { icon: <DirectionsCarIcon onClick={() => navigate('/transport')} />, name: 'Подать заявку на транспорт' },
      { icon: <SosIcon onClick={() => navigate('/cds')} />, name: 'Подать заявку в ЕДС' },
      { icon: <AddAPhotoIcon onClick={() => navigate('/new')} />, name: 'Предложить новость' },  
    ];

    const addMenuItem = (title: string, url: string, sx: SxProps, color: string = "") => {
      let navigate = () => {}
      if (url.length > 0) {
        navigate = () => navigateAndCloseDrawer(url)
      } 
      return (
        <ListItem sx={{width: 1, ...sx}} onClick={navigate}>
          <ListItemButton>
          <ListItemIcon>
              {url.length === 0 ? <MenuIcon /> : <InboxIcon />}              
          </ListItemIcon>
          <ListItemText primary={title} sx={{ color: {color}}} />
          </ListItemButton>
      </ListItem>
      )
      
    }

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar style={{ backgroundImage: `url(${headerBackground})`, 
                          backgroundSize: "auto 100%", 
                          backgroundRepeat: "no-repeat", 
                          backgroundPosition: "center right", 
                        }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: "pointer"}} onClick={() => navigate('/')}>            
              Портал АО "Демонефтегаз"
            </Typography>


            <div>
            <Typography component="span" variant="body1">
            {`${user.getSurnameNP()} `}
            </Typography>            
              <Tooltip title="Профиль">              
              <IconButton onClick={handleMenu} sx={{ p: 0 }}>
                <Badge badgeContent={0}>
                  <Avatar alt={user.getSurnameNP()} src={user.getPhotoUrl()} />
                </Badge>
              </IconButton>
              </Tooltip>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleToProfile}>Мой профиль</MenuItem>
                <MenuItem onClick={handleToMyDocs}>Мои документы</MenuItem>
                <MenuItem onClick={handleClose}>Настройки</MenuItem>
              </Menu>
            </div>

        </Toolbar>
      </AppBar>
    </Box>

    <Drawer
    anchor="left"
    open={menu}
    onClose={() => toggleDrawer(false)}
    PaperProps={{
      sx: {
        width: 450
      }
    }}
    >   

      <List sx={{mt: 1}}>{addMenuItem("Главная", "/", { m: -2, p: -2 })}</List>

      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary 
          sx={{ mx: -2, height: "60px"}}             
        >
          <List sx={{width: 1}}>{addMenuItem("Телефонный справочник", "", { m: -2, p: -2 })}</List>
        </AccordionSummary>
        <AccordionDetails sx={{p: 0}}>
          <List>
            {addMenuItem("Сотрудники", "/phonebook", { mt: -2, mb: -2, p: -2 })}            
            {addMenuItem("Официальные ящики", "/official-emails", { mt: -2, mb: -2, p: -2 })}                                    
          </List>  
        </AccordionDetails>
      </Accordion>

      <List>{addMenuItem(`История АО "Демонефтегаз"`, "/org-history", { m: -2, p: -2 })}</List>
      <List>{addMenuItem("Организационная структура", "/org-structure", { m: -2, p: -2 })}</List>
      <List>{addMenuItem("Перечень информационных ресурсов Общества", "/resource-list", { m: -2, p: -2 })}</List>

      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          sx={{ m: -2, p: -2 }}
        >
          <List>{addMenuItem("Профсоюз", "", { m: -2, p: -2 })}</List>
        </AccordionSummary>
        <AccordionDetails sx={{ m: -2, p: -2 }}>
        <List>
        
            {addMenuItem("Новости", "/news-profsouz", { mt: -2, mb: -2, p: -2 })}
            {addMenuItem("Бланки", "/fs-profsouz-templates", { mt: -2, mb: -2, p: -2 })}
            {addMenuItem("Еще...", "/new", { mt: -2, mb: -2, p: -2 }, "#BBBBBB")}
        </List>
        </AccordionDetails>
      </Accordion>

      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          sx={{ mx: -2, height: "60px"}}             
        >
          <List sx={{width: 1}}>{addMenuItem("Корпоративные коммуникации", "", { m: -2, p: -2 })}</List>
        </AccordionSummary>
        <AccordionDetails sx={{p: 0}}>
            {addMenuItem("Новости", "/news", { mt: -2, mb: -2, p: -2 })}
            {addMenuItem("Доска почета", "/hall-of-fame", { mt: -2, mb: -2, p: -2 })}
            {addMenuItem("Новому сотруднику", "/fs-new-employee", { mt: -2, mb: -2, p: -2 })}  
            {addMenuItem("Молодому специалисту", "/fs-young-specialist", { mt: -2, mb: -2, p: -2 })}                       
            {addMenuItem("Еще...", "/new", { mt: -2, mb: -2, p: -2 }, "#BBBBBB")}                       
        </AccordionDetails>
      </Accordion>

      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          sx={{ m: -2, height: "60px" }}
        >
          <List sx={{width: 1}}>{addMenuItem("Кадровые вопросы", "", { m: -2, p: -2 })}</List>
        </AccordionSummary>
        <AccordionDetails sx={{p: 0}}>
        <List>
        
            {addMenuItem("Контакты", "/personal-contacts", { mt: -2, mb: -2, p: -2 })}
            {addMenuItem("Еще...", "/new", { mt: -2, mb: -2, p: -2 }, "#BBBBBB")}
        </List>
        </AccordionDetails>
      </Accordion>


      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          sx={{ mx: -2, height: "60px"}}             
        >
          <List sx={{width: 1}}>{addMenuItem("Подразделения", "", { m: -2, p: -2})}</List>
        </AccordionSummary>
        <AccordionDetails sx={{ m: -2, p: -2 }}>

          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary
              sx={{ mx: -2, height: "60px"}}             
            >
              <List sx={{width: 1}}>{addMenuItem("АХУ", "", { m: -2, ml: 0, p: -2 })}</List>
            </AccordionSummary>
            <AccordionDetails sx={{ m: -2, p: -2 }}>
                {addMenuItem("Новости АХУ", "/news-ahu", { mt: -2, ml: 2, p: -2 })}                
                {addMenuItem("Столовая", "/fs-food", { mt: -2, ml: 2, p: -2 })}
                {addMenuItem("Еще...", "/new", { mt: -2, mb: -2, p: -2 }, "#BBBBBB")}                   
            </AccordionDetails>
          </Accordion>

          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary
              sx={{ mx: -2, height: "60px"}}             
            >
              <List sx={{width: 1}}>{addMenuItem("Бюро пропусков", "", { m: -2, ml: 0, p: -2})}</List>
            </AccordionSummary>
            <AccordionDetails sx={{ m: -2, p: -2 }}>
                {addMenuItem("Перечень заявок на пропуск посетителя", "/visitors-registry", { mt: -2, ml: 2, p: -2 }, "")}
                {addMenuItem("Служебные записки о выходе сотрудника в выходные дни", "/work-weekend-registry", { mt: -2, ml: 2, p: -2 })}
                {addMenuItem("Служебные записки об отсутствии работника на работе", "/work-absense-registry", { mt: -2, ml: 2, p: -2 })}                
            </AccordionDetails>
          </Accordion>

          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary
              sx={{ mx: -2, height: "60px"}}             
            >
              <List sx={{width: 1}}>{addMenuItem("Приемная ГД", "", { m: -2, ml: 0, p: -2 })}</List>
            </AccordionSummary>
            <AccordionDetails sx={{ m: -2, p: -2 }}>
                {addMenuItem("Вопросы Генеральному Директору", "/ask-chief-registry", { mt: -2, ml: 2, p: -2 }, "")}                
            </AccordionDetails>
          </Accordion>

          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary
              sx={{ mx: -2, height: "60px"}}             
            >
              <List sx={{width: 1}}>{addMenuItem("Транспортное управление", "", { m: -2, ml: 0, p: -2 })}</List>
            </AccordionSummary>
            <AccordionDetails sx={{ m: -2, p: -2 }}>
                {addMenuItem("Реестр заявок на транспорт", "/transport-registry", { mt: -2, ml: 2, p: -2 })}
                {addMenuItem("Заявки на организацию массовых поездок", "/new", { mt: -2, ml: 2, p: -2 }, "#BBBBBB")}                
                {addMenuItem("Согласование заявок на транспорт", "/new", { mt: -2, ml: 2, p: -2 }, "#BBBBBB")}                
                {addMenuItem("Справочник мест подачи автомобиля", "/new", { mt: -2, ml: 2, p: -2 }, "#BBBBBB")}
            </AccordionDetails>
          </Accordion>

        </AccordionDetails>
      </Accordion>

      <List>{addMenuItem("Модули", "", { m: -2, p: -2 })}</List>
      <List>
            {addMenuItem("Заявка в ЕДС", "/cds", { mt: -2, mb: -2, p: -2 })}
            {addMenuItem("Заявка на пропуск посетителя", "/visitors", { mt: -2, mb: -2, p: -2 })}
            {addMenuItem("Служебная записка о выходе сотрудника в выходные дни", "/work-weekend", { mt: -2, mb: -2, p: -2 })}
            {addMenuItem("Служебная записка об отсутствии сотрудника на работе", "/work-absense", { mt: -2, mb: -2, p: -2 })}
            {addMenuItem("Заявка на транспорт", "/transport", { mt: -2, mb: -2, p: -2 })}
            {addMenuItem("Задать вопрос ГД", "/ask-chief", { mt: -2, mb: -2, p: -2 })}
            
            <Accordion TransitionProps={{ unmountOnExit: true }}>
              <AccordionSummary
                sx={{ m: -2, p: -2 }}
              >
                <List>{addMenuItem("Журналы регистрации нарядов-допусков", "", { m: -2, ml: 0, p: -2 })}</List>
              </AccordionSummary>
              <AccordionDetails sx={{ m: -2, p: -2 }}>
                  {addMenuItem("Газоопасные работы", "/work-permit-go", { mt: -2, ml: 2, p: -2 })}
                  {addMenuItem("Работа на высоте", "/work-permit-vs", { mt: -2, ml: 2, p: -2 })}
                  {addMenuItem("Работы повышенной опасности", "/work-permit-po", { mt: -2, ml: 2, p: -2 })}                
                  {addMenuItem("Огневые работы", "/work-permit-og", { mt: -2, ml: 2, p: -2 })}
              </AccordionDetails>
            </Accordion>
            
            {addMenuItem("Шаблоны документов", "/fs-docs-templates", { mt: -2, mb: -2, p: -2 })}
            {addMenuItem("Стандартные формы договоров", "/fs-contract-templates", { mt: -2, mb: -2, p: -2 })}                     
            {addMenuItem("Матрицы рисков и контрольных процедур", "/fs-risk-matrix", { mt: -2, mb: -2, p: -2 })}            
      </List>
      
      

    </Drawer>    

    <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 32, right: 32 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>

    {system.getNotification()}
    </>
    )
})
  
export default Header;