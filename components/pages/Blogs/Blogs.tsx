import React from "react";
import Image from "next/image";
import { Clock, User, Tag, Search } from "lucide-react";

export type Blog = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  authorAvatar: string;
  date: string;
  readMinutes: number;
  progress: number; // reading progress %
  category: string;
  tags: string[];
  cover: string;
  featured: boolean;
  views: number;
  likes: number;
  commentsCount: number;
  metaTitle: string;
  metaDescription: string;
};

const sampleBlogs: Blog[] = [
  {
    id: "1",
    slug: "design-systems-building-consistent-ui-at-scale",
    title: "Design Systems 2.0: Crafting Scalable Interfaces for High-Growth Teams",
    excerpt:
      "A deep dive into token-driven UI architecture, multi-brand theming, component governance, and the workflow strategies powering modern design systems.",
    author: "Shamim Reza",
    authorAvatar: "/images/authors/reza.webp",
    date: "Nov 10, 2025",
    readMinutes: 7,
    progress: 72,
    category: "UI/UX",
    tags: ["Design Systems", "UI Architecture", "Tokens", "Scaling"],
    cover: "/blogs/1.webp",
    featured: true,
    views: 12040,
    likes: 580,
    commentsCount: 34,
    metaTitle:
      "Design Systems 2.0 – Scalable UI Architecture for Modern Teams",
    metaDescription:
      "Learn how industry-leading teams build design systems using token-driven workflows, governance rules, and scalable architecture.",
  },
  {
    id: "2",
    slug: "performance-first-react-patterns-modern-apps",
    title:
      "Performance-First React: Architecture Patterns That Make Apps Load in Under 1 Second",
    excerpt:
      "We break down server-driven UI, RSC optimizations, selective hydration, caching layers, and performance-first component patterns that scale.",
    author: "Al Mamun",
    authorAvatar: "/images/authors/mamun.jpg",
    date: "Oct 21, 2025",
    readMinutes: 9,
    progress: 45,
    category: "Frontend Engineering",
    tags: [
      "React",
      "RSC",
      "Performance Optimization",
      "Architecture Patterns",
    ],
    cover: "/blogs/2.jpg",
    featured: false,
    views: 15620,
    likes: 742,
    commentsCount: 41,
    metaTitle: "Performance-First React Patterns – Modern Optimization Guide",
    metaDescription:
      "Explore architecture patterns and micro optimizations for building ultra-fast React apps using modern rendering strategies.",
  },
  {
    id: "3",
    slug: "practical-tailwind-building-beautiful-ui-fast",
    title:
      "Practical Tailwind CSS: Workflow Patterns for Shipping Beautiful UIs—Fast",
    excerpt:
      "Battle-tested Tailwind components, utility strategies, and reusable patterns that speed up development without sacrificing design quality.",
    author: "Reza Dev",
    authorAvatar: "/images/authors/reza-dev.jpg",
    date: "Sep 30, 2025",
    readMinutes: 6,
    progress: 90,
    category: "CSS & Styling",
    tags: ["Tailwind", "Design", "Utility-First", "UI Workflow"],
    cover: "/blogs/3.jpg",
    featured: false,
    views: 9800,
    likes: 410,
    commentsCount: 18,
    metaTitle:
      "Practical Tailwind CSS – Advanced Utility Patterns for Modern UI",
    metaDescription:
      "Discover optimized Tailwind CSS workflows, utility patterns, and design strategies for building beautiful, scalable UIs.",
  },
];

