const Textchange = (name = "", action) => {
  switch (action.type) {
    case "TEXTCHANGE":
      return (name = "Denish");
    default:
      return name;
  }
};
export default Textchange;
