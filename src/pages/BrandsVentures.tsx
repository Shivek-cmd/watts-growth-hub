import Layout from "@/components/Layout";
import Section from "@/components/SectionWrapper";
import { ArrowRight, Award, ExternalLink } from "lucide-react";

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
      <div className="ambient-glow w-[500px] h-[500px] bg-gold/5 -top-20 -left-20" />
      <div className="container relative z-10 pb-16">
        <p className="section-label reveal">Portfolio</p>
        <h1 className="mt-4 font-display text-h1 font-bold tracking-tight reveal delay-1">
          Brands & <span className="text-gradient-gold">Ventures</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl reveal delay-2">
          A founder-led network of businesses, ventures, partnerships, and strategic platforms.
        </p>
      </div>
    </section>

    <Section>
      <div className="reveal">
        <p className="section-label">Companies</p>
        <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">Companies Ritesh Owns</h2>
      </div>
      {/* Open space — no cards, just lines */}
      <div className="mt-16 border-t border-[hsl(var(--border))]">
        {companies.map((c, i) => (
          <div key={c.title} className={`border-b border-[hsl(var(--border))] py-10 md:py-12 reveal delay-${Math.min(i + 1, 5)}`}>
            <h3 className="font-display text-xl font-semibold">{c.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xl">{c.text}</p>
            <button className="mt-4 text-sm font-medium text-foreground hover:text-gold transition-colors flex items-center gap-1.5 group">
              Visit {c.title} <ExternalLink size={13} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        ))}
      </div>
    </Section>

    <Section className="bg-[hsl(var(--surface-secondary))]">
      <div className="max-w-3xl reveal">
        <p className="section-label">Partners</p>
        <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">Brands Ritesh Works With</h2>
        <p className="mt-6 text-muted-foreground leading-relaxed" style={{ maxWidth: "72ch" }}>
          Ritesh also partners with and promotes select brands that align with his values and audience. These are brands he has vetted, uses personally, or has a formal affiliate relationship with.
        </p>
        <p className="mt-6 text-sm text-muted-foreground/60 italic">Partner brands coming soon.</p>
      </div>
    </Section>

    <Section>
      <div className="max-w-2xl reveal">
        <p className="section-label">Recognition</p>
        <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">Recognition & Achievements</h2>
        <div className="mt-10 space-y-5">
          {achievements.map((a, i) => (
            <div key={a} className={`flex items-center gap-4 reveal delay-${Math.min(i + 1, 5)}`}>
              <Award size={18} className="shrink-0 text-gold" />
              <span className="text-muted-foreground">{a}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>

    {/* As Seen In — Marquee drift */}
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
              className="text-lg font-display font-semibold text-muted-foreground/40 hover:text-muted-foreground transition-colors whitespace-nowrap"
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
