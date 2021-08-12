const CarReducer = (state = [], action) => {
    // console.log("Reducer-State", state);
    switch (action.type) {
      case "GET_INCIDENT":
        return {
          ...state,
          incident: action.payload,
        };
        case "GET_CONTACT":
          return {
            ...state,
            contactObj: action.payload,
          };
        case "GET_INVOLVED":
        return {
          ...state,
          involvedObj: action.payload,
        };
        case "GET_PASSENGERS":
        return {
          ...state,
          addPassObj: action.payload,
        };
        case "GET_PERSONAL":
        return {
          ...state,
          personalObj: action.payload,
        };
        case "GET_POLICY":
        return {
          ...state,
          policyObj: action.payload,
        };
  
  

      default:
        return {
          state,
        };
    }
  };
  
  export default CarReducer;