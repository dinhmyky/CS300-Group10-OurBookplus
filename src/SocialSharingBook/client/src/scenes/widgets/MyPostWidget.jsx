import {
  EditOutlined,
  DeleteOutlined,
  ImageOutlined,
  IosShareOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Typography,
  InputBase,
  useTheme,
  IconButton,
} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Dropzone from "react-dropzone";
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

const MyPostWidget = ({ picturePath }) => {
  const dispatch = useDispatch();
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");
  const { palette } = useTheme();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const mediumMain = palette.neutral.mediumMain;
  const medium = palette.neutral.medium;
  const [goodPost, setGoodPost] = useState(false);
  const [failPost, setFailPost] = useState(false);

  const handlePost = async () => {
    if (post && image) {
      const formData = new FormData();
      formData.append("userId", _id);
      formData.append("description", post);
      formData.append("isBookPost", true);
      if (image) {
        formData.append("picture", image);
        formData.append("picturePath", image.name);
      }
      const response = await fetch(`http://localhost:3001/posts`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const posts = await response.json();
      dispatch(setPosts({ posts }));
      setImage(null);
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
      </FlexBetween>
      
      {isImage && (
        <Box
          border={`1px solid ${medium}`}
          borderRadius="5px"
          mt="1rem"
          p="1rem"
        >
          <Dropzone
            acceptedFiles=".jpg,.jpeg,.png"
            multiple={false}
            onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
          >
            {({ getRootProps, getInputProps }) => (
              <FlexBetween>
                <Box
                  {...getRootProps()}
                  border={`2px dashed ${palette.primary.main}`}
                  p="1rem"
                  width="100%"
                  sx={{ "&:hover": { cursor: "pointer" } }}
                >
                  <input {...getInputProps()} />
                  {!image ? (
                    <p>Add Image Here</p>
                  ) : (
                    <FlexBetween>
                      <Typography>{image.name}</Typography>
                      <EditOutlined />
                    </FlexBetween>
                  )}
                </Box>
                {image && (
                  <IconButton
                    onClick={() => setImage(null)}
                    sx={{ width: "15%" }}
                  >
                    <DeleteOutlined />
                  </IconButton>
                )}
              </FlexBetween>
            )}
          </Dropzone>
        </Box>
      )}

      <Divider sx={{ margin: "1.25rem 0" }} />

      <FlexBetween>
        <FlexBetween 
          paddingLeft="5rem"
          gap="0.25rem" 
          onClick={() => setIsImage(!isImage)}
        >
          <ImageOutlined sx={{ color: mediumMain }} />
          <Typography
            color={mediumMain}
            sx={{ "&:hover": { cursor: "pointer", color: medium } }}
          >
            Image
          </Typography>
        </FlexBetween>
        <FlexBetween>|</FlexBetween>
        <FlexBetween 
          paddingRight="5rem"
          gap="0.25rem" 
          onClick={handlePost}
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

export default MyPostWidget;
