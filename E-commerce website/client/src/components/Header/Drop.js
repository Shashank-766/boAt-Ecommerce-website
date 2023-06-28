import React from "react";
import "./style.css"
import { useNavigate } from "react-router-dom";
const App = () => {
    const navigate=useNavigate();
  
    return (
      <Dropdown
        trigger={<button className="title">Category</button>}
        menu={[
          <button onClick={()=>navigate("/category/Headphones")}>Headphones</button>,
          <button onClick={()=>navigate("/category/Bluetooth%20Speakers")}>Bluetooth Speakers</button>,
          <button onClick={()=>navigate("/category/Smart%20Watches")}>Smart Watch</button>,
          <button onClick={()=>navigate("/category/Wireless%20Earbuds")}>Wireless Earbuds</button>,
        ]}
      />
    );
  };
  
  const Dropdown = ({ trigger, menu }) => {
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(!open);
    };
  
    return (
      <div className="dropdown">
        {React.cloneElement(trigger, {
          onClick: handleOpen,
        })}
        {open ? (
          <ul className="menu">
            <hr></hr>
            {menu.map((menuItem, index) => (
              <li key={index} className="menu-item">
                {React.cloneElement(menuItem, {
                  onClick: () => {
                    menuItem.props.onClick();
                    setOpen(false);
                  },
                })}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  };
  
  export default App;