import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  FormatAlignLeft,
  FormatAlignRight,
  FormatAlignCenter,
  InsertLink,
  InsertPhoto,
  Theaters
} from "@material-ui/icons";

const DEFAULT_TOOLBAR_ITEM_MAPPINGS = {
  link: {
    label: "link",
    icon: InsertLink
  },
  image: {
    label: "image",
    icon: InsertPhoto
  },
  video: {
    label: "video",
    icon: Theaters
  },
  bold: {
    label: "bold",
    icon: FormatBold
  },
  italic: {
    label: "italic",
    icon: FormatItalic
  },
  underline: {
    label: "underline",
    icon: FormatUnderlined
  },
  justifyLeft: {
    label: "justifyLeft",
    icon: FormatAlignLeft
  },
  justifyCenter: {
    label: "justifyCenter",
    icon: FormatAlignCenter
  },
  justifyRight: {
    label: "justifyRight",
    icon: FormatAlignRight
  }
};

export default DEFAULT_TOOLBAR_ITEM_MAPPINGS;
