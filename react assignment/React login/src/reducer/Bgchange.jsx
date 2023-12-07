const initialState = {
  color: 'white'
}
const Bgchange = (name = initialState, action) => {
    switch (action.type) {
      case "TEXTCHANGE":
        return {...name , color:'red'};
      default:
        return name;
    }
  };
  export default Bgchange;
  