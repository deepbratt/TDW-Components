import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
interface CommonButtonProps {
  label?: string;
  className: string;
}
const ContainedButtons: React.FC<CommonButtonProps> = ({
  label,
  className,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" className={className}>
        {label}
      </Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
    </div>
  );
};

export default ContainedButtons;
