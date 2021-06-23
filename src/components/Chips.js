import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./Chips.css";
import Chip from "@material-ui/core/Chip";
import chipsData from "../utils/chipsData";

const chipsList = chipsData();

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",

    justifyContent: "space-between",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function Chips({ slot, timeHandler }) {
  const classes = useStyles();
  //const [flag,setFlag] = React.useState(false)
  const [chipData, setChipData] = React.useState(chipsList);

  const handleChip = (e) => {
    let chips = [...chipData];
    chips[e.key].flag = "sam";

    chips = chips.map((item) => {
      if (e.key === item.key) {
        item.flag = "sam";
      } else {
        item.flag = "";
      }

      return item;
    });

    setChipData(chips);
    timeHandler(e.label);
  };

  return (
    <div className="chipx">
      <h3>{slot}</h3>
      <div className={classes.root}>
        {chipData.map((item) => (
          <Chip
            color={item.flag ? "primary" : "default"}
            key={item.key}
            value={item.key}
            label={item.label}
            onClick={() => handleChip(item)}
          />
        ))}
      </div>
    </div>
  );
}
