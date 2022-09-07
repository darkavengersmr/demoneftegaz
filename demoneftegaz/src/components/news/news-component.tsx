import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, IconButton, Modal, Typography } from "@mui/material";
import NewsCardComponent from "./news-card";

import News from "../../store/news"
import React from "react";
import { INews } from "../../interfaces/interfaces";
import NewsContentComponent from "./news-content";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
type NewsComponentProps = {
  news: typeof News
  header: string
  forciblyNarrow?: boolean
}

const NewsComponent = ({news, header, forciblyNarrow}: NewsComponentProps) => {
  const [openedNews, setOpenedNews] = React.useState<INews | null>(null);
  const handleOpenNewsModal = (news: INews) => { setOpenedNews(news); };
  const handleCloseNewsModal = () => { setOpenedNews(null); };

  return (
    <>
      <Grid container spacing={2} sx={{p: 1}}>
        {
          news.hasMainNews() &&
          <Grid item xs={12} sx={{h: 1}}>
            <Typography variant="h4" component="div" sx={{px: 2, py: 1}}>
              Главная
            </Typography>
            <Divider></Divider>
          </Grid>
        }
        {
          news.getMainNews().map(mainNews => {
            return (
              <Grid item xs={12} sm={12} md={12} lg={forciblyNarrow ? 12 : 6}>
                <NewsCardComponent 
                  news={mainNews}
                  open={handleOpenNewsModal}
                />
              </Grid>
            )
          })
        }
        <Grid item xs={12} sx={{h: 1}}>
          <Typography variant="h4" component="div" sx={{px: 2, py: 1}}>
            {header}
          </Typography>
          <Divider></Divider>
        </Grid>
        {
          news.getNews().map(mainNews => {
            return (
              <Grid item xs={12} sm={12} md={12} lg={forciblyNarrow ? 12 : 6}>
                <NewsCardComponent 
                  news={mainNews} 
                  open={handleOpenNewsModal}
                />
              </Grid>
            )
          })
        }
      </Grid>
      
      <Modal
        open={!!openedNews}
        onClose={handleCloseNewsModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute' as 'absolute',
          top: 'calc(64px + 12px)',
          left: '50%',
          transform: 'translate(-50%, 0)',
          width: 0.5,
          maxHeight: "calc(100% - 64px - 24px)",
          bgcolor: 'background.paper',
          borderRadius: 1,
          boxShadow: 24,
          p: 3,
          pt: 3,
          overflow: "hidden",
          overflowY: "auto"
        }}>
          <IconButton 
            sx={{
              position: 'absolute',
              right: 32,
              top: 32,
            }}
            onClick={()=>setOpenedNews(null)}
          >
            <HighlightOffIcon sx={{fontSize:"24px", color: "rgba(0,0,0,0.9)"}}/>
          </IconButton>
          { openedNews && <NewsContentComponent news={openedNews}/> }
          <Box 
            sx={{ 
              boxShadow: 2,
              position: "absolute",
              right: 32,
              pb: 2
            }} 
          >
            <Button 
              size="medium" 
              variant="outlined" 
              onClick={handleCloseNewsModal}
            >
              Закрыть
            </Button>
          </Box>
          
        </Box>
      </Modal>
    </>
  )
}
  
export default NewsComponent;