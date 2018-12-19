
const INITIAL_STATE = { credentials:{email:""}, loading:false, fullName:'', user:"", employeeData:[{}]};

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
   	fullName:action.payload.fullName,
   	user: action.payload.user.user.uid
   }
   case 'SIGNUP_USER_SUCCESS':
   return {
   	loading:false,
   	fullName:action.payload.fullName
   }
   case 'SAVING_EMPLOYEE':
   return {
    ...state,
    loading:true,
   }
   case 'SAVED_EMPLOYEE':
   return {
    ...state,
    loading:false,
    employeesData: action.payload
   }
   case 'FETCHING_EMPLOYEES':
   return {
    loading:true
   }
   case 'FETCHED_EMPLOYEES':
   return {
    ...state,
    loading:false,
    employeesData: action.payload
   }
  default:
   return state
 }
}