import { Avatar, Box } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useRef } from "react";
import { IMapClass, IPerson } from "../../interfaces/interfaces";

interface MapComponentProps {
  user: IPerson
  maps: IMapClass
  setLocation: {
    (location: {
      x: number, 
      y: number
    }): void
  }
}

const ProfileMapComponent = ({user, setLocation, maps}: MapComponentProps) => {
  const map = useRef(null);
  const avatarSize: number = 30

  function relativeCoords(event: any) {
    var bounds = event.target.getBoundingClientRect();
    setLocation({
      x: (event.clientX - bounds.left - (avatarSize/2))/bounds.width,
      y: (event.clientY - bounds.top - (avatarSize/2))/bounds.height
    })
  }

  return (
    <>
      <Box ref={map}
        component="div"
        sx={{position: 'relative'}}
      >
        <Box
          component="img"
          sx={{
            maxWidth: 1
          }}
          src={maps.getById(user.map)?.map}
          onClick={relativeCoords}
        >
        </Box>
        {
          user.location &&
          <Avatar
            sx={{
              position: 'absolute',
              top: `${user.location.y*100}%`,
              left: `${user.location.x*100}%`,
              zIndex: 100,
              height: avatarSize,
              width: avatarSize
            }}
            src={user?.photo ? user.photo.slice(4, -1) : ""}
          >
          </Avatar>
        }
      </Box>
    </>
    )
}
  
export default observer(ProfileMapComponent);