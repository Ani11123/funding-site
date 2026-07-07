// TODO: Replace placeholder blog posts with real articles when provided by client
// Client will supply: title, excerpt, published date, category, featured image, full article URL

import Image from "next/image";

const posts = [
  {
    category: "Funding Advice",
    title: "How to Choose the Right Funding Option for Your Business",
    excerpt:
      "With so many business finance products available, knowing where to start can feel overwhelming. Here's how to identify the most suitable route for your situation.",
    readTime: "5 min read",
    date: "March 2025",
    // TODO: Replace with client-approved licensed image — target path: public/assets/images/blog/funding-advice.jpg
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Business professionals reviewing funding options in a modern office",
  },
  {
    category: "Cashflow",
    title: "Invoice Finance Explained: Unlock the Cash in Your Invoices",
    excerpt:
      "Many growing businesses don't realise how much working capital is tied up in unpaid invoices. Invoice finance can turn that into immediate liquidity.",
    readTime: "4 min read",
    date: "February 2025",
    // TODO: Replace with client-approved licensed image — target path: public/assets/images/blog/invoice-finance.jpg
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Professional reviewing financial documents and business invoices",
  },
  {
    category: "Growth",
    title: "Asset Finance: Grow Without Draining Your Reserves",
    excerpt:
      "Upgrading equipment or vehicles doesn't have to mean a large upfront outlay. Asset finance lets you spread the cost while the asset earns its keep.",
    readTime: "4 min read",
    date: "January 2025",
    // TODO: Replace with client-approved licensed image — target path: public/assets/images/blog/asset-finance.jpg
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Modern industrial facility representing business asset investment and growth",
  },
];

export default function BlogPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-12">
          <div>
            <p className="inline-flex items-center gap-2 text-[#C76A1B] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              <span className="w-4 h-[2px] bg-[#C76A1B] rounded" />
              Insights
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B2E59] leading-tight tracking-tight">
              Funding Guides &amp; Insights
            </h2>
          </div>
          {/* TODO: Link to full blog page when created */}
          <a
            href="#"
            className="shrink-0 text-[#C76A1B] text-sm font-semibold hover:text-[#a85918] transition-colors inline-flex items-center gap-1.5"
          >
            View all articles
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article
              key={i}
              className="group bg-white border border-slate-200/80 rounded-2xl overflow-hidden card-lift flex flex-col"
            >
              {/* Featured image */}
              <div className="relative h-52 overflow-hidden">
                {/* Inner div isolates the zoom so it doesn't bleed past the card's rounded corners */}
                <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                {/* Gradient ensures category badge always reads clearly over any image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent pointer-events-none" />
                {/* Category badge */}
                <span className="absolute bottom-4 left-4 inline-block bg-[#C76A1B] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full z-10">
                  {post.category}
                </span>
              </div>

              {/* Card content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Meta — date and read time */}
                <div className="flex items-center gap-2.5 mb-3">
                  <time className="text-slate-400 text-xs">{post.date}</time>
                  <span className="w-1 h-1 bg-slate-300 rounded-full shrink-0" />
                  <span className="text-slate-400 text-xs">{post.readTime}</span>
                </div>
                {/* Title */}
                <h3 className="text-[#0B2E59] font-bold text-base leading-snug mb-3 group-hover:text-[#C76A1B] transition-colors duration-200">
                  {post.title}
                </h3>
                {/* Excerpt */}
                <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-3">
                  {post.excerpt}
                </p>
                {/* TODO: Update href to real article URL when blog pages are created */}
                <a
                  href="#"
                  className="mt-auto inline-flex items-center gap-1.5 text-[#C76A1B] text-sm font-semibold hover:gap-3 transition-all duration-200"
                >
                  Read more
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
