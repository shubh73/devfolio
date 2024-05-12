import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "utils/cn";

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [tabs, setTabs] = useState(propTabs);
  const [activeTab, setActiveTab] = useState(propTabs[0]);

  const moveSelectedTab = (index) => {
    const updatedTabs = [...propTabs];
    const selectedTab = updatedTabs.splice(index, 1);
    updatedTabs.unshift(selectedTab[0]);
    setTabs(updatedTabs);
    setActiveTab(updatedTabs[0]);
  };

  return (
    <>
      <div
        className={cn(
          "seq pt-4 flex flex-row items-center [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab, index) => (
          <button
            key={tab.title}
            onClick={() => moveSelectedTab(index)}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className={cn(
              "relative px-4 py-1 rounded-full cursor-none",
              tabClassName
            )}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {activeTab.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-gray-dark-2 rounded-full",
                  activeTabClassName
                )}
              />
            )}

            <span
              className={cn(
                "relative text-white top-[3px]",
                tab.value !== activeTab.value && "hover:text-gray-light-3"
              )}
            >
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        key={activeTab.value}
        tabs={tabs}
        isHovering={isHovering}
        className={contentClassName}
      />
    </>
  );
};

export const FadeInDiv = ({ tabs, isHovering, className }) => {
  const isActiveTab = (tab) => tab.value === tabs[0].value;

  return (
    <div className="seq relative w-full h-full mt-36 md:mt-32">
      {tabs.map((tab, index) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - index * 0.1,
            top: isHovering ? index * -50 : 0,
            zIndex: -index,
            opacity: index < 3 ? 1 - index * 0.1 : 0,
          }}
          animate={{
            y: isActiveTab(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
