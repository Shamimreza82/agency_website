

import { Metadata } from "next";
import Hero from "@/components/home/Hero";
import AboutUs from "@/components/AboutUs/AboutUs";
import JsonLd from "@/components/sheared/JsonLd";

export const metadata: Metadata = {
  title: "Dream Team | Expert Web Design & Development Services",
  description:
    "Dream Team is a top-rated digital agency offering professional web design, development, and UI/UX services. We build powerful websites that drive business growth. Contact us for a free discovery call.",
  keywords: [
    "web design",
    "web development",
    "UI/UX design",
    "digital agency",
    "React development",
    "Next.js development",
    "front-end development",
    "full-stack development",
    "website design",
    "website development",
  ],
  openGraph: {
    title: "Dream Team | Expert Web Design & Development Services",
    description:
      "We craft beautiful designs and build powerful websites that grow businesses online. Partner with our expert team of developers and designers.",
    url: "https://www.dreamteam.agency",
    siteName: "Dream Team",
    images: [
      {
        url: "https://www.dreamteam.agency/images/og-image.jpg", // To be replaced with an actual image
        width: 1200,
        height: 630,
        alt: "Dream Team - Web Design and Development Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dream Team | Expert Web Design & Development Services",
    description:
      "Get top-quality design and development services from our skilled professionals. We deliver results at a fair and competitive price.",
    creator: "@dreamteam", // To be replaced with actual Twitter handle
    images: ["https://www.dreamteam.agency/images/twitter-image.jpg"], // To be replaced with an actual image
  },
  alternates: {
    canonical: "https://www.dreamteam.agency",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dream Team",
  url: "https://www.dreamteam.agency",
  logo: "https://www.dreamteam.agency/images/logo.png", // To be replaced with actual logo
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-555-555-5555", // To be replaced
    contactType: "Customer Service",
  },
  sameAs: [
    "https://www.facebook.com/dreamteam", // To be replaced
    "https://twitter.com/dreamteam", // To be replaced
    "https://www.linkedin.com/company/dreamteam", // To be replaced
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dream Team",
  url: "https://www.dreamteam.agency",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.dreamteam.agency/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.dreamteam.agency",
    },
  ],
};


// const LocoWrapper = dynamic(() => import("@/components/LocoWrapper"), {
//   ssr: false,
// });

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Hero />
      <AboutUs />
    </>
  );
}
