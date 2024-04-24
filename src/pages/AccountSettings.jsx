import React from "react";
import ContactInfoSection from "../components/AccountSettings/ContactInfoSection";
import LocationSection from "../components/AccountSettings/LocationSection";

const AccountSettings = () => {
  return (
    <div className="w-full flex flex-col gap-y-10 items-center py-12">
      <ContactInfoSection />
      <LocationSection />
    </div>
  );
};

export default AccountSettings;
