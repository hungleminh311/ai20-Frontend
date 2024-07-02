"use client";

import { FC } from "react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { AiComponentProps } from "../base/ai-component-props";

export type Tier = {
  id: string;
  name: string;
  href: "#";
  price: Price;
  description: string;
  features: string[];
};

export type Price = {
  id: string;
  price: string;
  type: string;
};

export type PricingCardProps = {
  tier: Tier;
  onSubscribe: () => Promise<void>;
} & AiComponentProps;

const PricingCard: FC<PricingCardProps> = ({ tier, theme, onSubscribe }) => {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="w-[480px] border rounded-2xl p-4">
        <div className="flex items-center gap-8">
          <div className="flex-grow min-w-0">
            <div className="text-xl font-bold">{tier.name}</div>
            <div className="text-xs opacity-60 mt-1">{tier.description}</div>
          </div>
          <div className="flex items-end gap-1">
            <div className="text-4xl font-bold">{tier.price.price}</div>
            <div className="text-sm text-nowrap mb-1">/ {tier.price.type}</div>
          </div>
        </div>
        <div className="border-b my-5" />
        <div className="text-sm font-bold">FEATURES</div>
        <div className="text-xs opacity-60 mt-1">
          Everything in the Free plan, plus
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          {tier.features.map((feature, index) => (
            <div key={index} className="flex flex-row items-center gap-2">
              <CheckCircleIcon
                className="h-7 w-5 flex-none"
                aria-hidden="true"
              />
              <div className="text-xs">{feature}</div>
            </div>
          ))}
        </div>
        <div className="border-b my-5" />
        <div className="mt-5">
          <a
            className={`inline-block w-full text-center rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white ${
              theme === "neo-brutal"
                ? "border-2 border-gray-900 shadow-neo-brutal"
                : "shadow-sm"
            } hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600`}
            onClick={async () => {
              await onSubscribe();
            }}
          >
            Subscribe Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
