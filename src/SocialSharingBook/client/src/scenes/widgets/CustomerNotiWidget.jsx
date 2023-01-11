import { Typography, Box, useTheme, Divider } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import UserImage from "components/UserImage";
import WidgetWrapper from "components/WidgetWrapper";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CustomerNotiWidget = ({ userId }) => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const [customerBookings, setCustomerBooking] = useState(null);
  const { palette } = useTheme();
  const dark = palette.neutral.dark;

  const getCustomerBooking = async () => {
    const response = await fetch(
      `http://localhost:3001/books/${userId}/findOwner`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    setCustomerBooking(data);
  };

  useEffect(() => {
    getCustomerBooking();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography 
          fontSize="30px"
          fontWeight="700"
          color="primary"
        >
          My Booking
        </Typography>
      </FlexBetween>
      <Divider sx={{ margin: "1.25rem 0" }}/>
    {customerBookings
      ? (
        customerBookings.map((customerBooking) => (
          <Box key={customerBooking._id}>
            <FlexBetween
              gap="0.5rem"
              pb="1.1rem"
            >
              <FlexBetween 
                gap="1rem" 
                onClick={() => navigate(`/profile/${customerBooking.ownerId}`)}
              >
                <Box>
                  <Typography
                    variant="h4"
                    color={dark}
                    fontWeight="500"
                    sx={{
                      "&:hover": {
                        color: palette.primary.light,
                        cursor: "pointer",
                      },
                    }}
                  >
                    Customer
                  </Typography>
                </Box>
                <UserImage image={customerBooking.ownerPicturePath} />
                
              </FlexBetween>

              <FlexBetween 
                gap="1rem"
                onClick={() => navigate(`/posts/${customerBooking.postId}`)}
              >
                <Box>
                  <Typography
                    variant="h4"
                    color={dark}
                    fontWeight="500"
                    sx={{
                      "&:hover": {
                        color: palette.primary.light,
                        cursor: "pointer",
                      },
                    }}
                  >
                    Post
                  </Typography>
                </Box>
                <UserImage image={customerBooking.postPicturePath} />
                
              </FlexBetween>
            </FlexBetween>
            <Box>
              <FlexBetween>
                <Typography color={palette.neutral.dark} variant="h5" fontWeight="400"> Phone Contact </Typography>
                <Typography color={palette.neutral.dark} variant="h5" fontWeight="400"> {customerBooking.phoneContact} </Typography>
              </FlexBetween>
            </Box>
            <Box>
              <FlexBetween>
                <Typography color={palette.neutral.dark} variant="h5" fontWeight="400"> Time Selection </Typography>
                <Typography color={palette.neutral.dark} variant="h5" fontWeight="400"> {customerBooking.timeToMeet} </Typography>
              </FlexBetween>
            </Box>
            <Box>
              <FlexBetween>
                <Typography color={palette.neutral.dark} variant="h5" fontWeight="400"> Map Selection </Typography>
                <Typography color={palette.neutral.dark} variant="h5" fontWeight="400"> {customerBooking.placeToMeet} </Typography>
              </FlexBetween>
            </Box>
            <Divider sx={{ margin: "1.25rem 0" }}/>
          </Box>
          
        ))
      )
      : (
        <Typography>
          No one hasn't booked your book yet.
        </Typography>
      )
    }
    </WidgetWrapper>
  );
};

export default CustomerNotiWidget;