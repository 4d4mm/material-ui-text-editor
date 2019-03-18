import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@material-ui/core";
import ContentEditable from "react-contenteditable";

import ImageDialog from "./dialogs/ImageDialog";
import VideoDialog from "./dialogs/VideoDialog";
import LinkDialog from "./dialogs/LinkDialog";
import Toolbar from "./Toolbar";
import DEFAULT_TOOLBAR_CONF from "./constants/defaultToolbarConfig";

const DEFAULT_DIALOG_TYPES = {
  link: LinkDialog,
  image: ImageDialog,
  video: VideoDialog
};

export class HTMLEditor extends React.Component {
  state = {
    html: '<h2 class="asd-test">Da Test</h2>',
    dialogContent: null
  };

  constructor() {
    super();
    this.contentEditable = React.createRef();
  }

  saveSelection = () => {
    if (window.getSelection) {
      var sel = window.getSelection();
      if (sel.getRangeAt && sel.rangeCount) {
        return sel.getRangeAt(0);
      }
    } else if (document.selection && document.selection.createRange) {
      return document.selection.createRange();
    }
    return null;
  };

  restoreSelection = range => {
    if (range) {
      if (window.getSelection) {
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      } else if (document.selection && range.select) {
        range.select();
      }
    }
  };

  handleChange = ev => {
    this.setState({ html: ev.target.value });
  };

  onFormatDoc = (command, value) => () => {
    document.execCommand(command, false, value);
    if (this.contentEditable) {
      this.contentEditable.current.focus();
    }
  };

  closeDialog = cb => {
    this.setState(
      {
        dialogContent: null
      },
      () => {
        if (this.state.selection) {
          this.restoreSelection(this.state.selection);
        }
        if (cb) {
          cb();
        }
      }
    );
  };

  openDialog = dialogType => () => {
    this.setState({
      selection: this.saveSelection(),
      dialogContent: DEFAULT_DIALOG_TYPES[dialogType](this.closeDialog)
    });
  };

  render() {
    const { style, html, config, ...props } = this.props;
    return (
      <div
        style={Object.assign(
          {
            width: "100%"
          },
          this.props.style || {}
        )}
        {...props}
      >
        <Toolbar
          config={config.toolbar}
          onFormatDoc={this.onFormatDoc}
          openDialog={this.openDialog}
          dialogTypes={DEFAULT_DIALOG_TYPES}
        />
        <ContentEditable
          innerRef={this.contentEditable}
          html={this.state.html} // innerHTML of the editable div
          disabled={false} // use true to disable editing
          onChange={this.handleChange} // handle innerHTML change
          tagName="div" // Use a custom HTML tag (uses a div by default)
          style={{
            outline: 0,
            border: "1px solid"
          }}
        />
        <textarea
          value={this.state.html}
          onChange={this.handleChange}
          style={{
            width: "100%"
          }}
        />
        <Dialog open={this.state.dialogContent !== null}>
          <DialogTitle>
            {this.state.dialogContent &&
              this.state.dialogContent.props &&
              this.state.dialogContent.props.title}
          </DialogTitle>
          <DialogContent>{this.state.dialogContent}</DialogContent>
          <DialogActions />
        </Dialog>
      </div>
    );
  }
}

HTMLEditor.defautProps = {
  config: {
    toobar: DEFAULT_TOOLBAR_CONF
  }
};
