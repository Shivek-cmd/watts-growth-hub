import Layout from "@/components/Layout";
import Section from "@/components/SectionWrapper";
import Card3D from "@/components/Card3D";
import { Award, ExternalLink, ArrowRight } from "lucide-react";
import bgAbout from "@/assets/bg-about.jpg";

const companies = [
  { title: "Watts Group", text: "A broader business platform supporting growth, strategic development, and long-term opportunity creation across consulting, technology, marketing, jobs, and training." },
  { title: "Watts Immigration", text: "A licensed immigration-focused offering built around trusted guidance, professional RCIC expertise, and practical client outcomes." },
  { title: "Aifyze", text: "An AI-driven growth and leverage platform focused on helping businesses move faster and work smarter through automation and modern digital execution." },
  { title: "Watts Technologies", text: "A specialized AI division focused on enabling practical AI adoption and deployment across industries including healthcare, finance, manufacturing, and education." },
];

const achievements = [
  "Top 100 Influential Persons — Entrepreneur Stories",
  "Top 14 Collegepreneurs — GoldNib Fellowship",
  "India 500 Startup Awards 2019 — Nominee",
  "Author, The DOER Mindset — Amazon Bestseller",
];

const asSeenIn = [
  { name: "CSR Times", url: "https://csrtimes.org" },
  { name: "Media Bulletins", url: "http://mediabulletins.com" },
  { name: "Business News This Week", url: "http://businessnewsthisweek.com" },
  { name: "Chandigarh City News", url: "https://www.chandigarhcitynews.com" },
  { name: "Online Media Cafe", url: "https://onlinemediacafe.com" },
  { name: "News Net Now", url: "https://www.newsnetnow.com" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/riteshwatts" },
];

const BrandsVentures = () => (
  <Layout>
    <section className="relative flex items-end min-h-[50vh] overflow-hidden">
      <div className="parallax-bg">
        <img src={bgAbout} alt="" width={1920} height={1080} className="opacity-15" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] via-[hsl(var(--background)/0.7)] to-transparent" />
      <div className="ambient-glow w-[500px] h-[500px] bg-gold/5 -top-20 -left-20" />
      <div className="container relative z-10 pb-16">
        <p className="section-label reveal">Portfolio</p>
        <h1 className="mt-4 font-display text-h1 font-bold tracking-tight reveal delay-1">
          Brands & <span className="text-shimmer">Ventures</span>
        </h1>
        <p className="mt-4 text-gold text-sm font-medium reveal delay-2">Companies · Partnerships · Strategic Platforms</p>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl reveal delay-3">
          A founder-led network of businesses, ventures, partnerships, and strategic platforms.
        </p>
      </div>
    </section>

    <Section>
      <div className="text-center max-w-3xl mx-auto reveal">
        <p className="section-label">Companies</p>
        <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">Companies Ritesh Owns</h2>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {companies.map((c, i) => (
          <Card3D key={c.title} className={`card-glow rounded-2xl p-8 md:p-10 reveal delay-${Math.min(i + 1, 5)} group`}>
            <div className="absolute -top-4 -right-2 font-display text-[6rem] font-bold leading-none text-foreground/[0.03] group-hover:text-gold/[0.06] transition-colors duration-700 select-none pointer-events-none">
              0{i + 1}
            </div>
            <div className="relative z-10">
              <h3 className="font-display text-xl font-semibold group-hover:text-gold transition-colors duration-300">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.text}</p>
              <div className="card-reveal-content">
                <button className="mt-4 text-sm font-medium text-foreground hover:text-gold transition-colors flex items-center gap-1.5 group/link link-underline">
                  Visit {c.title} <ExternalLink size={13} className="transition-transform group-hover/link:translate-x-0.5" />
                </button>
              </div>
            </div>
          </Card3D>
        ))}
      </div>
    </Section>

    <Section className="bg-[hsl(var(--surface-secondary))]">
      <div className="text-center max-w-3xl mx-auto reveal">
        <p className="section-label">Partners</p>
        <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">Brands Ritesh Works With</h2>
        <p className="mt-6 text-muted-foreground leading-relaxed mx-auto" style={{ maxWidth: "72ch" }}>
          Ritesh partners with and promotes select brands that align with his values and audience. These are brands he has vetted, uses personally, or has a formal affiliate relationship with.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { name: "Partner Brand 1", desc: "Premium tools and services for modern founders.", link: "#" },
          { name: "Partner Brand 2", desc: "AI-powered solutions for business automation.", link: "#" },
          { name: "Partner Brand 3", desc: "Cross-border financial services and advisory.", link: "#" },
          { name: "Partner Brand 4", desc: "Professional development and executive coaching.", link: "#" },
          { name: "Partner Brand 5", desc: "Digital marketing and growth platform.", link: "#" },
          { name: "Partner Brand 6", desc: "Real estate investment and advisory.", link: "#" },
        ].map((p, i) => (
          <Card3D key={p.name} className={`card-glow rounded-2xl p-8 reveal delay-${Math.min(i + 1, 5)} group`}>
            <div className="h-12 w-12 rounded-xl bg-[hsl(var(--surface-tertiary))] flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors duration-300">
              <span className="font-display text-lg font-bold text-muted-foreground group-hover:text-gold transition-colors">{p.name.split(" ").pop()}</span>
            </div>
            <h3 className="font-display text-lg font-semibold group-hover:text-gold transition-colors duration-300">{p.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            <div className="card-reveal-content">
              <a href={p.link} className="mt-4 text-sm font-medium text-foreground hover:text-gold transition-colors flex items-center gap-1.5 link-underline">
                Learn More <ArrowRight size={13} />
              </a>
            </div>
          </Card3D>
        ))}
      </div>
    </Section>

    <Section>
      <div className="max-w-2xl reveal">
        <p className="section-label">Recognition</p>
        <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">Recognition & Achievements</h2>
        <div className="mt-10 space-y-5 stagger-list reveal">
          {achievements.map((a) => (
            <div key={a} className="flex items-center gap-4">
              <Award size={18} className="shrink-0 text-gold" />
              <span className="text-muted-foreground">{a}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>

    <Section className="bg-[hsl(var(--surface-secondary))] overflow-hidden">
      <div className="reveal">
        <p className="section-label text-center">Press</p>
        <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight text-center">As Seen In</h2>
      </div>
      <div className="mt-12 overflow-hidden">
        <div className="flex gap-16 w-max animate-[marquee-scroll_30s_linear_infinite]">
          {[...asSeenIn, ...asSeenIn].map((item, i) => (
            <a
              key={`${item.name}-${i}`}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-display font-semibold text-muted-foreground/40 hover:text-gold transition-colors duration-300 whitespace-nowrap"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </Section>
  </Layout>
);

export default BrandsVentures;
