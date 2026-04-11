import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Check } from "lucide-react";

const companies = [
  { title: "Watts Group", text: "A broader business platform supporting growth, strategic development, and long-term opportunity creation across consulting, technology, marketing, jobs, and training.", cta: "Visit Watts Group" },
  { title: "Watts Immigration", text: "A licensed immigration-focused offering built around trusted guidance, professional RCIC expertise, and practical client outcomes.", cta: "Visit Watts Immigration" },
  { title: "Aifyze", text: "An AI-driven growth and leverage platform focused on helping businesses move faster and work smarter through automation and modern digital execution.", cta: "Visit Aifyze" },
  { title: "Watts Technologies", text: "A specialized AI division focused on enabling practical AI adoption and deployment across industries including healthcare, finance, manufacturing, and education.", cta: "Visit Watts Technologies" },
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
    <section className="bg-gradient-hero">
      <div className="container py-24 md:py-32">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl font-black tracking-tight md:text-6xl">Brands & <span className="text-gradient-gold">Ventures</span></h1>
          <p className="mt-4 text-lg text-muted-foreground">A founder-led network of businesses, ventures, partnerships, and strategic platforms.</p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Ritesh Watts operates through a broader business ecosystem that connects professional services, immigration expertise, growth strategy, AI leverage, and media-led authority.
          </p>
        </div>
      </div>
    </section>

    <SectionWrapper>
      <h2 className="text-3xl font-bold md:text-4xl">Companies Ritesh Owns</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {companies.map((c) => (
          <div key={c.title} className="rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/30">
            <h3 className="text-xl font-bold">{c.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.text}</p>
            <Button variant="link" className="mt-4 h-auto p-0 text-primary text-sm">
              {c.cta} <ExternalLink size={14} className="ml-1" />
            </Button>
          </div>
        ))}
      </div>
    </SectionWrapper>

    <SectionWrapper className="bg-gradient-section">
      <h2 className="text-3xl font-bold md:text-4xl">Brands Ritesh Works With</h2>
      <p className="mt-4 text-muted-foreground max-w-2xl">
        Ritesh also partners with and promotes select brands that align with his values and audience. These are brands he has vetted, uses personally, or has a formal affiliate relationship with.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-6 text-center">
            <div className="h-12 w-12 mx-auto rounded-full bg-muted" />
            <h3 className="mt-4 font-bold text-muted-foreground">Partner Brand</h3>
            <p className="mt-1 text-xs text-muted-foreground">Coming soon</p>
          </div>
        ))}
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <h2 className="text-3xl font-bold md:text-4xl">Recognition & <span className="text-gradient-gold">Achievements</span></h2>
      <div className="mt-8 space-y-4">
        {achievements.map((a) => (
          <div key={a} className="flex items-center gap-3">
            <Award size={20} className="shrink-0 text-secondary" />
            <span className="text-muted-foreground">{a}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>

    <SectionWrapper className="bg-gradient-section">
      <h2 className="text-3xl font-bold md:text-4xl">As Seen In</h2>
      <div className="mt-8 flex flex-wrap gap-4">
        {asSeenIn.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground"
          >
            {item.name}
          </a>
        ))}
      </div>
    </SectionWrapper>
  </Layout>
);

export default BrandsVentures;
