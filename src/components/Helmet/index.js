const Helmet = (props) => {
  document.title = "Yummy Foodies | " + props.title;
  return <div>{props.children}</div>;
};

export default Helmet;
