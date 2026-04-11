import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

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
    <section className="bg-gradient-hero">
      <div className="container py-24 md:py-32">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl font-black tracking-tight md:text-6xl">About Ritesh <span className="text-gradient-gold">Watts</span></h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Author, Entrepreneur, Investor, and Speaker building ideas, ventures, and media that help ambitious people think bigger and move smarter.
          </p>
        </div>
      </div>
    </section>

    <SectionWrapper>
      <h2 className="text-3xl font-bold md:text-4xl">The Journey</h2>
      <div className="mt-8 max-w-3xl space-y-5 text-muted-foreground leading-relaxed">
        <p>Ritesh Watts is an Indian-Canadian entrepreneur, author, and licensed immigration professional with a multi-dimensional platform built around growth, opportunity, and modern leverage. His work reflects a founder mindset: build strategically, serve meaningfully, and create systems that compound over time.</p>
        <p>Ritesh's entrepreneurial journey began in his university years, when he started promoting education and impacting students at scale through tech-focused sessions and workshops across India. Over time, that early momentum evolved into a wider business ecosystem spanning services, training, technology, marketing, AI, and strategic business initiatives across India and Canada.</p>
        <p>Today, Ritesh operates as President of Watts Group Ltd. Canada, overseeing a portfolio of service-driven businesses including a specialized AI division powered by Watts Technologies. His activities span consulting, global settlements, technology, marketing, jobs, and training across Canada and India.</p>
        <p>Through his companies, media, and consulting work, Ritesh operates in founder, advisor, strategist, and investor roles — building a long-term platform that connects services, ideas, relationships, and audience trust.</p>
      </div>
    </SectionWrapper>

    <SectionWrapper className="bg-gradient-section">
      <h2 className="text-3xl font-bold md:text-4xl">What He Believes</h2>
      <ul className="mt-8 max-w-2xl space-y-4">
        {beliefs.map((b) => (
          <li key={b} className="flex items-start gap-3 text-muted-foreground">
            <Check size={18} className="mt-0.5 shrink-0 text-primary" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </SectionWrapper>

    <SectionWrapper>
      <h2 className="text-3xl font-bold md:text-4xl">What He Builds</h2>
      <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
        Across his personal brand and business ecosystem, Ritesh operates through a network of companies and initiatives designed to create growth, service, and opportunity across multiple domains.
      </p>
      <Button variant="hero" size="lg" asChild className="mt-8">
        <Link to="/brands-ventures">Explore Brands & Ventures <ArrowRight size={16} className="ml-1" /></Link>
      </Button>
    </SectionWrapper>

    <SectionWrapper className="bg-gradient-section">
      <h2 className="text-3xl font-bold md:text-4xl">Credentials & Affiliations</h2>
      <ul className="mt-8 space-y-3">
        {credentials.map((c) => (
          <li key={c} className="flex items-start gap-3 text-muted-foreground">
            <Check size={18} className="mt-0.5 shrink-0 text-secondary" />
            <span>{c}</span>
          </li>
        ))}
      </ul>
    </SectionWrapper>

    <SectionWrapper>
      <h2 className="text-3xl font-bold md:text-4xl">Personal Values</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {values.map((v) => (
          <div key={v.title} className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-lg font-bold text-secondary">{v.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>

    <SectionWrapper className="bg-gradient-section text-center">
      <Button variant="hero" size="lg" asChild>
        <Link to="/contact">Work With Ritesh <ArrowRight size={16} className="ml-1" /></Link>
      </Button>
    </SectionWrapper>
  </Layout>
);

export default About;
