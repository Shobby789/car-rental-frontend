import React from "react";
import { styles } from "../../styles/styles";
import {
  BitcoinLogo,
  PaypalLogo,
  SafetyLogo,
  VisaCardLogo,
} from "../../assets/export";
import { motion } from "framer-motion";


const BillingForm = () => {
  return (
    <div className="w-full flex flex-col gap-y-6">
      <div className="w-full p-6 bg-white rounded-xl flex flex-col gap-y-6">
        <div className="w-full flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">Billing Info</h2>
            <p className={`text-sm ${styles.secondaryText}`}>
              Please enter your billing info
            </p>
          </div>
          <div>
            <p className={`text-sm ${styles.secondaryText}`}>Step 1 of 4</p>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 flex flex-col gap-y-1">
            <label htmlFor="name" className="font-semibold text-base">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className={`w-full rounded-lg p-4 bg-slate-100 text-sm border-none outline-none ${styles.secondaryText}`}
            />
          </div>
          <div className="col-span-12 md:col-span-6 flex flex-col gap-y-1">
            <label htmlFor="name" className="font-semibold text-base">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Phone number"
              className={`w-full rounded-lg p-4 bg-slate-100 text-sm border-none outline-none ${styles.secondaryText}`}
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 flex flex-col gap-y-1">
            <label htmlFor="name" className="font-semibold text-base">
              Address
            </label>
            <input
              type="text"
              placeholder="Address"
              className={`w-full rounded-lg p-4 bg-slate-100 text-sm border-none outline-none ${styles.secondaryText}`}
            />
          </div>
          <div className="col-span-12 md:col-span-6 flex flex-col gap-y-1">
            <label htmlFor="name" className="font-semibold text-base">
              Town/City
            </label>
            <input
              type="text"
              placeholder="Town or city"
              className={`w-full rounded-lg p-4 bg-slate-100 text-sm border-none outline-none ${styles.secondaryText}`}
            />
          </div>
        </div>
      </div>

      {/* rental info */}
      <div className="w-full p-6 bg-white rounded-xl flex flex-col gap-y-6">
        <div className="w-full flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">Rental Info</h2>
            <p className={`text-sm ${styles.secondaryText}`}>
              Please select your rental date
            </p>
          </div>
          <div>
            <p className={`text-sm ${styles.secondaryText}`}>Step 2 of 4</p>
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <input type="radio" name="pickup" id="pickup" className="w-5 h-5" />
          <label htmlFor="pickup" className="text-base font-semibold">
            Pick - Up
          </label>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 flex flex-col gap-y-2">
            <label
              htmlFor="pickup-location"
              className="font-semibold text-base"
            >
              Location
            </label>
            <select
              name="pickup-location"
              id="pickup-location"
              className={`w-full rounded-lg p-4 bg-slate-100 text-sm border-none outline-none ${styles.secondaryText}`}
            >
              <option value="">Select your city</option>
              <option value="karachi">Karachi</option>
              <option value="hyd">Hyderabad</option>
              <option value="lahore">Lahore</option>
              <option value="islamabad">Islamabad</option>
            </select>
          </div>
          <div className="col-span-12 md:col-span-6 flex flex-col gap-y-2">
            <label htmlFor="pickup-date" className="font-semibold text-base">
              Date
            </label>
            <input
              type="date"
              placeholder="Town or city"
              className={`w-full rounded-lg p-4 bg-slate-100 text-sm border-none outline-none ${styles.secondaryText}`}
            />
            {/* <select
              name="pickup-location"
              id="pickup-location"
              className="w-full rounded-lg p-4 bg-slate-100 text-sm border-none outline-none"
            >
              <option value="">Select your date</option>
              <option value="karachi">Karachi</option>
              <option value="hyd">Hyderabad</option>
              <option value="lahore">Lahore</option>
              <option value="islamabad">Islamabad</option>
            </select> */}
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 flex flex-col gap-y-2">
            <label htmlFor="pickup-date" className="font-semibold text-base">
              Time
            </label>
            <input
              type="time"
              placeholder="Select your time"
              className={`w-full rounded-lg p-4 bg-slate-100 text-sm border-none outline-none ${styles.secondaryText}`}
            />
          </div>
        </div>
        {/* drop - off */}
        <div className="flex items-center gap-x-3">
          <input type="radio" name="pickup" id="pickup" className="w-5 h-5" />
          <label htmlFor="pickup" className="text-base font-semibold">
            Drop - Off
          </label>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 flex flex-col gap-y-2">
            <label
              htmlFor="pickup-location"
              className="font-semibold text-base"
            >
              Location
            </label>
            <select
              name="pickup-location"
              id="pickup-location"
              className={`w-full rounded-lg p-4 bg-slate-100 text-sm border-none outline-none ${styles.secondaryText}`}
            >
              <option value="">Select your city</option>
              <option value="karachi">Karachi</option>
              <option value="hyd">Hyderabad</option>
              <option value="lahore">Lahore</option>
              <option value="islamabad">Islamabad</option>
            </select>
          </div>
          <div className="col-span-12 md:col-span-6 flex flex-col gap-y-2">
            <label htmlFor="pickup-date" className="font-semibold text-base">
              Date
            </label>
            <input
              type="date"
              placeholder="Town or city"
              className={`w-full rounded-lg p-4 bg-slate-100 text-sm border-none outline-none ${styles.secondaryText}`}
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 flex flex-col gap-y-2">
            <label htmlFor="pickup-date" className="font-semibold text-base">
              Time
            </label>
            <input
              type="time"
              placeholder="Select your time"
              className={`w-full rounded-lg p-4 bg-slate-100 text-sm border-none outline-none ${styles.secondaryText}`}
            />
          </div>
        </div>
      </div>

      {/* Payment method */}
      <div className="w-full p-6 bg-white rounded-xl flex flex-col gap-y-6">
        <div className="w-full flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">Payment Method</h2>
            <p className={`text-sm ${styles.secondaryText}`}>
              Please enter your payment method
            </p>
          </div>
          <div>
            <p className={`text-sm ${styles.secondaryText}`}>Step 3 of 4</p>
          </div>
        </div>
        <div className="w-full bg-slate-100 p-6 rounded-xl flex flex-col gap-y-6">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <input
                type="radio"
                name="pickup"
                id="pickup"
                className="w-5 h-5"
              />
              <label htmlFor="pickup" className="text-base font-semibold">
                Credit Card
              </label>
            </div>
            <div>
              <img src={VisaCardLogo} alt="" />
            </div>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6 flex flex-col gap-y-1">
              <label htmlFor="name" className="font-semibold text-base">
                Card Number
              </label>
              <input
                type="text"
                placeholder="Card number"
                className={`w-full rounded-lg p-4 bg-white text-sm border-none outline-none ${styles.secondaryText}`}
              />
            </div>
            <div className="col-span-12 md:col-span-6 flex flex-col gap-y-1">
              <label htmlFor="name" className="font-semibold text-base">
                Expiration Date
              </label>
              <input
                type="text"
                placeholder="Expiration date"
                className={`w-full rounded-lg p-4 bg-white text-sm border-none outline-none ${styles.secondaryText}`}
              />
            </div>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6 flex flex-col gap-y-1">
              <label htmlFor="name" className="font-semibold text-base">
                Card Holder
              </label>
              <input
                type="text"
                placeholder="Card holder"
                className={`w-full rounded-lg p-4 bg-white text-sm border-none outline-none ${styles.secondaryText}`}
              />
            </div>
            <div className="col-span-12 md:col-span-6 flex flex-col gap-y-1">
              <label htmlFor="name" className="font-semibold text-base">
                CVC
              </label>
              <input
                type="text"
                placeholder="CVC"
                className={`w-full rounded-lg p-4 bg-white text-sm border-none outline-none ${styles.secondaryText}`}
              />
            </div>
          </div>
        </div>
        <div className="w-full bg-slate-100 rounded-xl flex items-center justify-between p-6">
          <div className="flex items-center gap-x-3">
            <input type="radio" name="pickup" id="pickup" className="w-5 h-5" />
            <label htmlFor="pickup" className="text-base font-semibold">
              Credit Card
            </label>
          </div>
          <div>
            <img src={PaypalLogo} alt="" />
          </div>
        </div>
        <div className="w-full bg-slate-100 rounded-xl flex items-center justify-between p-6">
          <div className="flex items-center gap-x-3">
            <input
              type="radio"
              name="bitcoin"
              id="bitcoin"
              className="w-5 h-5"
            />
            <label htmlFor="bitcoin" className="text-base font-semibold">
              Bitcoin
            </label>
          </div>
          <div>
            <img src={BitcoinLogo} alt="" />
          </div>
        </div>
      </div>

      {/* confirmation */}
      <div className="w-full p-6 bg-white rounded-xl flex flex-col gap-y-6">
        <div className="w-full flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">Confirmation</h2>
            <p className={`text-sm ${styles.secondaryText}`}>
              We are getting to the end. Just few clicks and your rental is
              ready!
            </p>
          </div>
          <div>
            <p className={`text-sm ${styles.secondaryText}`}>Step 4 of 4</p>
          </div>
        </div>
        <div className="w-full bg-slate-100 rounded-xl flex items-center justify-between p-6">
          <div className="flex items-center gap-x-3">
            <input
              type="checkbox"
              name="agreement-emails"
              id="agreement-emails"
              className="w-5 h-5"
            />
            <label htmlFor="agreement-emails" className="text-base font-semibold">
              I agree with sending an Marketing and newsletter emails. No spam,
              promissed!
            </label>
          </div>
        </div>
        <div className="w-full bg-slate-100 rounded-xl flex items-center justify-between p-6">
          <div className="flex items-center gap-x-3">
            <input
              type="checkbox"
              name="agreement-terms"
              id="agreement-terms"
              className="w-5 h-5"
            />
            <label htmlFor="agreement-terms" className="text-base font-semibold">
              I agree with our terms and conditions and privacy policy.
            </label>
          </div>
        </div>
        <div>
          <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="px-8 py-4 text-white font-semibold bg-[#3563E9] rounded-xl text-base">
            Rent Now
          </motion.button>
        </div>
        <div className="flex flex-col gap-y-2 pt-3">
          <img src={SafetyLogo} className="w-8 h-8" alt="" />
          <p className="text-base font-bold">All your data are safe</p>
          <p className={`${styles.secondaryText} text-sm font-medium`}>
            We are using the most advanced security to provide you the best
            experience ever.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BillingForm;
