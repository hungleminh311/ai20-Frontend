"use client";

import { FC, useState } from "react";
import { notFound } from "next/navigation";
import BillingView from "@/app/_components/ai/billing/billing-view";
import { loadStripe } from "@stripe/stripe-js";
import useCreateCheckoutSession from "@/api/payment/useCreateCheckoutSession";
import useRuntimeEnv from "@/api/env/useRuntimeEnv";
import Alert from "@/app/_components/common/Alert";

const Page: FC = () => {
  const billingType = process.env.NEXT_PUBLIC_BILLING;
  const createCheckoutSession = useCreateCheckoutSession();
  const runtimeEnv = useRuntimeEnv();
  const [error, setError] = useState<string>();
  if (billingType) {
    return (
      <div>
        <BillingView
          onCheckout={async (priceId) => {
            setError(undefined);
            try {
              let { id } = await createCheckoutSession(
                {
                  priceId,
                  successUrl: `${process.env.NEXT_PUBLIC_DOMAIN}/?session_id={CHECKOUT_SESSION_ID}`,
                  cancelUrl: `${process.env.NEXT_PUBLIC_DOMAIN}/`,
                },
                billingType,
              );
              const env = await runtimeEnv();
              loadStripe(env.stripePublishableKey ?? "").then((s) =>
                s?.redirectToCheckout({ sessionId: id }),
              );
            } catch (error) {
              setError(`Failed to create checkout`);
              console.error("Error creating checkout session:", error);
            }
          }}
        />
        <div className="max-w-96 mx-auto mt-4">
          {error && <Alert title="Failed to create checkout" />}
        </div>
      </div>
    );
  } else {
    return notFound();
  }
};

export default Page;
