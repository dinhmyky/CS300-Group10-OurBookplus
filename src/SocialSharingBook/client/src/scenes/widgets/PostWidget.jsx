import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
  Send,
  ContentCopy,
} from "@mui/icons-material";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost, setImpression } from "state";
import {
  InputBase,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const PostWidget = ({
  postId,
  postUserId,
  name,
  description,
  location,
  picturePath,
  userPicturePath,
  likes,
  comments,
  openAddRemove,
  isBookPost,
  createdAt,
}) => {
  const [isComments, setIsComments] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const isLiked = Boolean(likes[loggedInUserId]);
  const likeCount = Object.keys(likes).length;
  const [postComment, setPostComment] = useState("");
  const navigate = useNavigate();
  const [upToDate, setUpToDate] = useState("");

  const { palette } = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.main;

  const patchLike = async () => {
    const response = await fetch(
      `http://localhost:3001/posts/${postId}/like`, 
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: loggedInUserId }),
      }
    );
    const updatedPost = await response.json();
    const valueImpression = await (updatedPost.likes[loggedInUserId]) ? 1 : -1;
    dispatch(setPost({ post: updatedPost }));

    const newResponse = await fetch(
      `http://localhost:3001/users/${postUserId}/impressions`, 
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ impressions: valueImpression }),
      }
    );
    const updatedUser = await newResponse.json();
    dispatch(setImpression({ post: updatedUser }));
  };

  const handlePostComment = async() => {
    const response = await fetch(
      `http://localhost:3001/posts/${postId}/comment`, 
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ comments: [postComment]}),
      }
    );
    const updatedPost = await response.json();
    dispatch(setPost({ post: updatedPost }));
    setPostComment("");
  };

  function handleTime() {
    const date = new Date(createdAt);
    const currentDate = new Date();
    const dif = currentDate.getTime() - date.getTime();
    if (Math.floor(dif / 86400000) !== 0) {
      setUpToDate(`${Math.floor(dif / 86400000)} days ago`);
    } else if (Math.floor(dif / 3600000) !== 0) {
      setUpToDate(`${Math.floor(dif / 3600000)} hours ago`);
    } else if (Math.floor(dif / 60000) !== 0) {
      setUpToDate(`${Math.floor(dif / 60000)} minutes ago`);
    } else {
      setUpToDate(`1 minute ago`);
    }
  }

  useEffect(() => {
    handleTime();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
  return (
    <WidgetWrapper m="2rem 0">
      <Friend
        friendId={postUserId}
        name={name}
        subtitle={location}
        userPicturePath={userPicturePath}
        openAddRemove={openAddRemove}
      />
      <Typography color={main} sx={{ mt: "1rem" }}>
        {description}
      </Typography>
      <Typography color={main} sx={{ mt: "1rem" }}>
        {upToDate}
      </Typography>
      {picturePath && (
        <img
          width="100%"
          height="auto"
          alt="post"
          style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
          src={`http://localhost:3001/assets/${picturePath}`}
        />
      )}
      <FlexBetween mt="0.25rem">
        <FlexBetween gap="0.3rem">
          <IconButton 
            onClick={() => {
              patchLike()
            }}
          >
            {isLiked ? (
              <FavoriteOutlined sx={{ color: primary }} />
            ) : (
              <FavoriteBorderOutlined />
            )}
          </IconButton>
          <Typography>{likeCount}</Typography>
        </FlexBetween>
        
        <FlexBetween gap="0.3rem">
          <IconButton onClick={() => setIsComments(!isComments)}>
            <ChatBubbleOutlineOutlined />
          </IconButton>
          <Typography>{comments.length}</Typography>
        </FlexBetween>
        
        <IconButton 
          onClick={() => {
            navigate(`../posts/${postId}`);
            navigate(0);
          }}
        >
          <ContentCopy />
        </IconButton>

        {isBookPost && (
          <IconButton
            onClick={() => {
              navigate(`/bookings/${postId}`); 
              navigate(0);
            }}
          >
            <ShareOutlined />
          </IconButton>
        )}
      </FlexBetween>

      <Divider sx={{ margin: "1.25rem 0" }} />
      
      <FlexBetween gap="1.5rem">
        <InputBase
          placeholder="What's on your mind..."
          onChange={(e) => setPostComment(e.target.value)}
          value={postComment}
          sx={{
            width: "100%",
            backgroundColor: palette.neutral.light,
            borderRadius: "2rem",
            padding: "1rem 2rem",
          }}
        />
        <IconButton onClick={handlePostComment}>
          <Send />
        </IconButton>
      </FlexBetween>
      {isComments && (
        <Box mt="0.5rem">
          {comments.map((comment, i) => (
            <Box key={`${name}-${i}`}>
              <Divider />
              <Typography sx={{ color: main, m: "0.5rem 0", pl: "1rem" }}>
                {comment}
              </Typography>
            </Box>
          ))}
          <Divider />
        </Box>
      )} 
    </WidgetWrapper>
  );
};

export default PostWidget;
