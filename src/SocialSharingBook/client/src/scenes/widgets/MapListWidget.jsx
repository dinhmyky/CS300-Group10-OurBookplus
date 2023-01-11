import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp, Delete } from "@mui/icons-material";
import WidgetWrapper from "components/WidgetWrapper";
import { useEffect, useState } from "react";
import FlexBetween from "components/FlexBetween";
import { useDispatch, useSelector } from "react-redux";
import { setPlaceToMeet } from "state";

const MapListWidget = ({ userId }) => {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const token = useSelector((state) => state.token);
  const [places, setPlaces] = useState(null);
  const [showFollowing, setShowFollowing] = useState(false);

  const getPlaces = async () => {
    const response = await fetch(
      `http://localhost:3001/users/${userId}/placeToMeet`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    setPlaces(data);
    dispatch(setPlaceToMeet({ places: data }));
  };

  useEffect(() => {
    getPlaces();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleDelete = async(mapId) => {
    const response = await fetch(
      `http://localhost:3001/places/${mapId}/removePlaceToMeet`, 
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const updatedPost = await response.json();
    dispatch(setPlaceToMeet({ places: updatedPost }));
  };

  if (!places) { return null; }

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography
          color={palette.neutral.dark}
          variant="h5"
          fontWeight="500"
          sx={{ mb: "1.5rem" }}
        >
          {showFollowing
            ? "All Maps"
            : "3 Maps Recently"
          }  
        </Typography>

        <IconButton onClick={() => setShowFollowing(!showFollowing)}>
          {showFollowing
            ? <KeyboardArrowUp />
            : <KeyboardArrowDown />
          }  
        </IconButton>
      </FlexBetween>

      {showFollowing
        ? (
          <Box display="flex" flexDirection="column" gap="1.5rem">
            {places.map((place) => (
              <FlexBetween key={place._id}>
                <Typography>
                  {place.name}
                </Typography>
                <IconButton
                  onClick={() => {
                    handleDelete(place._id);
                  }}
                >
                  <Delete />
                </IconButton>
              </FlexBetween>
            ))}
          </Box>
        )
        : (
          <Box display="flex" flexDirection="column" gap="1.5rem">
            {places.map((place, i) => (i < 3) && (
              <FlexBetween key={place._id}>
                <Typography>
                  {place.name}
                </Typography>
                <IconButton
                  onClick={() => {
                    handleDelete(place._id);
                  }}
                >
                  <Delete />
                </IconButton>
              </FlexBetween>
            ))}
          </Box>
        )
      }
          
      
    </WidgetWrapper>
  );
};

export default MapListWidget;
