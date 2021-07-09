import { makeStyles } from "@material-ui/core";
import { Colors } from "../../utils/constants/colors/colors";

const { flashWhite, textPrimary } = Colors;

const FooterStyles = makeStyles(() => ({
  root: {
    padding: "40px 60px",
    backgroundColor: flashWhite,
  },
  logo: { marginBottom: "20px" },
  socialMedia: {
    marginRight: "30px",
  },
  contacts: { marginTop: "20px" },
  pageLinks: {
    paddingBottom: "15px",
    color: textPrimary,
  },
}));

export default FooterStyles;
