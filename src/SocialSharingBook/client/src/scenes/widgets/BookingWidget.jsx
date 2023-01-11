import { 
  Divider, 
  Typography, 
  useTheme,
  IconButton,
  Box,
  InputBase,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import WidgetWrapper from "components/WidgetWrapper";
import { useEffect, useState } from "react";
import { 
  Visibility,
  LocationOn,
  Send,
} from "@mui/icons-material";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker  } from '@mui/x-date-pickers/DatePicker';
import FlexBetween from "components/FlexBetween";
import { useDispatch, useSelector } from "react-redux";
import GoogleMapReact from 'google-map-react';
import { setBooks } from "state";
import { useNavigate } from "react-router-dom";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const BookingWidget = ({ 
  postUserId, 
  postId,
  ownerPicturePath,
  customerPicturePath,
  postPicturePath,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState(dayjs());
  const { palette } = useTheme();
  const token = useSelector((state) => state.token);
  const { _id } = useSelector((state) => state.user);
  const [places, setPlaces] = useState(null);
  const [coordsMap, setCoordsMap] = useState({lat: 10.7602897, lng: 106.6693621});
  const [mapSelection, setMapSelection] = useState("");
  const [timeSelection, setTimeSelection] = useState("");
  const [post, setPost] = useState("");
  const [phoneContact, setPhoneContact] = useState("");
  const [goodPost, setGoodPost] = useState(false);
  const [failPost, setFailPost] = useState(false);

  const getPlaces = async () => {
    const response = await fetch(
      `http://localhost:3001/users/${postUserId}/placeToMeet`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    setPlaces(data);
  };

  useEffect(() => {
    getPlaces();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handlePost = async () => {
    if (mapSelection && timeSelection && phoneContact) {
      const formData = new FormData();
      formData.append("ownerId", postUserId);
      formData.append("ownerPicturePath", ownerPicturePath);
      formData.append("customerId", _id);
      formData.append("customerPicturePath", customerPicturePath);
      formData.append("postId", postId);
      formData.append("postPicturePath", postPicturePath);
      formData.append("placeToMeet", mapSelection);
      formData.append("timeToMeet", timeSelection);
      formData.append("phoneContact", phoneContact);

      const response = await fetch(
        `http://localhost:3001/books`, 
        {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          body: formData,
        }
      );
      const data = await response.json();
      dispatch(setBooks({ books: data }));

      setPhoneContact("");
      setTimeSelection("");
      setMapSelection("");
      setGoodPost(true);
    } else {
      setFailPost(true);
    }
  }

  return (
    <WidgetWrapper>

      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="700"
        fontSize="30px"
        sx={{ mb: "1.5rem" }}
      >
        Booking Form
      </Typography>
      <Box>
        <FlexBetween>
          <Typography color={palette.neutral.dark} variant="h5" fontWeight="400"> Phone Contact </Typography>
          <Typography color={palette.neutral.dark} variant="h5" fontWeight="400"> {phoneContact} </Typography>
        </FlexBetween>
      </Box>
      <Box>
        <FlexBetween>
          <Typography color={palette.neutral.dark} variant="h5" fontWeight="400"> Time Selection </Typography>
          <Typography color={palette.neutral.dark} variant="h5" fontWeight="400"> {timeSelection} </Typography>
        </FlexBetween>
      </Box>
      <Box>
        <FlexBetween>
          <Typography color={palette.neutral.dark} variant="h5" fontWeight="400"> Map Selection </Typography>
          <Typography color={palette.neutral.dark} variant="h5" fontWeight="400"> {mapSelection} </Typography>
        </FlexBetween>
      </Box>

      <Divider sx={{ margin: "1.25rem 0" }}/>

      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Phone Contact
      </Typography>
      <Box>
        <FlexBetween gap="1.5rem">
          <InputBase
            placeholder="What's your phone"
            onChange={(e) => setPost(e.target.value)}
            value={post}
            sx={{
              width: "40%",
              backgroundColor: palette.neutral.light,
              borderRadius: "2rem",
              padding: "1rem 2rem",
            }}
          />
          <IconButton onClick={() => {
            setPhoneContact(post);
            setPost("");
          }}>
            <Send />
          </IconButton>
        </FlexBetween>
      </Box>
      
      <Divider sx={{ margin: "1.25rem 0" }}/>

      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Time Selection
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <FlexBetween>
          <DatePicker
            renderInput={(props) => <TextField {...props} />} 
            label="DateTimePicker"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
          />
          <IconButton onClick={() => {
            setTimeSelection(value.toString().slice(0, 16));
            setValue(dayjs());
          }}>
            <Send />
          </IconButton>
        </FlexBetween>
      </LocalizationProvider>

      <Divider sx={{ margin: "1.25rem 0" }}/>
      
      <FlexBetween>
        <Typography
          color={palette.neutral.dark}
          variant="h5"
          fontWeight="500"
          sx={{ mb: "1.5rem" }}
        >
          Map Selection
        </Typography>
      </FlexBetween>
      
      {places && (
        <Box display="flex" flexDirection="column" gap="1.5rem">
          {places.map((place) => (
            <FlexBetween key={place._id}>
              <Typography
                color={palette.neutral.dark}
                variant="h5"
                fontWeight="400"
              >
                {place.name}
              </Typography>
              <IconButton
                onClick={() => { 
                  setCoordsMap({
                    lat: place.latitude,
                    lng: place.longtitude,
                  });
                  setMapSelection(place.name)
                }}
              >
                <Visibility />
              </IconButton>
            </FlexBetween>
          ))}
        </Box>
      )}

      <Divider sx={{ margin: "1.25rem 0" }} />

      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDTUqB4dhJGywE1ZvDf0fOCVKqDuRfadGM" }}
          center={coordsMap}
          zoom={16}
        >
          <AnyReactComponent
            lat={coordsMap?.lat}
            lng={coordsMap?.lng}
            text={<LocationOn />}
          />
        </GoogleMapReact>
      </div>

      <Divider sx={{ margin: "1.25rem 0" }} />
      
      
      <Box>
        <FlexBetween  
          onClick={handlePost}
        >
          <Typography 
            fontSize="20px"
            fontWeight="700"
            color="primary"
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Confirm Booking
          </Typography>
        </FlexBetween>
      </Box>

      <Dialog 
        open={goodPost}
        onClose={() => {
          setGoodPost(false);
          navigate("/home");
        }}
      >
        <DialogTitle>Submit the Post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You have submited successfully!
          </DialogContentText>
        </DialogContent> 
        <DialogActions>
          <Button 
            onClick={() => {
              setGoodPost(false)
              navigate("/home");
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>   

      <Dialog 
        open={failPost}
        onClose={() => setFailPost(false)}
      >
        <DialogTitle>Submit the Post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You have to fulfil the form!
          </DialogContentText>
        </DialogContent> 
        <DialogActions>
          <Button 
            onClick={() => setFailPost(false)}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>   
    </WidgetWrapper>
  );
};

export default BookingWidget;

//{value.toString().slice(0, 16)}