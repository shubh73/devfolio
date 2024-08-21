import { useEffect } from "react";

export const HamburgerMenu = () => {
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
    // <div className="menu pointer-events-none invisible fixed left-0 top-0 flex h-full w-full items-center justify-center overflow-hidden">
    //   <div className="flex flex-none items-center justify-center overflow-hidden">
    //     <div className="flex max-h-screen flex-none items-center justify-center overflow-y-auto overflow-x-hidden text-center opacity-0">
    //       <ul className="m-0 block max-h-screen list-none px-0 py-4">
    //         {MENU_ITEMS.map((el) => (
    //           <li key={el.name} className="m-6 block p-0 text-2xl">
    //             <a
    //               className="link relative inline font-mono text-5xl font-bold duration-300 hover:no-underline"
    //               href={`#${el.ref}`}
    //             >
    //               {el.name}
    //             </a>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // </div>
    <div
      className="menu pointer-events-none invisible fixed inset-0 flex items-center justify-center outline outline-1 outline-transparent"
      style={{ backfaceVisibility: "hidden" }}
    >
      {/* <div
            className="flex h-[240vw] w-[240vw] scale-0 items-center justify-center rounded-[50%] bg-black/80 transition-all duration-[400ms] ease-in will-change-transform"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="flex max-h-screen max-w-[90vw] items-center justify-center overflow-y-auto text-center opacity-0">
              <ul className="m-0 block max-h-screen list-none px-0 py-4">
                {MENU_ITEMS.map((el) => (
                  <li key={el.name} className="m-6 block p-0 text-2xl">
                    <a
                      href={`#${el.ref}`}
                      className="link relative inline bg-[length:200%_100%] bg-clip-text font-mono text-5xl font-bold text-transparent duration-300 hover:bg-[length:100%_0] hover:no-underline"
                      style={{
                        background:
                          "linear-gradient(90deg, theme(colors.white) 0%, theme(colors.white) 50%, theme(colors.indigo.light) 51%, theme(colors.indigo.dark) 100%)",
                      }}
                    >
                      {el.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div> */}
    </div>
  );
};
