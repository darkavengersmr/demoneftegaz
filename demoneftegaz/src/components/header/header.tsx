import { observer } from "mobx-react-lite"
import { Accordion, AccordionDetails, AccordionSummary, AppBar, Avatar, Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from "react";

import headerBackground from "../../img/logo.png";
import { useNavigate } from "react-router-dom";

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

    const toggleDrawer = (event: boolean) => setMenu(event)

    const navigateAndCloseDrawer = (url: string): void => {
      navigate(url);
      setMenu(false);
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
                <MenuItem onClick={handleClose}>Мой профиль</MenuItem>
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
        <List>
            <ListItem sx={{ m: -2, p: -2 }} onClick={() => navigateAndCloseDrawer("/")}>
                <ListItemButton>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Главная" />
                </ListItemButton>
            </ListItem>
        </List>   
        <List>
            <ListItem sx={{ m: -2, p: -2 }} onClick={() => navigateAndCloseDrawer("/phonebook")}>
                <ListItemButton>
                <ListItemIcon>
                    <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Телефонный справочник" />
                </ListItemButton>
            </ListItem>
        </List>

        <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ m: -2, p: -2 }}
        >
          <List>
            <ListItem sx={{ m: -2, p: -2 }}>
                <ListItemButton>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Профсоюз" />
                </ListItemButton>
            </ListItem>
        </List>
        </AccordionSummary>
        <AccordionDetails sx={{ m: -2, p: -2 }}>
        <List>
            <ListItem sx={{ mt: -2, mb: -2, p: -2 }}>
                <ListItemButton>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Бланки" />
                </ListItemButton>
            </ListItem>
            <ListItem sx={{ mt: -2, mb: -2, p: -2 }}>
                <ListItemButton>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Доска обсуждений" />
                </ListItemButton>
            </ListItem>
            <ListItem sx={{ mt: -2, mb: -2, p: -2 }}>
                <ListItemButton>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Профсоюзные СМИ" />
                </ListItemButton>
            </ListItem>
            <ListItem sx={{ mt: -2, mb: -2, p: -2 }}>
                <ListItemButton>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Календарь Мероприятий" />
                </ListItemButton>
            </ListItem>
            <ListItem sx={{ mt: -2, mb: -2, p: -2 }}>
                <ListItemButton>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Фотоматериалы" />
                </ListItemButton>
            </ListItem>
            <ListItem sx={{ mt: -2, mb: -2, p: -2 }}>
                <ListItemButton>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Список сотрудников ППО" />
                </ListItemButton>
            </ListItem>
            <ListItem sx={{ mt: -2, mb: -2, p: -2 }}>
                <ListItemButton>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Коллективный договор" />
                </ListItemButton>
            </ListItem>
        </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ m: -2, p: -2 }}
        >
          <List>
            <ListItem disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Кадровые вопросы" />
                </ListItemButton>
            </ListItem>
        </List>
        </AccordionSummary>
        <AccordionDetails sx={{ m: -2, p: -2 }}>
          <Typography>
            Lorem ipsum dolor sit amet
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ m: -2, p: -2 }}
        >
          <List>
            <ListItem sx={{ m: -2, p: -2 }}>
                <ListItemButton>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Корпоративные коммуникации" />
                </ListItemButton>
            </ListItem>
        </List>
        </AccordionSummary>
        <AccordionDetails sx={{ m: -2, p: -2 }}>
          <Typography>
            Lorem ipsum dolor
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ m: -2, p: -2 }}
        >
          <List>
            <ListItem sx={{ m: -2, p: -2 }}>
                <ListItemButton>
                <ListItemIcon>
                    <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Подразделения" />
                </ListItemButton>
            </ListItem>
        </List>
        </AccordionSummary>
        <AccordionDetails sx={{ m: -2, p: -2 }}>
          <Typography>
            Lorem ipsum dolor sit amet
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ m: -2, p: -2 }}
        >
          <List>
            <ListItem disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Модули" />
                </ListItemButton>
            </ListItem>
        </List>
        </AccordionSummary>
        <AccordionDetails>
        <List>
            <ListItem sx={{ mt: -2, mb: -2, p: -2 }}>
                <ListItemButton>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Нормативное обеспечение бизнеса" />
                </ListItemButton>
            </ListItem>
            <ListItem sx={{ mt: -2, mb: -2, p: -2 }}>
                <ListItemButton>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Заявка в ЦДС" />
                </ListItemButton>
            </ListItem>
            <ListItem sx={{ mt: -2, mb: -2, p: -2 }}>
                <ListItemButton>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Заявка на пропуск посетителя" />
                </ListItemButton>
            </ListItem>
            <ListItem sx={{ mt: -2, mb: -2, p: -2 }}>
                <ListItemButton>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Служебная записка о выходе сотрудника в выходные дни" />
                </ListItemButton>
            </ListItem>
            <ListItem sx={{ mt: -2, mb: -2, p: -2 }}>
                <ListItemButton>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Служебная записка об отсутствии сотрудника на работе" />
                </ListItemButton>
            </ListItem>
            <ListItem sx={{ mt: -2, mb: -2, p: -2 }}>
                <ListItemButton>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Заявка на транспорт" />
                </ListItemButton>
            </ListItem>
            <ListItem sx={{ mt: -2, mb: -2, p: -2 }}>
                <ListItemButton>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Автоматизированная база рационализаторских предложений" />
                </ListItemButton>
            </ListItem>
            <ListItem sx={{ mt: -2, mb: -2, p: -2 }}>
                <ListItemButton>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Шаблоны документов" />
                </ListItemButton>
            </ListItem>
            <ListItem sx={{ mt: -2, mb: -2, p: -2 }}>
                <ListItemButton>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Стандартные формы договоров" />
                </ListItemButton>
            </ListItem>
            <ListItem sx={{ mt: -2, mb: -2, p: -2 }}>
                <ListItemButton>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Перечень документации на объектах" />
                </ListItemButton>
            </ListItem>
            <ListItem sx={{ mt: -2, mb: -2, p: -2 }}>
                <ListItemButton>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Журналы регистрации нарядов-допусков" />
                </ListItemButton>
            </ListItem>
            <ListItem sx={{ mt: -2, mb: -2, p: -2 }}>
                <ListItemButton>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Матрицы рисков и контрольных процедур (МРиКП)" />
                </ListItemButton>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ m: -2, p: -2 }}
        >
          <List>
            <ListItem sx={{ m: -2, p: -2 }}>
                <ListItemButton>
                <ListItemIcon>
                    <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Рабочие группы" />
                </ListItemButton>
            </ListItem>
        </List>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ m: -2, p: -2 }}
        >
          <List>
            <ListItem sx={{ m: -2, p: -2 }}>
                <ListItemButton>
                <ListItemIcon>
                    <MailIcon />
                </ListItemIcon>
                <ListItemText primary="График совещаний" />
                </ListItemButton>
            </ListItem>
        </List>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ m: -2, p: -2 }}
        >
          <List>
            <ListItem sx={{ m: -2, p: -2 }} onClick={() => navigateAndCloseDrawer("/new")}>
                <ListItemButton>
                <ListItemIcon>
                    <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Тестирование" />
                </ListItemButton>
            </ListItem>
        </List>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Drawer>
    </>
    )
})
  
export default Header;