import React from "react";
import { styles } from "../styles/styles";
import BillingForm from "../components/Payment/BillingForm";
import CarrentalSummarySection from "../components/Payment/CarrentalSummarySection";

const Payment = () => {
  return (
    <div className={`w-full py-6 md:py-12 ${styles.paddingHorizontal}`}>
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 lg:col-span-8 order-2 lg:order-1">
          <BillingForm />
        </div>
        <div className="col-span-12 lg:col-span-4 order-1 lg:order-2">
          <CarrentalSummarySection />
        </div>
      </div>
    </div>
  );
};

export default Payment;
