import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "state";
import FlexBetween from "components/FlexBetween";

const FriendListWidget = ({ userId, openAddRemove }) => {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);
  const [showFollowing, setShowFollowing] = useState(false);

  const getFriends = async () => {
    const response = await fetch(
      `http://localhost:3001/users/${userId}/friends`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setFriends({ friends: data }));
  };

  useEffect(() => {
    getFriends();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
            ? "All Followings"
            : "3 Followings Recently"
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
            {friends.map((friend) => (
              <Friend
                key={friend._id}
                friendId={friend._id}
                name={`${friend.firstName} ${friend.lastName}`}
                subtitle={friend.occupation}    
                userPicturePath={friend.picturePath}
                openAddRemove={openAddRemove}
              />
            ))}
          </Box>
        ) 
        : (
          <Box display="flex" flexDirection="column" gap="1.5rem">
            {friends.map((friend, i) => (i < 3) && (
              <Friend
                key={friend._id}
                friendId={friend._id}
                name={`${friend.firstName} ${friend.lastName}`}
                subtitle={friend.occupation}    
                userPicturePath={friend.picturePath}
                openAddRemove={openAddRemove}
              />
            ))}
          </Box>
        )
      }
    </WidgetWrapper>
  );
};

export default FriendListWidget;
