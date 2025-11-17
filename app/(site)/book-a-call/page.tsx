import { Metadata } from "next";
import BookingCallForm from "@/components/form/BookingCallForm";
import JsonLd from "@/components/sheared/JsonLd";

export const metadata: Metadata = {
  title: "Book a Discovery Call | Dream Team",
  description:
    "Schedule a free discovery call with the Dream Team to discuss your project. Let's talk about how we can help you achieve your business goals with a stunning new website.",
  keywords: [
    "book a call",
    "discovery call",
    "contact web developers",
    "schedule meeting",
    "web design consultation",
  ],
  openGraph: {
    title: "Book a Discovery Call | Dream Team",
    description:
      "Ready to start your project? Schedule a call with our experts today.",
    url: "https://www.dreamteam.agency/book-a-call",
    siteName: "Dream Team",
    images: [
      {
        url: "https://www.dreamteam.agency/images/book-a-call-og-image.jpg", // To be replaced
        width: 1200,
        height: 630,
        alt: "A calendar indicating a scheduled meeting with Dream Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Discovery Call | Dream Team",
    description:
      "Let's discuss your project. Book a free consultation with our web design and development experts.",
    creator: "@dreamteam", // To be replaced
    images: ["https://www.dreamteam.agency/images/book-a-call-twitter-image.jpg"], // To be replaced
  },
  alternates: {
    canonical: "https://www.dreamteam.agency/book-a-call",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Book a Discovery Call",
  url: "https://www.dreamteam.agency/book-a-call",
  description: "Schedule a consultation with the Dream Team.",
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
      name: "Book a Call",
      item: "https://www.dreamteam.agency/book-a-call",
    },
  ],
};

const BookACallPage = () => {
  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <div>
        <BookingCallForm />
      </div>
    </>
  );
};

export default BookACallPage;