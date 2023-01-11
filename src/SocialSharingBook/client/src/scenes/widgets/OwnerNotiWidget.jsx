import { Typography, Box, useTheme, Divider } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import UserImage from "components/UserImage";
import WidgetWrapper from "components/WidgetWrapper";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const OwnerNotiWidget = ({ userId }) => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const [ownerBookings, setOwnerBooking] = useState(null);
  const { palette } = useTheme();
  const dark = palette.neutral.dark;

  const getOnwerBooking = async () => {
    const response = await fetch(
      `http://localhost:3001/books/${userId}/findCustomer`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    setOwnerBooking(data);
  };

  useEffect(() => {
    getOnwerBooking();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography 
          fontSize="30px"
          fontWeight="700"
          color="primary"
        >
          Customer Booking
        </Typography>
      </FlexBetween>
      <Divider sx={{ margin: "1.25rem 0" }}/>
    {ownerBookings
      ? (
        ownerBookings.map((ownerBooking) => (
          <Box key={ownerBooking._id}>
            <FlexBetween
              gap="0.5rem"
              pb="1.1rem"
            >
              <FlexBetween 
                gap="1rem" 
                onClick={() => navigate(`/profile/${ownerBooking.customerId}`)}
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
                <UserImage image={ownerBooking.customerPicturePath} />
                
              </FlexBetween>

              <FlexBetween 
                gap="1rem"
                onClick={() => navigate(`/posts/${ownerBooking.postId}`)}
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
                <UserImage image={ownerBooking.postPicturePath} />
                
              </FlexBetween>
            </FlexBetween>
            <Box>
              <FlexBetween>
                <Typography color={palette.neutral.dark} variant="h5" fontWeight="400"> Phone Contact </Typography>
                <Typography color={palette.neutral.dark} variant="h5" fontWeight="400"> {ownerBooking.phoneContact} </Typography>
              </FlexBetween>
            </Box>
            <Box>
              <FlexBetween>
                <Typography color={palette.neutral.dark} variant="h5" fontWeight="400"> Time Selection </Typography>
                <Typography color={palette.neutral.dark} variant="h5" fontWeight="400"> {ownerBooking.timeToMeet} </Typography>
              </FlexBetween>
            </Box>
            <Box>
              <FlexBetween>
                <Typography color={palette.neutral.dark} variant="h5" fontWeight="400"> Map Selection </Typography>
                <Typography color={palette.neutral.dark} variant="h5" fontWeight="400"> {ownerBooking.placeToMeet} </Typography>
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

export default OwnerNotiWidget;