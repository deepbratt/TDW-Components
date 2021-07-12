import { makeStyles } from "@material-ui/core/styles";

const LayoutStyle = makeStyles((theme) => ({
  root: {
    // REMOVED - SECTION PADDING
    padding: "60px 0",
    position: "relative",
  },
  content: {
    position: "relative",
    margin: "0 8%",
    "& > img": {
      position: "absolute",
      height: "146px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 2%",
    },
  },
  sectionHeader: {
    marginBottom: "40px",
  },
  subHeader: {
    color: "grey",
  },
  underlinedStyles:{
    borderBottom: "1px solid red"
  }
}));

export default LayoutStyle;
