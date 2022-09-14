import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { IPhotoGallery } from '../../interfaces/interfaces';

type PhotoGalleryProps = {
    itemData: IPhotoGallery[]
}

const PhotoGallery = ({itemData}: PhotoGalleryProps) => {
  return (
    <Box sx={{ width: "100%", height: "90%", overflowY: 'scroll', mb: 4 }}>
      <ImageList variant="masonry" cols={3} gap={2}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.author}
              loading="lazy"
            />
            <ImageListItemBar position="bottom" title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default PhotoGallery;


