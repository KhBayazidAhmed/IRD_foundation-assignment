import React from "react";
const settingsItems = [
  {
    title: "Language Settings",
    iconPath: "/assets/icons/language.svg",
  },
  {
    title: "General Settings",
    iconPath: "/assets/icons/generalSettingsIcon.svg",
  },
  {
    title: "Font Settings",
    iconPath: "/assets/nav/alldua.svg",
  },
];
export default function SettingSection() {
  return (
    <div className="w-[18%] bg-white rounded-2xl p-4 h-[84vh]">
      <h2 className="text-xl  py-4 text-center font-inter">Settings</h2>
      <div className="flex flex-col gap-4 ">
        {settingsItems.map((item) => (
          <div
            key={item.title}
            className="flex bg-veryLightGray gap-2 rounded-md p-3  items-center "
          >
            <div className="bg-lightBlue rounded-full w-9 h-9 flex items-center justify-center">
              <img src={item.iconPath} alt="icon" />
            </div>
            <h2 className="text-secondary ">{item.title}</h2>
          </div>
        ))}
        <div>
          <div className="bg-veryLightGray border-l-4 border-primary rounded-md rounded-b-none p-3 flex gap-2  items-center">
            <div className="bg-lightBlue  rounded-full w-9 h-9 flex items-center justify-center fill-primary">
              <img src="/assets/nav/alldua.svg" alt="icon" />
            </div>
            <h2 className="text-primary ">Appearance Settings</h2>
          </div>
          <div className="border border-t-0 rounded-md rounded-t-none p-3 flex gap-2  items-center justify-between">
            <h2 className="text-secondary">Night Mode </h2>
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="/assets/icons/buttonOffSwitch.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
