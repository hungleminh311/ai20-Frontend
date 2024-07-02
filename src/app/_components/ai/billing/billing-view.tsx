"use client";

import { FC } from "react";
import { AiComponentProps } from "../base/ai-component-props";
import PricingCard, { Tier } from "./pricing-card";

const tiers: Array<Tier> = [
  {
    name: "Pro",
    id: "product_id",
    href: "#",
    price: {
      id: "price_1PXP1m07FYOOa5s0Z1wyyR8D",
      price: "$15",
      type: "monthly",
    },
    description: "Everything necessary to get started.",
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
  },
  // {
  //   name: 'Essential',
  //   id: 'tier-essential',
  //   href: '#',
  //   price: { monthly: '$30', annually: '$24' },
  //   description: 'Everything in Basic, plus essential tools for growing your business.',
  //   features: [
  //     '25 products',
  //     'Up to 10,000 subscribers',
  //     'Advanced analytics',
  //     '24-hour support response time',
  //     'Marketing automations',
  //   ],
  // },
  // {
  //   name: 'Growth',
  //   id: 'tier-growth',
  //   href: '#',
  //   price: { monthly: '$60', annually: '$48' },
  //   description: 'Everything in Essential, plus collaboration tools and deeper insights.',
  //   features: [
  //     'Unlimited products',
  //     'Unlimited subscribers',
  //     'Advanced analytics',
  //     '1-hour, dedicated support response time',
  //     'Marketing automations',
  //     'Custom reporting tools',
  //   ],
  // },
];

interface BillingViewProps extends AiComponentProps {
  onCheckout: (priceId: string) => Promise<void>;
}

const BillingView: FC<BillingViewProps> = ({ onCheckout }) => {
  return (
    <div className={"flex items center justify-center flex-row"}>
      {tiers.map((tier, index) => (
        <PricingCard
          key={index}
          tier={tier}
          onSubscribe={async () => {
            await onCheckout(tier.price.id);
          }}
        />
      ))}
    </div>
  );
};

export default BillingView;
