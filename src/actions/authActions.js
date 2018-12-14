/*
 src/actions/simpleAction.js
*/
import { push } from 'connected-react-router';
import firebase from "../firebase";

const db = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
  db.settings(settings);

export const simpleAction = () => dispatch => {
 dispatch({
  type: 'SIMPLE_ACTION',
  payload: 'result_of_simple_action'
 })
}

export const logInAction = (email, password)  => {
	console.log("Login Action", email, password)
 return (dispatch) => {
 dispatch({type: 'LOGIN_USER'});
 firebase.auth().signInWithEmailAndPassword(email, password)
		.then(user => loginUserSuccess(dispatch, user))
		.catch(() => loginUserFail(dispatch, email, password));
};
}

const loginUserFail = (dispatch, email, password) => {
	console.log("Login User Fail", email, password)
	dispatch({ type: 'LOGIN_USER_FAIL' });

};

const loginUserSuccess = (dispatch, user) => {
	console.log(user.user.uid);
	db.collection("users").doc(user.user.uid).get().then(function(doc) {
    if (doc.exists) {
    	dispatch(push('/Dashboard'))
    	var data = doc.data();
		dispatch({
			type: 'LOGIN_USER_SUCCESS',
			payload: {user:user, fullName:data.name, teamName:data.team}
		});
        console.log("Document data:", doc.data());
    } else {
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
};


export const signUp = (email, password, fullName, teamName)  => {
	console.log("Login Action", email, password, fullName, teamName)
 return (dispatch) => {
 dispatch({type: 'LOGIN_USER'});
 firebase.auth().createUserWithEmailAndPassword(email, password)
		.then(user => signupUserSuccess(dispatch, user, fullName, teamName))
		.catch(() => loginUserFail(dispatch, email, password));
};
}

// export const fetchUserInformation = () => {
// 	const { currentUser } = firebase.auth();
// 	db.collection("users").doc(currentUser).get()
// }

const signupUserSuccess = (dispatch, user, fullName, teamName) => {
	console.log(user.user.uid);
	// Skriver in i användarens databas
	db.collection("users").doc(user.user.uid).set({
    name: fullName,
    team:teamName
	}).then(function() {
		console.log("SKREV IN I ANVÄNDAREN")
	}).catch(function(error) {
		console.log("FUCK")
	});
	// Skriver in i användaren i teamets databas
	db.collection("teams").doc(teamName).collection("users").doc(user.user.uid).set({
    name: fullName,
	})
	.then(function() {
	dispatch(push('/Dashboard'))
	dispatch({
		type: 'SIGNUP_USER_SUCCESS',
		payload: {user:user, fullName:fullName}
	});	
    console.log("Document successfully written!");
	}).catch(function(error) {
	    console.error("Error writing document: ", error);
	});
};


// export const logInAction = ({ username, password }) => {
// 	console.log(username, password);
// 	return (dispatch) => {
// 	dispatch({ type: 'LOGIN_ACTION' });
// };
// }