import { Metadata } from "next";
import LandingPage from "@/components/landing/LandingPage";
import JsonLd from "@/components/sheared/JsonLd";

export const metadata: Metadata = {
  title: "SM Agency | Web Scraping, Automation & SaaS Products",
  description:
    "SM Agency - Expert web scraping, automation, and SaaS development services. Transform your business with our data solutions and custom development.",
  keywords: [
    "web scraping",
    "automation",
    "saas development",
    "lead generation",
    "data pipelines",
    "AI agents",
    "web development",
  ],
  openGraph: {
    title: "SM Agency | Web Scraping, Automation & SaaS Products",
    description:
      "We turn messy web data into clean pipelines, and clean pipelines into products your customers pay for.",
    url: "https://www.dreamteam.agency",
    siteName: "SM Agency",
    images: [
      {
        url: "https://images.bigibyte.com/projects/project-bigibyte-brand-banner.webp",
        width: 1200,
        height: 630,
        alt: "SM Agency logo banner with the tagline Big Ideas, Byte Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SM Agency | Web Scraping, Automation & SaaS Products",
    description:
      "Expert web scraping, automation, and SaaS development services.",
    images: ["https://images.bigibyte.com/projects/project-bigibyte-brand-banner.webp"],
  },
  alternates: {
    canonical: "https://www.dreamteam.agency",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SM Agency",
  url: "https://www.dreamteam.agency",
  logo: "https://images.bigibyte.com/projects/project-bigibyte-brand-banner.webp",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-555-555-5555",
    contactType: "Customer Service",
  },
  sameAs: [
    "https://www.facebook.com/bigibyte",
    "https://twitter.com/bigibyte",
    "https://instagram.com/thebigibyte",
    "https://linkedin.com/company/bigibyte",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SM Agency",
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

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={breadcrumbSchema} />
      <LandingPage />
    </>
  );
}