export default function Blogs() {
  return (
    <section className="min-h-screen py-16 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-[#0c1015] to-[#0f1115] text-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">Insights &amp; Stories</h2>
            <p className="text-slate-400 max-w-xl">Latest thinking from our team — design, product, and engineering.</p>
          </div>

          {/* Search + Filters */}
          <div className="w-full lg:w-auto flex items-center gap-4">
            <div className="relative flex-1 lg:flex-none">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <Search className="w-4 h-4 text-slate-400" />
              </div>
              <input
                aria-label="Search blogs"
                placeholder="Search articles, tags, authors..."
                className="w-full lg:w-96 bg-[rgba(255,255,255,0.02)] backdrop-blur-sm border border-transparent hover:border-slate-700 focus:border-[#02FF95] focus:ring-4 focus:ring-[rgba(2,255,149,0.06)] rounded-2xl py-3 pl-10 pr-4 text-sm placeholder:text-slate-500 outline-none shadow-[0_6px_20px_rgba(2,255,149,0.03)] transition-all"
              />
            </div>

            <div className="flex gap-2">
              <button
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-br from-[#061014] to-[rgba(2,255,149,0.06)] border border-[#092024] shadow-[0_8px_30px_rgba(2,255,149,0.04)] hover:scale-[1.02] transform transition will-change-auto focus:outline-none focus:ring-4 focus:ring-[rgba(2,255,149,0.06)]"
                aria-pressed="false"
              >
                <Tag className="w-4 h-4 text-[#02FF95]" />
                Filters
              </button>

              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-[#02FF95] bg-opacity-8 hover:bg-opacity-100 hover:shadow-[0_8px_40px_rgba(2,255,149,0.14)] text-black transition transform hover:-translate-y-0.5">
                <span className="px-1">Subscribe</span>
              </button>
            </div>
          </div>
        </div>

        {/* Grid + Sidebar layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Blog list */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {sampleBlogs.map((blog) => (
              <article
                key={blog.id}
                className="relative rounded-2xl overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] border border-[rgba(255,255,255,0.03)] p-0 shadow-[0_6px_30px_rgba(2,255,149,0.02)] hover:shadow-[0_20px_60px_rgba(2,255,149,0.06)] transition-transform transform hover:-translate-y-2"
              >
                <div className="relative h-44 sm:h-48 w-full">
                  {blog.cover ? (
                    <Image src={blog.cover} alt={blog.title} fill className="object-cover" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-slate-500">No image</div>
                  )}

                  <div className="absolute left-4 bottom-4 rounded-full bg-[rgba(0,0,0,0.4)] px-3 py-1 backdrop-blur-sm text-xs font-medium border border-[rgba(255,255,255,0.04)] shadow-[0_6px_20px_rgba(0,0,0,0.6)]">
                    <span className="flex items-center gap-2">
                      <Clock className="w-3 h-3 text-slate-300" />
                      <span>{blog.readMinutes} min</span>
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col gap-4">
                  <h3 className="text-lg font-semibold leading-snug">{blog.title}</h3>
                  <p className="text-sm text-slate-400 line-clamp-3">{blog.excerpt}</p>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#071018] to-[#071216] flex items-center justify-center text-sm font-medium border border-[rgba(255,255,255,0.03)] shadow-[0_6px_20px_rgba(2,255,149,0.03)]">{blog.author.split(" ")[0].slice(0,1)}</div>
                        <div className="text-xs">
                          <div className="font-medium">{blog.author}</div>
                          <div className="text-slate-400">{blog.date}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        {blog.tags.map((t) => (
                          <span key={t} className="inline-flex items-center gap-2 px-2 py-1 rounded-lg bg-[rgba(2,255,149,0.02)] border border-[rgba(2,255,149,0.04)]">
                            <Tag className="w-3 h-3 text-[#02FF95]" />
                            <span>{t}</span>
                          </span>
                        ))}
                      </div>

                      <a
                        href="#"
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-xl font-medium text-sm bg-gradient-to-br from-[rgba(2,255,149,0.12)] to-[rgba(2,255,149,0.06)] shadow-[0_8px_30px_rgba(2,255,149,0.06)] hover:shadow-[0_18px_50px_rgba(2,255,149,0.12)] transition transform hover:-translate-y-0.5"
                      >
                        Read
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 sticky top-24 self-start">
            <div className="rounded-2xl p-5 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)] shadow-[0_10px_30px_rgba(2,255,149,0.02)]">
              <h4 className="font-semibold mb-3">Popular posts</h4>
              <ul className="flex flex-col gap-3">
                {sampleBlogs.map((b) => (
                  <li key={b.id} className="flex items-start gap-3">
                    <div className="w-12 h-8 rounded-md overflow-hidden relative bg-[#061018]">
                      {b.cover ? (
                        <Image src={b.cover} alt={b.title} fill className="object-cover" />
                      ) : null}
                    </div>
                    <div className="flex-1">
                      <a href="#" className="text-sm font-medium hover:underline">
                        {b.title}
                      </a>
                      <div className="text-xs text-slate-400 flex items-center gap-2 mt-1">
                        <User className="w-3 h-3" />
                        <span>{b.author}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <h5 className="font-semibold mb-2">Subscribe to newsletter</h5>
                <form className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      aria-label="Your email"
                      placeholder="your@email.com"
                      className="w-full rounded-xl py-3 px-4 bg-[rgba(255,255,255,0.02)] placeholder:text-slate-500 outline-none border border-transparent focus:border-[#02FF95] focus:ring-4 focus:ring-[rgba(2,255,149,0.06)] shadow-[0_6px_20px_rgba(2,255,149,0.03)] transition"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-60">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 8.5L12 13L21 8.5" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <button className="px-4 py-3 rounded-xl font-semibold text-black bg-[#02FF95] hover:shadow-[0_12px_40px_rgba(2,255,149,0.16)] transition">Join</button>
                </form>
              </div>
            </div>

            <div className="mt-6 rounded-2xl p-5 bg-[rgba(255,255,255,0.01)] border border-[rgba(255,255,255,0.02)]">
              <h5 className="font-semibold mb-3">Tags</h5>
              <div className="flex flex-wrap gap-2">
                {["Design", "React", "Tailwind", "Product", "UX", "API"].map((t) => (
                  <button
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-[rgba(2,255,149,0.02)] border border-[rgba(2,255,149,0.04)] hover:bg-[rgba(2,255,149,0.06)] transition"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-2xl p-5 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)]">
              <h5 className="font-semibold mb-3">About our team</h5>
              <p className="text-sm text-slate-400">We’re a small team crafting digital products — design, frontend, backend, and data.</p>
            </div>
          </aside>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center mt-12 gap-3">
          <button className="px-4 py-2 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)] hover:border-[#02FF95] hover:shadow-[0_10px_30px_rgba(2,255,149,0.06)] transition">Prev</button>
          <div className="px-4 py-2 rounded-xl bg-gradient-to-br from-[rgba(2,255,149,0.08)] to-[rgba(2,255,149,0.04)] border border-[rgba(2,255,149,0.06)] shadow-[0_10px_30px_rgba(2,255,149,0.08)]">1</div>
          <button className="px-4 py-2 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)] hover:border-[#02FF95] hover:shadow-[0_10px_30px_rgba(2,255,149,0.06)] transition">Next</button>
        </div>
      </div>

      {/* Decorative grid dots */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="1" height="1" fill="#071018" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
    </section>
  );
}
