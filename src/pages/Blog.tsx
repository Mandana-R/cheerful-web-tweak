import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    image: "/assets/homepage Hero.jpg",
    category: "Industry",
    categoryColor: "emerald",
    date: "Dec 20, 2025",
    title: "Why Transparent Pricing is the Future of Expedited Freight",
    excerpt: "The traditional broker model is built on hidden markups. Here's why that's changing—and what it means for shippers and carriers.",
  },
  {
    image: "/assets/16_footer.jpg",
    category: "Carrier Tips",
    categoryColor: "default",
    date: "Dec 18, 2025",
    title: "Maximizing Your Earnings as an Expedited Carrier",
    excerpt: "From choosing the right lanes to leveraging QuickPay, here are strategies to boost your bottom line in expedited freight.",
  },
  {
    image: "/assets/Inside the Dock.jpg",
    category: "Shipper Guides",
    categoryColor: "default",
    date: "Dec 15, 2025",
    title: "Line-Down Recovery: Best Practices for Automotive Shippers",
    excerpt: "When production stops, every minute counts. Learn how to work with expedited carriers to minimize downtime costs.",
  },
  {
    image: "/assets/Cargo_van.jpg",
    category: "Platform Updates",
    categoryColor: "default",
    date: "Dec 12, 2025",
    title: "New: Same-Day QuickPay Now Available",
    excerpt: "We've expanded our payment options. Carriers can now get paid the same day at just 3%—no more waiting on slow payments.",
  },
  {
    image: "/assets/Ford Cargo van.jpg",
    category: "Industry",
    categoryColor: "default",
    date: "Dec 8, 2025",
    title: "2026 Broker Bond Rule Changes: What You Need to Know",
    excerpt: "New FMCSA regulations reduce the grace period for bond lapses to just 7 days. Here's how to stay compliant.",
  },
  {
    image: "/assets/Full size Van.jpg",
    category: "Carrier Tips",
    categoryColor: "default",
    date: "Dec 5, 2025",
    title: "Building Your On-Time Rate: Why It Matters",
    excerpt: "Your performance score affects load access and rates. Learn how to improve your on-time delivery percentage.",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-[140px] pb-20">
        <div className="container mx-auto px-6 max-w-[1180px]">
          <div className="text-center mb-12">
            <p className="text-muted-foreground/60 font-bold tracking-widest uppercase text-xs mb-3">Blog</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Insights & Updates</h1>
            <p className="text-muted-foreground text-lg">
              Industry trends, carrier tips, shipper guides, and platform news from the Smart Expedite team.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6 max-w-[1180px]">
          {/* Category Filters */}
          <div className="flex gap-2.5 flex-wrap mb-8 justify-center">
            <span className="inline-flex items-center gap-2.5 border border-emerald/30 bg-emerald/10 px-3.5 py-1.5 rounded-full text-emerald-light text-xs font-semibold">
              All Posts
            </span>
            {["Industry Trends", "Carrier Tips", "Shipper Guides", "Platform Updates"].map((cat) => (
              <span
                key={cat}
                className="inline-flex items-center gap-2.5 border border-white/[0.12] bg-black/25 px-3.5 py-1.5 rounded-full text-muted-foreground text-xs font-semibold cursor-pointer hover:bg-white/[0.04] transition-colors"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Blog Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogPosts.map((post, i) => (
              <Link
                key={i}
                to="#"
                className="border border-white/[0.12] rounded-xl bg-white/[0.03] overflow-hidden transition-all hover:border-emerald/30 hover:-translate-y-1 group"
              >
                <img src={post.image} alt={post.title} className="w-full h-[200px] object-cover" />
                <div className="p-5">
                  <div className="flex gap-3 items-center mb-3">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                        post.categoryColor === "emerald"
                          ? "border border-emerald/30 bg-emerald/10 text-emerald-light"
                          : "border border-white/[0.12] bg-black/25 text-muted-foreground"
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="text-muted-foreground/60 text-xs">{post.date}</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2 leading-tight">{post.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 text-emerald-light font-bold text-sm mt-4 group-hover:gap-2.5 transition-all">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-11">
            <button className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg border border-white/10 bg-white/[0.03] text-white text-sm font-bold transition-all hover:bg-white/[0.06]">
              Load More Posts
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
