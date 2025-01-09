const TabButton = (props) => {
  const handleClick = () => {
    console.log("Hello world");
  };

  return (
    <li>
        {/** you write just function name because it will be executed in future by react, that s why not handleClick() */}
      <button onClick={handleClick}>{props.children}</button>
    </li>
  );
};

export default TabButton;

/* Alternative with destructuring */
/*
const TabButton = ({children}) => {
    return (
        <li><button>{children}</button></li>
    )
}

export default TabButton;
*/
