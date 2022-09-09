import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { IResourceList } from '../../interfaces/interfaces';
import { Box, Button, Container, Modal, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type ResourceListProps = {
    resourceList: IResourceList[]
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

type ResourceType = {
    title: string
    owner: string | undefined
    description: string
    url: string
    template: string
}

export default function ResourceList({resourceList}: ResourceListProps) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [resource, setResource] = React.useState({} as ResourceType);
    
    const handleInfo = (resource: ResourceType) => {
        setResource(resource)
        handleOpen()
    }

    const navigate = useNavigate()

  return (

    <Container sx={{ mt: "1rem", mb: "2rem", width: "90%" }}>      
      <Typography variant="h5" sx={{ mt: 3, mb: 3}}>Перечень информационных ресурсов Общества</Typography>

    <ImageList sx={{ width: "100%" }} cols={4}>

      {resourceList.map((item) => (        
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248`}
            srcSet={`${item.img}?w=248&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`информация о ${item.title}`}
                onClick={(() => handleInfo({
                    title: item.title, 
                    owner: item.owner,
                    description: item.author,
                    url: item.img,
                    template: ""
                }))}
              >
                <HelpOutlineIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img
            src={`${resource.url}?w=248`}
            srcSet={`${resource.url}?w=248&dpr=2 2x`}
            alt={resource.title}
            width="100%"
            loading="lazy"
          />
          <Typography id="modal-modal-title" variant="h5" component="h2">
            {resource.title}
          </Typography>
          <Typography id="modal-modal-title" variant="body1" component="h2">
            Владелец: {resource.owner}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {resource.description}
          </Typography>
          <Button variant="contained" sx={{ mt: 2, background: '#e24826' }} onClick={()=>navigate('/new')}>Заявка на доступ</Button>          
          <Button variant="contained" sx={{ mt: 2, ml: 2 }} onClick={()=>navigate('/new')}>Перейти к системе</Button>
        </Box>
      </Modal>
    </Container>
  );
}

