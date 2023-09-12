const Hello = (props) => {
  console.log("props=>", props);
  const { name, email } = props;
  return (
    <>
      <h1>
        Hello {props.name} {props.email}
      </h1>
    </>
  );
};
export default Hello;
