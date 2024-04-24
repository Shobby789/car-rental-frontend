import React, { useState } from "react";
import { styles } from "../../styles/styles";
import { FaStar } from "react-icons/fa";
import { carreviews } from "../../constants/carreviews";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const CarReviews = ({ review }) => {
  const [showReviews, setShowReviews] = useState(false)
  return (
    <div className="w-full bg-white py-6 rounded-xl p-4 md:p-6 flex flex-col gap-y-6">
      <p className="text-xl font-bold">
        Reviews{" "}
        <span className="text-sm px-3 py-1 rounded text-white bg-[#3563E9]">
          19
        </span>
      </p>
      <div>
        {carreviews.map((review, index) => {
          return (
            <div className="grid grid-cols-12 py-2" key={index}>
              <div className="col-span-2 md:col-span-1 pt-2">
                <img
                  src={review?.user_image}
                  alt=""
                  className="w-14 h-14 rounded-full mx-auto"
                />
              </div>
              <div className="col-span-10 md:col-span-11 py-2 flex flex-col items-start gap-y-4">
                <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div className="flex flex-col gap-y-1 items-start justify-center">
                    <p className="text-xl font-bold">{review?.user_name}</p>
                    <p
                      className={`text-xs font-medium ${styles.secondaryText}`}
                    >
                      {review?.user_desgination}
                    </p>
                  </div>
                  <div className="flex flex-col gap-y-2 items-start justify-center">
                    <p
                      className={`text-xs font-medium ${styles.secondaryText}`}
                    >
                      {review?.review_date}
                    </p>
                    <div className="flex items-center gap-x-1">
                      <FaStar className="text-yellow-400 text-sm" />
                      <FaStar className="text-yellow-400 text-sm" />
                      <FaStar className="text-yellow-400 text-sm" />
                      <FaStar className="text-yellow-400 text-sm" />
                      <FaStar className="text-yellow-400 text-sm" />
                    </div>
                  </div>
                </div>
                <p className={`text-sm ${styles.secondaryText}`}>
                  {review?.review}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-center">
        <button className={`${styles.secondaryText} text-base font-semibold flex items-center gap-1`} onClick={()=> setShowReviews(!showReviews)}>View More {showReviews ? <MdKeyboardArrowUp className="text-xl"/>:<MdKeyboardArrowDown className="text-xl"/>}</button>
      </div>
    </div>
  );
};

export default CarReviews;
