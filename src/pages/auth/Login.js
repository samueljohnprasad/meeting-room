// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/8.6.7/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import React from "react";
import { auth, googleAuthProvider } from "../firebase";
import "./Login.css";
import { useDispatch } from "react-redux";

//event handler
const styles = {
  display: "flex",
  flexDirection: "column",
};

function Login({ history }) {
  //console.log(history)
  const dispatch = useDispatch();

  const googleLogin = async () => {
    auth
      .signInWithPopup(googleAuthProvider)
      .then(async (result) => {
        const { user } = result;
        // console.log('userr-> ',user)
        // console.log('photoURL',user.photoURL)

        //console.log('displayName->',user.displayName)

        const idTokenResult = await user.getIdTokenResult();
        //console.log('idTokenResult',idTokenResult)
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            email: user.email,
            token: idTokenResult.token,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
        });
        history.push("/home");
      })
      .catch((err) => {
        console.log("you got error", err);
      });
  };
  return (
    <div className="sty">
      <Button onClick={googleLogin} variant="contained" color="primary">
        Login In With Google
      </Button>
    </div>
  );
}

export default Login;
