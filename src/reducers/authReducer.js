
const INITIAL_STATE = { credentials:{email:""}, loading:false, fullName:''};

export default (state = {}, action) => {
 switch (action.type) {
  case 'SIMPLE_ACTION':
   return {
    result: action.payload
   }
   case 'LOGIN_USER':
   return {
   	...state,
    loading: true
   }
   case 'LOGIN_USER_FAIL':
   return {
   	loading:false
   }
   case 'LOGIN_USER_SUCCESS':
   return {
   	loading:false,
   	fullName:action.payload.fullName
   }
   case 'SIGNUP_USER_SUCCESS':
   return {
   	loading:false,
   	fullName:action.payload.fullName
   }
  default:
   return state
 }
}