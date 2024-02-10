import classNames from "classnames";
import { useState } from "react";
import "./Tabs.css";

export const Tabs = ({
  outerClassName,
  tabClassName,
  contentClassName,
  tabs,
}) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className={classNames("Tabs", outerClassName)}>
      <div className="Tabs__Bar">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={classNames("Tabs__Tab", tabClassName, {
              "Tabs__Tab--Active": selectedTab == index,
            })}
            onClick={() => setSelectedTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className={classNames("Tabs__Content", contentClassName)}>
        {tabs[selectedTab].content}
      </div>
    </div>
  );
};
