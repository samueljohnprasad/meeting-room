import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./Chips.css";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",

    justifyContent: 'space-between',
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function Chips({slot}) {
  const classes = useStyles();
  //const [flag,setFlag] = React.useState(false)
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "10:00 AM", flag: '' },
    { key: 1, label: "10:30 AM", flag: '' },
    { key: 2, label: "11:00 AM", flag: '' },
    { key: 3, label: "11:30 AM", flag: '' },
    { key: 4, label: "Vue.js", flag: '' },
    { key: 5, label: "11", flag: '' },
    { key: 6, label: "React", flag: '' },
    { key: 7, label: "Vue.js", flag: '' },
    { key: 8, label: "Polymer", flag: '' },
    { key: 9, label: "React", flag: '' },
    { key: 10, label: "Vue.js", flag: '' },
    { key: 11, label: "React", flag: '' },
    { key: 12, label: "Vue.js", flag: '' },
    { key: 13, label: "Polymer", flag: '' },
    { key: 14, label: "React", flag: '' },
    { key: 15, label: "Vue.js", flag: '' },
    { key: 16, label: "11:00 AM", flag: '' },
    { key: 17, label: "11:30 AM", flag: '' },
    { key: 18, label: "Vue.js", flag: '' },
    { key: 19, label: "11", flag: '' },
  ]);

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  const handleChip = (e) => {
    console.log(chipData[e.key].flag);
    // setChipData((chipData[e.key].flag=true))

    let chips = [...chipData];
    chips[e.key].flag = 'sam';

    chips = chips.map((item) => {
      if (e.key == item.key) {
        item.flag = 'sam';
      } else {
        item.flag = '';
      }

      return item;
    });

    setChipData(chips);
  };

  return (
    <div className="chipx">
       <h3>{slot}</h3>
      <div className={classes.root}>
     
        {console.log("looooolll")}
        {chipData.map((item) => (
          <Chip
           color={item.flag && "primary"}
            key={item.key}
            value={item.key}
            label={item.label}
            onClick={() => handleChip(item)}
          />
        ))}
        {/* <Chip  onClick={()=>{console.log('hello')}}label="Basic" />
      <Chip label="Disabled" disabled /> */}
      </div>
    </div>
  );
}
