import React from "react";

const LocationSection = () => {
  return (
    <div className="rounded-xl w-4/5 flex flex-col gap-y-4">
      <div className="border rounded-xl w-full p-6 flex flex-col gap-y-6">
        <h5 className="text-xl font-medium">Location</h5>
        <div className="flex flex-col gap-y-2">
          <p className="text-md font-medium">Time Zone</p>
          <p className="text-md font-medium">UTC+05:00 Islamabad, Karachi</p>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-md font-medium">Address</p>
          <p className="text-md font-medium">
            Block#14, Gulistan-e-Jauhar Karachi, SINDH 07516 Pakistan
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-md font-medium">Phone</p>
          <p className="text-md font-medium">+92 3413549032</p>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
