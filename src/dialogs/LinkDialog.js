import React from "react";
import { TextField, Button } from "@material-ui/core";

const LinkDialog = closeDialog => (
  <form
    title="Add Link"
    onSubmit={ev => {
      ev.preventDefault();
      const newLink = ev.currentTarget["url"].value;
      closeDialog(() => {
        document.execCommand("createlink", false, newLink);
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

export default LinkDialog;
