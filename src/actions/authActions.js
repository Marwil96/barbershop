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
    	var data = doc.data();
    	dispatch(push('/'+ user.user.uid +'/Dashboard'))
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

const signupUserSuccess = (dispatch, user, fullName, teamName) => {
	console.log(user.user.uid);

	// Skriver in i användarens databas
	db.collection("users").doc(user.user.uid).set({
    name: fullName,
    team:teamName,
    workspaceSetup:false
	}).then(function() {
		dispatch(push('/'+ user.user.uid +'/Dashboard'))
		dispatch({
			type: 'SIGNUP_USER_SUCCESS',
			payload: {user:user, fullName:fullName, teamName:teamName}
		});	
		console.log("SKREV IN I ANVÄNDAREN")
	}).catch(function(error) {
		console.log("Error")
	});
};

 const fetchTeamInformation = (dispatch, user, teamName) => {
	return (dispatch) => {
	db.collection("teams").doc(teamName).get().then(function(doc) {
		if (doc.exists) {
    	var data = doc.data();
		var workspaceSetup = data.workspaceSetup
    } else {
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
	})
	}
}

 export const fetchEmployees = (dispatch) => {
	return (dispatch) => {
		dispatch({
			type: 'FETCHING_EMPLOYEES'
        });
	// Hämtar anställda
	db.collection("users").doc('SFdS5UevvSQAmKDrc4JBD5ApWIo1').collection('employees').get().then(function(querySnapshot) {
		 var employeesData = []
		 querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            var data = doc.data();
            console.log(data.mail);
            console.log(doc.id, " => ", doc.data());
            employeesData.push({ name:data.name, mail:data.mail, phoneNumber:data.phone_number })
		});
		dispatch({
			type: 'FETCHED_EMPLOYEES',
			payload: employeesData	
        });
}).catch(function(error) {
    console.log("Error getting document:", error);
	})
	}
};

 export const saveEmployee = (dispatch, employeeMail, employeeName, employeeNumber, employeesData) => {
 	var user = firebase.auth()
	console.log("saveEmployee", employeeMail, employeeName, employeeNumber, user.currentUser.uid)
	employeesData.push({ name:employeeName, mail: employeeMail, phoneNumber: employeeNumber})
	return (dispatch) => {
		dispatch({
			type: 'SAVING_EMPLOYEE'
        });
	// Skriver in i användarens databas
	db.collection("users").doc('SFdS5UevvSQAmKDrc4JBD5ApWIo1').collection('employees').doc(employeeName).set({
    	name:employeeName,
    	mail: employeeMail,
    	phone_number: employeeNumber
	}).then(function() {
		dispatch({
			type: 'SAVED_EMPLOYEE',
			payload: employeesData
        });
		fetchEmployees()
		console.log("SKREV IN I ANVÄNDAREN")
	}).catch(function(error) {
		console.log("Error")
	});
	}
};








// const signupUserSuccess = (dispatch, user, fullName, teamName) => {
// 	console.log(user.user.uid);

// 	// Skriver in i användarens databas
// 	db.collection("users").doc(user.user.uid).set({
//     name: fullName,
//     team:teamName,
//     workspaceSetup:false
// 	}).then(function() {
// 		dispatch(push('/'+ user.user.uid +'/Dashboard'))
// 		dispatch({
// 			type: 'SIGNUP_USER_SUCCESS',
// 			payload: {user:user, fullName:fullName}
// 		});	
// 		console.log("SKREV IN I ANVÄNDAREN")
// 	}).catch(function(error) {
// 		console.log("Error")
// 	});

// 	// Skriver in i Teamts databas
// 	db.collection("teams").doc(teamName).set({
//     workspaceSetup:false
// 	}).then(function() {
// 		console.log("SKREV IN I ANVÄNDAREN")
// 	}).catch(function(error) {
// 		console.log("Error")
// 	});

// 	// Skriver in i användaren i teamets databas
// 	db.collection("teams").doc(teamName).collection("users").doc(user.user.uid).set({
//     name: fullName,
// 	})
// 	.then(function() {
// 	dispatch(push('/'+ user.user.uid +'/Dashboard'))
// 	dispatch({
// 		type: 'SIGNUP_USER_SUCCESS',
// 		payload: {user:user, fullName:fullName}
// 	});	
//     console.log("Document successfully written!");
// 	}).catch(function(error) {
// 	    console.error("Error writing document: ", error);
// 	});
// };


// export const logInAction = ({ username, password }) => {
// 	console.log(username, password);
// 	return (dispatch) => {
// 	dispatch({ type: 'LOGIN_ACTION' });
// };
// }