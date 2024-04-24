import React from "react";

const Notifications = () => {
  return (
    <div className="w-[320px] h-96 bg-white rounded-xl shadow-2xl absolute right-1 top-12 overflow-y-scroll notification-container">
      <div className="w-full h-12 flex items-center px-6 sticky bg-white top-0">
        <span className="font-medium">Notifications</span>
      </div>
      <div className="w-full flex items-center justify-center pt-10">
        <span className="text-lg font-medium">No notifications</span>
        {/* <ul className="w-full h-full overflow-y-scroll">
          <li className="text-sm border-b px-6 py-3">
            Someone just rented a car
          </li>
          <li className="text-sm border-b px-6 py-3">
            Someone just rented a car
          </li>
          <li className="text-sm border-b px-6 py-3">
            Someone just rented a car
          </li>
          <li className="text-sm border-b px-6 py-3">
            Someone just rented a car
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default Notifications;
