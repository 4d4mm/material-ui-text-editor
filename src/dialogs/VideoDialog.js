import React from "react";
import { TextField, Button } from "@material-ui/core";

const VideoDialog = closeDialog => (
  <form
    title="Add Video"
    onSubmit={ev => {
      ev.preventDefault();
      const newLink = ev.currentTarget["url"].value;
      closeDialog(() => {
        newLink.match(
          /(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|dailymotion.com)\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
        );
        let url = newLink;

        if (RegExp.$3.indexOf("youtu") > -1) {
          url = "//www.youtube.com/embed/" + RegExp.$6;
        } else if (RegExp.$3.indexOf("vimeo") > -1) {
          url = "//player.vimeo.com/video/" + RegExp.$6;
        } else if (RegExp.$3.indexOf("dailymotion.com") > -1) {
          url = "//www.dailymotion.com/embed/video/" + RegExp.$6;
        }
        document.execCommand("insertHTML", false, `<iframe src="${url}" />`);
      });
    }}
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <TextField
      id="outlined-name"
      label="URL"
      name="url"
      margin="normal"
      variant="outlined"
    />

    <Button onClick={() => closeDialog()}>Cancel</Button>
    <Button type="submit">Ok</Button>
  </form>
);

export default VideoDialog;
