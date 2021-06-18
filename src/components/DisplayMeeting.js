import React from "react";
import { useSelector } from "react-redux";
import { Card, CardContent, Typography } from "@material-ui/core";
function DisplayMeeting() {
  const state = useSelector((store) => store.userForm);

  const styles = {
    margin: 3,
  };

  return (
    <>
      {state.bookings.map((item,index) => {
        const { name, time, date, meeting } = item;
        return (
          <div key={index} >
            <Card style={styles}>
              <CardContent>
                <Typography color="textSecondary">{name}</Typography>
                <Typography color="textSecondary">{meeting}</Typography>
                <Typography color="textSecondary">{`${date}, ${time}`}</Typography>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </>
  );
}

export default DisplayMeeting;
