import { Metadata } from "next";
import AboutUs from "@/components/AboutUs/AboutUs";
import JsonLd from "@/components/sheared/JsonLd";

export const metadata: Metadata = {
  title: "About Dream Team | Our Story & Expert Team",
  description:
    "Learn about Dream Team, a passionate team of web developers and designers dedicated to creating exceptional digital experiences. Meet our experts, Reza Shamim and Al Mamun.",
  keywords: [
    "about us",
    "digital agency team",
    "web development experts",
    "UI/UX designers",
    "Reza Shamim",
    "Al Mamun",
  ],
  openGraph: {
    title: "About Dream Team | Our Story & Expert Team",
    description:
      "Discover the story behind Dream Team and meet the professionals crafting your next digital masterpiece.",
    url: "https://www.dreamteam.agency/about",
    siteName: "Dream Team",
    images: [
      {
        url: "https://www.dreamteam.agency/images/about-og-image.jpg", // To be replaced
        width: 1200,
        height: 630,
        alt: "The Dream Team posing in their office",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Dream Team | Our Story & Expert Team",
    description:
      "Meet the passionate developers and designers at Dream Team who are ready to bring your vision to life.",
    creator: "@dreamteam", // To be replaced
    images: ["https://www.dreamteam.agency/images/about-twitter-image.jpg"], // To be replaced
  },
  alternates: {
    canonical: "https://www.dreamteam.agency/about",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "About Dream Team",
  url: "https://www.dreamteam.agency/about",
  description: "Learn about the team and mission of Dream Team.",
  isPartOf: {
    "@type": "WebSite",
    url: "https://www.dreamteam.agency",
    name: "Dream Team",
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
    {
      "@type": "ListItem",
      position: 2,
      name: "About Us",
      item: "https://www.dreamteam.agency/about",
    },
  ],
};







const AboutPage = () => {
  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <div>
        <AboutUs />
      </div>
    </>
  );
};

export default AboutPage;