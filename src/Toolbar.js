import React from "react";
import { IconButton, Typography } from "@material-ui/core";
import DEFAULT_TOOLBAR_ITEM_MAPPINGS from "./constants/defaultToolbarItemMappings";

const Toolbar = ({ config, onFormatDoc, openDialog, dialogTypes }) => (
  <div>
    {(config || []).map(item => {
      if (typeof item === "string") {
        if (dialogTypes[item]) {
          return (
            <IconButton key={`button ${item}`} onClick={openDialog(item)}>
              {React.createElement(
                DEFAULT_TOOLBAR_ITEM_MAPPINGS[item].icon,
                { fontSize: "small" },
                null
              )}
            </IconButton>
          );
        } else if (DEFAULT_TOOLBAR_ITEM_MAPPINGS[item]) {
          return (
            <IconButton key={`button ${item}`} onClick={onFormatDoc(item)}>
              {React.createElement(
                DEFAULT_TOOLBAR_ITEM_MAPPINGS[item].icon,
                { fontSize: "small" },
                null
              )}
            </IconButton>
          );
        } else {
          return (
            <IconButton
              key={`button ${item}`}
              onClick={onFormatDoc("formatblock", item)}
            >
              <Typography>{item.toUpperCase()}</Typography>
            </IconButton>
          );
        }
      } else {
        return <React.Fragment>TODO</React.Fragment>;
      }
    })}
  </div>
);

export default Toolbar;
