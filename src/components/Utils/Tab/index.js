import { useState } from "react";

export function Tabs({ children, numberGrids }) {
  function findActiveTab(a) {
    return a.reduce((accumulator, currentValue, i) => {
      if (currentValue.props.active) {
        return i;
      }

      return accumulator;
    }, 0);
  }

  function tabValidator(tab) {
    return tab.type.displayName === "Tab" ? true : false;
  }

  const [activeTab, setActiveTab] = useState(findActiveTab(children));
  return (
    <>
      <div className={`grid grid-cols-${numberGrids} max-sm:grid-cols-1 sm:justify-center sm:p-2`}>
        {children.map((item, i) => {
          return (
            <>
              {tabValidator(item) && (
                <Tab
                  className="col-span-1"
                  key={`tab-{i}`}
                  currentTab={i}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                >
                  {item.props.children}
                </Tab>
              )}
            </>
          );
        })}
      </div>
      <div className="p-5">
        {children.map((item, i) => {
          return (
            <div className={` ${i === activeTab ? "visible" : "hidden"}`}>
              {item.props.component}
            </div>
          );
        })}
      </div>
    </>
  );
}

export function Tab({ children, activeTab, currentTab, setActiveTab }) {
  return (
    <>
      <div
        className={`px-5 py-3  cursor-pointer text-slate-500 font-semibold
      ${activeTab === currentTab ? "max-sm:border border-b max-sm:rounded-lg max-sm:mx-5 max-sm:bg-slate-500/80 border-slate-500 text-slate-50  sm:text-slate-900" : "bg-transparent"}`}
        onClick={() => setActiveTab(currentTab)}
      >
        {children}
      </div>
    </>
  );
}

Tab.displayName = "Tab";
