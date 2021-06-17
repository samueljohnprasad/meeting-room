import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import submitFormAction from "../actions/submitFormAction";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Chip from "@material-ui/core/Chip";
import Chips from "./Chips";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const initialStates = {
  meeting: "Training Room",
  currentDate: new Date(),
};
export default function FormComp() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [meeting, setMeeting] = useState(initialStates.meeting);
  const [date, setDate] = useState(initialStates.currentDate);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const classes = useStyles();
  const [errorDes, setErrorDes] = useState(false);
  let [errorName, setErrorName] = useState(false);
  let slot = "Please select your preferred slot";
  console.log("state in form ", state);

  //event handlers
  const bookAppointmentHandler = (e) => {
    e.preventDefault();
    if (!name || description.length < 10) {
      setErrorName(true);
      setErrorDes(true);

      return;
    }

    dispatch(
      submitFormAction({
        name,
        description,
        meeting,
        date: date.toDateString(),
      })
    );
    setMeeting(initialStates.meeting);
    setDate(initialStates.currentDate);
    setDescription("");
    setName("");
  };
  return (
    <FormControl>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: 350,
            margin: 40,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <FormControl
            style={{ margin: 0 }}
            variant="outlined"
            className={classes.formControl}
          >
            <InputLabel htmlFor="outlined-meeting-native-simple">
              Select Meeting Room
            </InputLabel>
            <Select
              native
              value={meeting}
              onChange={(e) => {
                setMeeting(e.target.value);
                console.log(e.target.value);
              }}
              label="Select Meeting Room"
              inputProps={{
                name: "meeting",
                id: "outlined-meeting-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              <option>Training Room</option>
              <option>General meeting</option>
              <option>Group meeting</option>
              <option>Discussion meeting</option>
              <option>Company meeting</option>
            </Select>
          </FormControl>
          <br />
          {/* onChange={(e)=>{setMeeting(e.target.value)}} */}

          <TextField
            error={errorName}
            id="outlined-full-width"
            label="Name"
            placeholder="Enter Your Name"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            value={name}
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <br />

          <TextField
            error={errorDes}
            id="outlined-textarea"
            label="Meeting Description"
            placeholder="Enter Meeting Description"
            multiline
            helperText={
              errorDes && "description should have atleast 10 characters"
            }
            InputLabelProps={{
              shrink: true,
            }}
            value={description}
            variant="outlined"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <Calendar value={date} onChange={(e) => setDate(e)} />
        {date.toDateString()}
        <br />
        <br />

        <div>
        

          <Chips  slot={slot}/>
        </div>
        <br />
        <Button
          onClick={bookAppointmentHandler}
          variant="contained"
          color="secondary"
        >
          BOOK APPOINTMENT
        </Button>
      </div>
    </FormControl>
  );
}
