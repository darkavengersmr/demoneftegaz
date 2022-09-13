import Footer from "../components/footer";
import Header from "../components/header";
import PhotoGallery from "../components/photo-gallery/photo-gallery";
import { initialPhotoGallery } from "../store/mock-data/photo-gallery";

const PhotoGalleryPage: React.FC = () => {
    return (
      <>
        <Header />
        <PhotoGallery itemData={initialPhotoGallery}
        />
        <Footer />  
      </>
      
      )
  }
    
export default PhotoGalleryPage;