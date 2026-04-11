import Layout from "@/components/Layout";
import Section from "@/components/SectionWrapper";
import Card3D from "@/components/Card3D";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Mic, Brain, Globe, Palette, Building2, Target } from "lucide-react";
import podcastImg from "@/assets/media-podcast.jpg";

const topicsCovered = [
  "Entrepreneurship and Founder Lessons",
  "AI and Digital Leverage for Business",
  "Immigration and Global Mobility",
  "Content, Influence, and Personal Branding",
  "Real Estate and Wealth-Building",
  "Mindset, Decision-Making, and Long-Term Vision",
];

const Media = () => (
  <Layout>
    {/* Hero with parallax */}
    <section className="relative flex items-end min-h-[50vh] overflow-hidden">
      <div className="parallax-bg">
        <img src={podcastImg} alt="" width={1920} height={1080} className="opacity-25" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] via-[hsl(var(--background)/0.6)] to-[hsl(var(--background)/0.3)]" />
      <div className="ambient-glow w-[500px] h-[500px] bg-gold/5 -top-20 -right-20" />
      <div className="container relative z-10 pb-16">
        <p className="section-label reveal mt-6 sm:mt-0">Podcast & Media</p>
        <h1 className="mt-4 font-display text-h1 font-bold tracking-tight reveal delay-1">
          Media & <span className="text-shimmer">Podcast</span>
        </h1>
        <p className="mt-4 text-gold text-sm font-medium reveal delay-2">Real with Ritesh — conversations, clips, and stories for ambitious builders.</p>
        <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed reveal delay-3">
          The media platform for practical conversations that go beyond surface-level inspiration. Featuring founders, creators, operators, investors, and experts with real traction and ideas worth sharing.
        </p>
      </div>
    </section>

    <Section>
      <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 items-center">
        <div className="reveal-left">
          <p className="section-label">About the Show</p>
          <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">About Real with Ritesh</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Designed to surface practical ideas, real stories, and useful insights that help ambitious people think better and grow better.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Topics include founder mindset, AI for business, immigration and cross-border opportunity, wealth-building, and personal growth.
          </p>
        </div>
        <div className="reveal-right">
          <Card3D className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface-secondary))] p-10 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center">
                <Mic size={22} className="text-gold" />
              </div>
              <div>
                <p className="font-display font-semibold text-lg">Real with Ritesh</p>
                <p className="text-xs text-muted-foreground">Podcast · Conversations · Clips</p>
              </div>
            </div>
            <div className="space-y-4">
              {["Practical over inspirational", "Stories from real operators", "Ideas worth sharing"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="h-5 w-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <ArrowRight size={10} className="text-gold" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </Card3D>
        </div>
      </div>
    </Section>

    <Section className="bg-[hsl(var(--surface-secondary))]">
      <div className="text-center max-w-2xl mx-auto reveal">
        <p className="section-label">Topics</p>
        <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">Topics Covered</h2>
      </div>
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-list reveal">
        {[
          { icon: Target, label: "Entrepreneurship and Founder Lessons" },
          { icon: Brain, label: "AI and Digital Leverage for Business" },
          { icon: Globe, label: "Immigration and Global Mobility" },
          { icon: Palette, label: "Content, Influence, and Personal Branding" },
          { icon: Building2, label: "Real Estate and Wealth-Building" },
          { icon: Mic, label: "Mindset, Decision-Making, and Long-Term Vision" },
        ].map(({ icon: Icon, label }) => (
          <Card3D key={label} className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] p-8 group">
            <div className="h-11 w-11 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300">
              <Icon size={20} className="text-gold" />
            </div>
            <p className="font-display font-medium text-sm leading-relaxed group-hover:text-gold transition-colors duration-300">{label}</p>
          </Card3D>
        ))}
      </div>
    </Section>

    <Section>
      <div className="reveal">
        <p className="section-label">Connect</p>
        <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">Two Ways to Connect</h2>
      </div>
      <div className="mt-16 grid gap-px bg-[hsl(var(--border))] md:grid-cols-2 rounded-lg overflow-hidden">
        <div className="bg-background p-10 md:p-12 reveal-left delay-1 group card-hover">
          <h3 className="font-display text-xl font-semibold group-hover:text-gold transition-colors duration-300">Invite Ritesh to Your Podcast</h3>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">If Ritesh is a fit for your show, audience, or media platform, submit an invitation with the format, topic, and audience details.</p>
          <Link to="/media/invite" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-gold transition-colors group/link link-underline">
            Invite Ritesh <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-0.5" />
          </Link>
        </div>
        <div className="bg-background p-10 md:p-12 reveal-right delay-2 group card-hover">
          <h3 className="font-display text-xl font-semibold group-hover:text-gold transition-colors duration-300">Apply to Be a Guest</h3>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">Founders, creators, operators, investors, and experts with valuable stories and practical insight are welcome to apply.</p>
          <Link to="/media/apply" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-gold transition-colors group/link link-underline">
            Apply as Guest <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </Section>

    <Section className="bg-[hsl(var(--surface-secondary))] overflow-hidden">
      <div className="reveal text-center max-w-3xl mx-auto">
        <p className="section-label">Episodes</p>
        <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">Featured Episodes</h2>
        <p className="mt-4 text-muted-foreground">Episodes coming soon. Stay tuned.</p>
      </div>
      <div className="mt-12 overflow-hidden">
        <div className="flex gap-6 w-max animate-[marquee-scroll_25s_linear_infinite] hover:[animation-play-state:paused]">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-[340px] shrink-0 rounded-2xl overflow-hidden border border-[hsl(var(--border))] bg-[hsl(var(--background))] group cursor-pointer">
              <div className="aspect-video bg-[hsl(var(--surface-tertiary))] flex items-center justify-center relative">
                <Play size={36} className="text-muted-foreground/20 group-hover:text-gold/60 transition-all duration-300 group-hover:scale-125" />
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold group-hover:text-gold transition-colors duration-300">Episode {i + 1} — Coming Soon</h3>
                <p className="mt-2 text-xs text-muted-foreground">Stay tuned for new episodes of Real with Ritesh.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  </Layout>
);

export default Media;
