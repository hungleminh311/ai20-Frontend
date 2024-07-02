/** @type {import("next").NextConfig} */
const nextConfig = {
    env: {
        AUTH_SECRET: process.env.AUTH_SECRET,
        NEXT_PUBLIC_DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
        NEXT_PUBLIC_AUTH_ENABLED: process.env.NEXT_PUBLIC_AUTH_ENABLED,
        NEXT_PUBLIC_BILLING: process.env.NEXT_PUBLIC_BILLING,
        NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_KEY,
    }
};

export default nextConfig;
