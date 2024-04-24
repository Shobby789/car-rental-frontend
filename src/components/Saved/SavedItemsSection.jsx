import React from "react";
import SavedCarCard from "./SavedCarCard";

const SavedItemsSection = () => {
  return (
    <div className="w-full py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-center gap-6 md:gap-y-12">
      <SavedCarCard />
      <SavedCarCard />
      <SavedCarCard />
      <SavedCarCard />
      <SavedCarCard />
      <SavedCarCard />
      <SavedCarCard />
      <SavedCarCard />
    </div>
  );
};

export default SavedItemsSection;
