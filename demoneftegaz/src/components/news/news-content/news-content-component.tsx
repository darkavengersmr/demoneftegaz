import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { INews } from "../../../interfaces/interfaces";

const NewsContentComponent = ({news}: {news: INews}) => {
  return (
    <>
      
      <Card key={news.id} sx={{ boxShadow: 0 }}>
        <CardMedia
          sx={{ borderRadius: 1 }}
          component="img"
          image={news.coverImageUrl}
        >
        </CardMedia>
        <CardContent>
          <Typography variant="h5" component="div">
            {news.title}
          </Typography>
          <Typography component="div" sx={{p: 1, fontSize: "12px", color: "gray"}}>
            {news.date}
          </Typography>
          { /*
            <Typography component="div" sx={{p: 1, fontSize: "16px"}}>
            {news.description}
          </Typography>
          */}          
          <Typography component="div" sx={{p: 1, fontSize: "16px"}}>
            {news.content}
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}
  
export default NewsContentComponent;