import React, { useEffect } from "react";
import { MENULINKS } from "../../../constants";

const Menu = () => {
  useEffect(() => {
    const anchorNodes = document.querySelectorAll('a[href^="#"]');
    anchorNodes.forEach((el) => {
      el.addEventListener("click", () => {
        const checkbox = document.querySelector(".checkbox-toggle");
        checkbox.checked = false;
      });
    });
  }, []);

  return (
    <div className="menu fixed top-0 left-0 w-full h-full overflow-hidden invisible pointer-events-none flex items-center justify-center">
      <div className="flex-none overflow-hidden flex items-center justify-center">
        <div className="text-center opacity-0 overflow-y-auto overflow-x-hidden flex flex-none justify-center items-center max-h-screen">
          <ul className="list-none py-4 px-0 m-0 block max-h-screen">
            {MENULINKS.map((el) => (
              <li className="p-0 m-6 text-2xl block" key={el.name}>
                <a
                  className="link relative inline font-mono font-bold text-5xl duration-300 hover:no-underline"
                  href={`#${el.ref}`}
                >
                  {el.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
