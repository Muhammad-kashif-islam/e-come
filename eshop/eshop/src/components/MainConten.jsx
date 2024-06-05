import React from "react";
import Home from "./Home";
import { useSelector } from "react-redux";
function MainConten() {
  const items = useSelector((state) => state.items);
  return (
    <>
      <main>
        <div className="items-container">
          {items.map((item, index) => (
            <Home item={item} key={item.id} />
          ))}
        </div>
      </main>
    </>
  );
}

export default MainConten;
