import React from "react";
import "./subscription-plans.scss";
import { TitleCom } from "../../components/title/title.com";
import { PlanCom } from "../../components/plan/plan.com";
import subscriptionData from "./subscription-data.json";

export const SubscriptionPlansSection: React.FC = () => {
  return (
    <section className="Subscription">
      <div className="Subscription-intro">
        <TitleCom
          content="Subscription plans"
          sectionClass="Subscription-title"
        />
        <p className="Subscription-subtitle">
          Select the perfect plan for your needs
        </p>
      </div>
      <div className="Subscription-grid">
        {subscriptionData.map((plan, index) => (
          <PlanCom key={index} {...plan} />
        ))}
      </div>
    </section>
  );
};
