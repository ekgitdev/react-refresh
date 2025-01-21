const TabButton = ({children, onSelect, isSelected}) => {
 
  return (
    <li>
        {/** you write just function name because it will be executed in future by react, that s why not handleClick() */}
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
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
