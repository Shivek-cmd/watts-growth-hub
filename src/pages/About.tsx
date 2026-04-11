import Layout from "@/components/Layout";
import Section from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import bgAbout from "@/assets/bg-about.jpg";
import riteshCollage from "@/assets/ritesh-collage.png";

const beliefs = [
  "Growth should be strategic, not random.",
  "AI should create leverage, not noise.",
  "Immigration decisions should be guided by trust and long-term thinking.",
  "Personal brands should be built on substance and consistency.",
  "Business should create freedom, impact, and opportunity.",
  "Wealth is built through multiple pillars — business, real estate, and personal growth.",
];

const credentials = [
  "President, Watts Group Ltd. Canada",
  "Commissionaire of Oaths, Alberta",
  "Member, College of Immigration and Citizenship Consultants (CICC)",
  "Author, The DOER Mindset",
];

const values = [
  { title: "Family", text: "A father and partner who prioritizes long-term relationships and presence." },
  { title: "Discipline", text: "Daily routines, structured work, and intentional time management." },
  { title: "Faith", text: "Meditation, devotion, and inner clarity as the foundation of outer execution." },
  { title: "Service", text: "Building in a way that creates opportunity for others." },
  { title: "Long-Term Thinking", text: "Decisions made for 10 years, not 10 days." },
];

const About = () => (
  <Layout>
    {/* Hero with parallax */}
    <section className="relative flex items-end min-h-[50vh] overflow-hidden">
      <div className="parallax-bg">
        <img src={bgAbout} alt="" width={1920} height={1080} className="opacity-15" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] via-[hsl(var(--background)/0.7)] to-transparent" />
      <div className="ambient-glow w-[500px] h-[500px] bg-primary/10 -top-20 -right-20" />
      <div className="container relative z-10 pb-16">
        <p className="section-label reveal">About</p>
        <h1 className="mt-4 font-display text-h1 font-bold tracking-tight reveal delay-1">
          About Ritesh <span className="text-shimmer">Watts</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl reveal delay-2">
          Author, Entrepreneur, Investor, and Speaker building ideas, ventures, and media that help ambitious people think bigger and move smarter.
        </p>
      </div>
    </section>

    {/* Journey */}
    <section className="relative overflow-hidden" style={{ paddingTop: "var(--section-py)", paddingBottom: "var(--section-py)" }}>
      {/* Full-bleed image on the right */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[40%]" style={{ animation: "img-scale-in 1.4s var(--ease-out) both" }}>
        <img src={riteshCollage} alt="Ritesh Watts — speaking, events, book launch, and community impact" width={840} height={560} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--background))] via-[hsl(var(--background)/0.35)] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] via-transparent to-transparent opacity-40" />
      </div>
      <div className="container relative z-10">
        <div className="max-w-2xl reveal-left">
          <p className="section-label">The Journey</p>
          <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">The Journey</h2>
          <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed" style={{ maxWidth: "72ch" }}>
            <p>Ritesh Watts is an Indian-Canadian entrepreneur, author, and licensed immigration professional with a multi-dimensional platform built around growth, opportunity, and modern leverage. His work reflects a founder mindset: build strategically, serve meaningfully, and create systems that compound over time.</p>
            <p>Ritesh's entrepreneurial journey began in his university years, when he started promoting education and impacting students at scale through tech-focused sessions and workshops across India. Over time, that early momentum evolved into a wider business ecosystem spanning services, training, technology, marketing, AI, and strategic business initiatives across India and Canada.</p>
            <p>Today, Ritesh operates as President of Watts Group Ltd. Canada, overseeing a portfolio of service-driven businesses including a specialized AI division powered by Watts Technologies. His activities span consulting, global settlements, technology, marketing, jobs, and training across Canada and India.</p>
            <p>Through his companies, media, and consulting work, Ritesh operates in founder, advisor, strategist, and investor roles — building a long-term platform that connects services, ideas, relationships, and audience trust.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Beliefs */}
    <Section className="bg-[hsl(var(--surface-secondary))]">
      <div className="max-w-2xl mx-auto text-center reveal">
        <p className="section-label">Philosophy</p>
        <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">What He Believes</h2>
        <ul className="mt-10 space-y-5 stagger-list reveal text-left inline-block">
          {beliefs.map((b, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
              <span className="text-muted-foreground">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>

    {/* What He Builds */}
    <Section>
      <div className="max-w-3xl mx-auto text-center reveal">
        <p className="section-label">Ecosystem</p>
        <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">What He Builds</h2>
        <p className="mt-6 text-muted-foreground leading-relaxed mx-auto" style={{ maxWidth: "72ch" }}>
          Across his personal brand and business ecosystem, Ritesh operates through a network of companies and initiatives designed to create growth, service, and opportunity across multiple domains.
        </p>
        <Button variant="hero" size="lg" asChild className="mt-8 btn-magnetic">
          <Link to="/brands-ventures">Explore Brands & Ventures <ArrowRight size={15} className="ml-1.5" /></Link>
        </Button>
      </div>
    </Section>

    {/* Credentials */}
    <Section className="bg-[hsl(var(--surface-secondary))]">
      <div className="max-w-2xl mx-auto text-center reveal">
        <p className="section-label">Credentials</p>
        <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">Credentials & Affiliations</h2>
        <ul className="mt-10 space-y-4 stagger-list reveal text-left inline-block">
          {credentials.map((c, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              <span className="text-muted-foreground">{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>

    {/* Values */}
    <Section>
      <div className="max-w-3xl mx-auto text-center reveal">
        <p className="section-label">Values</p>
        <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">Personal Values</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {values.map((v, i) => (
            <div key={v.title} className={`reveal delay-${Math.min(i + 1, 5)}`}>
              <h3 className="font-display text-lg font-semibold text-gold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>

    {/* CTA */}
    <Section className="bg-[hsl(var(--surface-secondary))]">
      <div className="text-center reveal-scale">
        <Button variant="hero" size="lg" asChild className="btn-magnetic">
          <Link to="/contact">Work With Ritesh <ArrowRight size={15} className="ml-1.5" /></Link>
        </Button>
      </div>
    </Section>
  </Layout>
);

export default About;
