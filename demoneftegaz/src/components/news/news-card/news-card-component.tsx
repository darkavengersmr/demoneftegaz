import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { INews } from "../../../interfaces/interfaces";

const NewsCardComponent = ({news, open}: {news: INews, open: {(news: INews): void}}) => {
    return (
      <Card key={news.id} sx={{ display: "flex", flexDirection: "row" }}>
        <CardMedia
          sx={{maxWidth: "50%", p: 1, borderRadius: 3 }}
          component="img"
          image={news.coverImageUrl}
        >
        </CardMedia>
        <CardContent>
          <Typography variant="h5" component="div">
            {news.title}
          </Typography>
          <Typography component="div" sx={{p: 1, fontSize: "12px", color: "gray"}}>
            {news.date.toLocaleString()}
          </Typography>
          <Typography component="div" sx={{p: 1, fontSize: "16px"}}>
            {news.description}
          </Typography>
          <CardActions sx={{width: "100%", display: "flex", justifyContent: "flex-end", px: 3}}>
            <Button size="small" variant="outlined" sx={{ boxShadow: 2 }} onClick={()=>open(news)}>Читать</Button>
          </CardActions>
        </CardContent>
      </Card>
    )
  }
    
  export default NewsCardComponent;