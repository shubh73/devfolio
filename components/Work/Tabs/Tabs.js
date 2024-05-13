import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "utils/cn";

const Tab = ({
  index,
  tab: { title, value },
  activeTab: { value: activeTabValue },
  handleOnClick,
  setIsHovering,
}) => {
  return (
    <button
      onClick={() => handleOnClick(index)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative px-4 py-1 rounded-full cursor-none"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {value === activeTabValue && (
        <motion.div
          layoutId="clickedbutton"
          transition={{ type: "spring", bounce: 0.2, duration: 0.7 }}
          className="absolute inset-0 bg-gray-dark-2 rounded-full"
        />
      )}

      <span
        className={cn(
          "relative text-white top-[3px] link",
          value !== activeTabValue && "hover:text-gray-light-3"
        )}
      >
        {title}
      </span>
    </button>
  );
};

const TabsContent = ({ tabs, isHovering }) => {
  return (
    <div className="relative w-full h-full mt-36 md:mt-32 seq">
      {tabs.map((tab, index) => {
        const { value, content } = tab;

        return (
          <motion.div
            key={value}
            layoutId={value}
            style={{
              scale: 1 - index * 0.1,
              top: isHovering ? index * -50 : 0,
              zIndex: -index,
              opacity: index < 3 ? 1 - index * 0.1 : 0,
            }}
            animate={{
              y: value === tabs[0].value ? [0, 40, 0] : 0,
            }}
            className="w-full h-full absolute top-0 left-0"
          >
            {content}
          </motion.div>
        );
      })}
    </div>
  );
};

const Tabs = ({ tabItems }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [tabs, setTabs] = useState(tabItems);
  const [activeTab, setActiveTab] = useState(tabItems[0]);

  const handleOnClick = (index) => {
    const updatedTabs = [...tabItems];
    const selectedTab = updatedTabs.splice(index, 1);
    updatedTabs.unshift(selectedTab[0]);
    setTabs(updatedTabs);
    setActiveTab(updatedTabs[0]);
  };

  return (
    <>
      <div className="pt-4 flex flex-row items-center [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full seq">
        {tabItems.map((tab, index) => (
          <Tab
            key={tab.value}
            index={index}
            tab={tab}
            activeTab={activeTab}
            handleOnClick={handleOnClick}
            setIsHovering={setIsHovering}
          />
        ))}
      </div>
      <TabsContent key={activeTab.value} tabs={tabs} isHovering={isHovering} />
    </>
  );
};

export default Tabs;
