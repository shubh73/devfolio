"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Howl } from "howler";
import { cn } from "utils/cn";

const Tab = ({ index, tab, activeTab, handleOnClick, setIsHovering }) => {
  return (
    <button
      onMouseDown={() => handleOnClick(index)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative cursor-none rounded-full px-4 py-1"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {activeTab.value === tab.value && (
        <motion.div
          layoutId="clickedbutton"
          transition={{ type: "spring", bounce: 0.3, duration: 0.7 }}
          className="absolute inset-0 rounded-full bg-gray-dark-2"
        />
      )}

      <span
        className={cn(
          "link relative top-[3px] text-white",
          tab.value !== activeTab.value && "hover:text-gray-light-3",
        )}
      >
        {tab.title}
      </span>
    </button>
  );
};

const TabsContent = ({ tabs, isHovering }) => {
  return (
    <div className="relative h-full w-full">
      {tabs.map((tab, index) => {
        return (
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
              y: tab.value === tabs[0].value ? [0, 40, 0] : 0,
            }}
            className="absolute left-0 top-0 mt-36 h-full w-full md:mt-32"
          >
            {tab.content}
          </motion.div>
        );
      })}
    </div>
  );
};

const mouseClickSound = new Howl({
  src: ["/sounds/mouse-click.mp3"],
});

export const Tabs = ({ tabItems }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [tabs, setTabs] = useState(tabItems);
  const [activeTab, setActiveTab] = useState(tabItems[0]);

  const handleOnClick = (index) => {
    const updatedTabs = [...tabItems];
    const selectedTab = updatedTabs.splice(index, 1);
    updatedTabs.unshift(selectedTab[0]);
    setTabs(updatedTabs);
    setActiveTab(updatedTabs[0]);
    mouseClickSound.play();
  };

  return (
    <div className="staggered-reveal">
      <div className="no-visible-scrollbar relative flex w-full max-w-full flex-row items-center justify-center overflow-auto pt-12 [perspective:1000px] sm:overflow-visible">
        {tabItems.map((tab, index) => (
          <Tab
            key={tab.title}
            index={index}
            tab={tab}
            activeTab={activeTab}
            handleOnClick={handleOnClick}
            setIsHovering={setIsHovering}
          />
        ))}
      </div>
      <TabsContent
        key={activeTab.value}
        tabs={tabs}
        activeTab={activeTab}
        isHovering={isHovering}
      />
    </div>
  );
};
