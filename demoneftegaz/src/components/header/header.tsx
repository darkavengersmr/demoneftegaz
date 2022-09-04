import { observer } from "mobx-react-lite"
import { Accordion, AccordionDetails, AccordionSummary, AppBar, Avatar, Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, SxProps, Toolbar, Tooltip, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

    const toggleDrawer = (event: boolean) => setMenu(event)

    const navigateAndCloseDrawer = (url: string): void => {
      navigate(url);
      setMenu(false);
    }

    const addMenuItem = (title: string, url: string, sx: SxProps, color: string = "") => {
      let navigate = () => {}
      if (url.length > 0) {
        navigate = () => navigateAndCloseDrawer(url)
      } 
      return (
        <ListItem sx={sx} onClick={navigate}>
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Портал Демонефтегаз
          </Typography>

            <div>
            <Typography component="span" variant="body1">
            {`${user.getSurnameNP()} `}
            </Typography>            
              <Tooltip title="Профиль">              
              <IconButton onClick={handleMenu} sx={{ p: 0 }}>
                <Avatar alt={user.getSurnameNP()} src={user.getPhotoUrl()} />
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
        width: 400
      }
    }}
    >
        <List>{addMenuItem("Главная", "/", { m: -2, p: -2 })}</List>

        <Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ m: -2, p: -2 }}
        >
          <List>{addMenuItem("Телефонный справочник", "", { m: -2, p: -2 })}</List>
        </AccordionSummary>
        <AccordionDetails sx={{ m: -2, p: -2 }}>
          <List>
            {addMenuItem("Сотрудники", "/phonebook", { mt: -2, mb: -2, p: -2 })}
            {addMenuItem("Официальные ящики", "/official-emails", { mt: -2, mb: -2, p: -2 })}            
          </List>  
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ m: -2, p: -2 }}
        >
          <List>{addMenuItem("Подразделения", "", { m: -2, p: -2 })}</List>
        </AccordionSummary>
        <AccordionDetails sx={{ m: -2, p: -2 }}>

          <Accordion>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ m: -2, p: -2 }}
            >
              <List>{addMenuItem("АХУ", "", { m: -2, ml: 0, p: -2 }, "#BBBBBB")}</List>
            </AccordionSummary>
            <AccordionDetails sx={{ m: -2, p: -2 }}>
                {addMenuItem("Новости АХУ", "/new", { mt: -2, ml: 2, p: -2 }, "#BBBBBB")}
                {addMenuItem("Опрос работников", "/new", { mt: -2, ml: 2, p: -2 }, "#BBBBBB")}
                {addMenuItem("Столовая", "/new", { mt: -2, ml: 2, p: -2 }, "#BBBBBB")}                
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ m: -2, p: -2 }}
            >
              <List>{addMenuItem("Бюро пропусков", "", { m: -2, ml: 0, p: -2 })}</List>
            </AccordionSummary>
            <AccordionDetails sx={{ m: -2, p: -2 }}>
                {addMenuItem("Перечень заявок на пропуск посетителя", "/visitors-registry", { mt: -2, ml: 2, p: -2 }, "")}
                {addMenuItem("Служебные записки о выходе сотрудника в выходные дни", "/new", { mt: -2, ml: 2, p: -2 }, "#BBBBBB")}
                {addMenuItem("Служебные записки об отсутствии работника на работе", "/new", { mt: -2, ml: 2, p: -2 }, "#BBBBBB")}                
            </AccordionDetails>
          </Accordion>

        </AccordionDetails>
      </Accordion>

      <List>{addMenuItem("Модули", "", { m: -2, p: -2 })}</List>
      <List>
            {addMenuItem("Нормативное обеспечение бизнеса", "/new", { mt: -2, mb: -2, p: -2 }, "#BBBBBB")}
            {addMenuItem("Заявка в ЦДС", "/new", { mt: -2, mb: -2, p: -2 }, "#BBBBBB")}
            {addMenuItem("Заявка на пропуск посетителя", "/visitors", { mt: -2, mb: -2, p: -2 })}
            {addMenuItem("Служебная записка о выходе сотрудника в выходные дни", "/new", { mt: -2, mb: -2, p: -2 }, "#BBBBBB")}
            {addMenuItem("Служебная записка об отсутствии сотрудника на работе", "/new", { mt: -2, mb: -2, p: -2 }, "#BBBBBB")}
            {addMenuItem("Заявка на транспорт", "/new", { mt: -2, mb: -2, p: -2 }, "#BBBBBB")}
            {addMenuItem("Автоматизированная база рационализаторских предложений", "/new", { mt: -2, mb: -2, p: -2 }, "#BBBBBB")}
            {addMenuItem("Шаблоны документов", "/new", { mt: -2, mb: -2, p: -2 }, "#BBBBBB")}
            {addMenuItem("Стандартные формы договоров", "/new", { mt: -2, mb: -2, p: -2 }, "#BBBBBB")}
            {addMenuItem("Перечень документации на объектах", "/new", { mt: -2, mb: -2, p: -2 }, "#BBBBBB")}
            {addMenuItem("Журналы регистрации нарядов-допусков", "/new", { mt: -2, mb: -2, p: -2 }, "#BBBBBB")}
            {addMenuItem("Матрицы рисков и контрольных процедур (МРиКП)", "/new", { mt: -2, mb: -2, p: -2 }, "#BBBBBB")}            
      </List>

      <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ m: -2, p: -2 }}
        >
          <List>{addMenuItem("Профсоюз", "", { m: -2, p: -2 }, "#BBBBBB")}</List>
        </AccordionSummary>
        <AccordionDetails sx={{ m: -2, p: -2 }}>
        <List>
            {addMenuItem("Бланки", "/new", { mt: -2, mb: -2, p: -2 }, "#BBBBBB")}
            {addMenuItem("Доска обсуждений", "/new", { mt: -2, mb: -2, p: -2 }, "#BBBBBB")}
            {addMenuItem("Профсоюзные СМИ", "/new", { mt: -2, mb: -2, p: -2 }, "#BBBBBB")}
            {addMenuItem("Календарь Мероприятий", "/new", { mt: -2, mb: -2, p: -2 }, "#BBBBBB")}
            {addMenuItem("Фотоматериалы", "/new", { mt: -2, mb: -2, p: -2 }, "#BBBBBB")}
            {addMenuItem("Список сотрудников ППО", "/new", { mt: -2, mb: -2, p: -2 }, "#BBBBBB")}
            {addMenuItem("Коллективный договор", "/new", { mt: -2, mb: -2, p: -2 }, "#BBBBBB")}
        </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ m: -2, p: -2 }}
        >
          <List>{addMenuItem("Кадровые вопросы", "", { m: -2, p: -2 }, "#BBBBBB")}</List>
        </AccordionSummary>
        <AccordionDetails sx={{ m: -2, p: -2 }}>
        <List>
            {addMenuItem("Контакты", "/new", { mt: -2, mb: -2, p: -2 }, "#BBBBBB")}
            {addMenuItem("Подбор на вакансии", "/new", { mt: -2, mb: -2, p: -2 }, "#BBBBBB")}
            {addMenuItem("Кадровый резерв", "/new", { mt: -2, mb: -2, p: -2 }, "#BBBBBB")}
            {addMenuItem("Информация по отсутствующим руководителям", "/new", { mt: -2, mb: -2, p: -2 }, "#BBBBBB")}
            {addMenuItem("Охрана здоровья", "/new", { mt: -2, mb: -2, p: -2 }, "#BBBBBB")}
            {addMenuItem("Социальные программы", "/new", { mt: -2, mb: -2, p: -2 }, "#BBBBBB")}
            {addMenuItem("Расчет с персоналом по оплате труда", "/new", { mt: -2, mb: -2, p: -2 }, "#BBBBBB")}
        </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ m: -2, p: -2 }}
        >
          <List>{addMenuItem("Корпоративные коммуникации", "", { m: -2, p: -2 }, "#BBBBBB")}</List>
        </AccordionSummary>
        <AccordionDetails sx={{ m: -2, p: -2 }}>
            {addMenuItem("Новости", "/new", { mt: -2, mb: -2, p: -2 }, "#BBBBBB")}
            {addMenuItem("Корпоративная культура", "/new", { mt: -2, mb: -2, p: -2 }, "#BBBBBB")}
            {addMenuItem("Корпоративные СМИ", "/new", { mt: -2, mb: -2, p: -2 }, "#BBBBBB")}
            {addMenuItem("Внутренние коммуникации", "/new", { mt: -2, mb: -2, p: -2 }, "#BBBBBB")}
            {addMenuItem("Корпоративные мероприятия", "/new", { mt: -2, mb: -2, p: -2 }, "#BBBBBB")}
            {addMenuItem("Линейка продуктов корпоративного Банка", "/new", { mt: -2, mb: -2, p: -2 }, "#BBBBBB")}
            {addMenuItem("Опросы", "/new", { mt: -2, mb: -2, p: -2 }, "#BBBBBB")}
        </AccordionDetails>
      </Accordion>
      
      <List>
        {addMenuItem("Рабочие группы", "/new", { m: -2, p: -2 }, "#BBBBBB")}
        {addMenuItem("График совещаний", "/new", { m: -2, p: -2 }, "#BBBBBB")}
        {addMenuItem("Тестирование", "/new", { m: -2, p: -2 }, "#BBBBBB")}
      </List>
     
    </Drawer>    

    {system.getNotification()}
    </>
    )
})
  
export default Header;