import {
  IosShareOutlined,
} from "@mui/icons-material";
import {
  Typography,
  InputBase,
  useTheme,
} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import UserImage from "components/UserImage";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state"; 
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';

const MyQAndAWidget = ({ picturePath }) => {
  const dispatch = useDispatch();
  const [post, setPost] = useState("");
  const { palette } = useTheme();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const mediumMain = palette.neutral.mediumMain;
  const medium = palette.neutral.medium;
  const [goodPost, setGoodPost] = useState(false);
  const [failPost, setFailPost] = useState(false);

  const handlePost = async () => {
    if (post) {
      const formData = new FormData();
      formData.append("userId", _id);
      formData.append("description", post);
      formData.append("picture", null);
      formData.append("picturePath", "");
      formData.append("isBookPost", false);

      const response = await fetch(`http://localhost:3001/posts`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const posts = await response.json();
      dispatch(setPosts({ posts }));
      setPost("");
      setGoodPost(true);
    } else {
      setFailPost(true);
    }
  };

  return (
    <WidgetWrapper>
      <FlexBetween gap="1.5rem">
        <UserImage image={picturePath} />
        <InputBase
          placeholder="What's on your mind..."
          onChange={(e) => setPost(e.target.value)}
          value={post}
          sx={{
            width: "100%",
            backgroundColor: palette.neutral.light,
            borderRadius: "2rem",
            padding: "1rem 2rem",
          }}
        />
        <FlexBetween onClick={handlePost}>
          <IosShareOutlined sx={{ color: mediumMain }} />
          <Typography
            color={mediumMain}
            sx={{ "&:hover": { cursor: "pointer", color: medium } }}
          >
            POST
          </Typography>
        </FlexBetween>
      </FlexBetween>

      <Dialog 
        open={goodPost}
        onClose={() => setGoodPost(false)}
      >
        <DialogTitle>Submit the Post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You have submited successfully!
          </DialogContentText>
        </DialogContent> 
        <DialogActions>
          <Button 
            onClick={() => setGoodPost(false)}
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
            You have to fulfil the post!
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

export default MyQAndAWidget;
