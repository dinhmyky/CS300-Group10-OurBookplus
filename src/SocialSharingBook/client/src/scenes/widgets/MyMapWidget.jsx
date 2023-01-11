import {
  Map,
  IosShareOutlined,
  LocationOn,
} from "@mui/icons-material";
import {
  Divider,
  Typography,
  InputBase,
  useTheme,
} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GoogleMapReact from 'google-map-react';
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { setPlaceToMeet } from "state";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MyMapWidget = () => {
  const dispatch = useDispatch();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const [post, setPost] = useState("");
  const { palette } = useTheme();
  const mediumMain = palette.neutral.mediumMain;
  const medium = palette.neutral.medium;
  const [coordsMap, setCoordsMap] = useState({lat: 10.7602897, lng: 106.6693621});

  const handleCheck = async () => {
    const result = await geocodeByAddress(post);
    const latLng = await getLatLng(result[0]);
    setCoordsMap(latLng);
  }

  const handleaddPlaceToMeet = async() => {
    const formData = new FormData();
    formData.append("userId", _id);
    formData.append("name", post);
    formData.append("lat", coordsMap.lat);
    formData.append("lng", coordsMap.lng);
    
    const response = await fetch(
      `http://localhost:3001/places`, 
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      }
    );
    const placeToMeet = await response.json();
    dispatch(setPlaceToMeet({ places: placeToMeet }));
    setPost("");
  };

  return (
    <WidgetWrapper>
      <FlexBetween gap="1.5rem">
        <InputBase
          placeholder="What's your address"
          onChange={(e) => setPost(e.target.value)}
          value={post}
          sx={{
            width: "100%",
            backgroundColor: palette.neutral.light,
            borderRadius: "2rem",
            padding: "1rem 2rem",
          }}
        />
      </FlexBetween>

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

      <FlexBetween>
        <FlexBetween 
          paddingLeft="5rem"
          gap="0.25rem" 
          onClick={() => {
            handleCheck();
          }}
        >
          <Map sx={{ color: mediumMain }} />
          <Typography
            color={mediumMain}
            sx={{ "&:hover": { cursor: "pointer", color: medium } }}
          >
            Check
          </Typography>
        </FlexBetween>
        <FlexBetween>|</FlexBetween>
        <FlexBetween 
          paddingRight="5rem"
          gap="0.25rem" 
          onClick={() => {
            handleaddPlaceToMeet();
          }}
        >
          <IosShareOutlined sx={{ color: mediumMain }} />
          <Typography
            color={mediumMain}
            sx={{ "&:hover": { cursor: "pointer", color: medium } }}
          >
            POST
          </Typography>
        </FlexBetween>
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default MyMapWidget;
