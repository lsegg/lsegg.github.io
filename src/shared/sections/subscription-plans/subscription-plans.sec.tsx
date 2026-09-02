import React from "react";
import "./subscription-plans.scss";
import { TitleCom } from "../../components/title/title.com";
import { PlanCom } from "../../components/plan/plan.com";
import type { PlanProps } from "../../components/plan/plan.com";
import subscriptionData from "./subscription-data.json";

// The JSON widens "icon" to string, so it is narrowed once here rather than
// at every spread site.
const PLANS = subscriptionData as PlanProps[];

export const SubscriptionPlansSection: React.FC = () => {
  return (
    <section className="Subscription" id="subscription">
      <div className="Subscription-intro">
        <TitleCom
          content="Subscription plans"
          sectionClass="Subscription-title"
          eyebrow="Support my work"
        />
        <p className="Subscription-subtitle paragraph-medium-regular">
          Select the perfect plan for your needs
        </p>
      </div>
      <div className="Subscription-grid" data-reveal>
        {PLANS.map((plan, index) => (
          <PlanCom key={index} {...plan} />
        ))}
      </div>
    </section>
  );
};
