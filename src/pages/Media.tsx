import { useState } from "react";
import Layout from "@/components/Layout";
import Section from "@/components/SectionWrapper";
import Card3D from "@/components/Card3D";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Mic, Brain, Globe, Palette, Building2, Target, Clock, ChevronDown } from "lucide-react";
import podcastImg from "@/assets/media-podcast.jpg";

const featuredEpisodes = [
  {
    id: 1,
    title: "Building AI-First Businesses From the Ground Up",
    guest: "With a Serial AI Founder",
    duration: "48 min",
    tag: "Build",
    youtubeId: "qp0HIF3SfI4",
  },
  {
    id: 2,
    title: "Cross-Border Entrepreneurship: India to Canada",
    guest: "With a Cross-Border Operator",
    duration: "52 min",
    tag: "Move",
    youtubeId: "UF8uR6Z6KLc",
  },
  {
    id: 3,
    title: "The Founder Mindset: Systems, Decisions & Leverage",
    guest: "With a Business Systems Expert",
    duration: "41 min",
    tag: "Build",
    youtubeId: "Lp7E973zozc",
  },
  {
    id: 4,
    title: "Wealth Through Business Ownership, Not Just Savings",
    guest: "With a Real Estate Investor",
    duration: "39 min",
    tag: "Grow",
    youtubeId: "2OfW8vATEKY",
  },
];

const Media = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const scrollToEpisodes = () => {
    document.getElementById("episodes")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      {/* Hero with parallax */}
      <section className="relative flex items-end min-h-[60vh] overflow-hidden">
        <div className="parallax-bg">
          <img src={podcastImg} alt="" width={1920} height={1080} className="opacity-25" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] via-[hsl(var(--background)/0.7)] to-transparent" />
        <div className="ambient-glow w-[500px] h-[500px] bg-gold/5 -top-20 -right-20" />
        <div className="container relative z-10 pb-16">
          <p className="section-label reveal mt-6 sm:mt-0">Podcast & Media</p>
          <h1 className="mt-4 font-display text-h1 font-bold tracking-tight reveal delay-1">
            Media & <span className="text-shimmer">Podcast</span>
          </h1>
          <p className="mt-4 text-gold text-sm font-medium reveal delay-2">Real with Ritesh — conversations, clips, and stories for ambitious builders.</p>
          <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed reveal delay-3">
            The media platform for practical conversations that go beyond surface-level inspiration.
          </p>
          <Button onClick={scrollToEpisodes} variant="hero" size="lg" className="mt-8 btn-magnetic reveal delay-4">
            Watch Episodes <ChevronDown size={16} className="animate-bounce" />
          </Button>
        </div>
      </section>

      {/* About the Show */}
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

      {/* ===== FEATURED EPISODES ===== */}
      {/* ===== FEATURED EPISODES CAROUSEL ===== */}
      <section
        id="episodes"
        className="relative bg-[hsl(var(--surface-secondary))] overflow-hidden"
        style={{ paddingTop: "var(--section-py)", paddingBottom: "var(--section-py)" }}
      >
        <div className="container mb-12 reveal">
          <p className="section-label">Featured Episodes</p>
          <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">Latest Episodes</h2>
          <p className="mt-4 text-muted-foreground">Real conversations with founders, operators, and builders.</p>
        </div>

        {/* Scrolling track — full bleed */}
        <div
          className="overflow-hidden group/track"
          onMouseEnter={() => setPlayingId(playingId)}
        >
          <div
            className="flex gap-6 w-max group-hover/track:[animation-play-state:paused]"
            style={{
              animation: "marquee-scroll 30s linear infinite",
              animationPlayState: playingId ? "paused" : undefined,
            }}
          >
            {[...featuredEpisodes, ...featuredEpisodes].map((ep, i) => (
              <div
                key={`${ep.id}-${i}`}
                className="group w-[320px] shrink-0 rounded-2xl overflow-hidden border border-[hsl(var(--border))] bg-[hsl(var(--background))] hover:border-gold/30 transition-colors duration-300"
              >
                <div className="relative aspect-video overflow-hidden bg-[hsl(var(--surface-tertiary))]">
                  {playingId === `${ep.youtubeId}-${i}` ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${ep.youtubeId}?autoplay=1&rel=0`}
                      title={ep.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  ) : (
                    <>
                      <img
                        src={`https://img.youtube.com/vi/${ep.youtubeId}/mqdefault.jpg`}
                        alt={ep.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-300" />
                      <button
                        onClick={() => setPlayingId(`${ep.youtubeId}-${i}`)}
                        className="absolute inset-0 flex items-center justify-center"
                        aria-label={`Play ${ep.title}`}
                      >
                        <div className="h-12 w-12 rounded-full bg-gold/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Play size={18} className="text-black ml-0.5" fill="black" />
                        </div>
                      </button>
                      <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest bg-gold text-black px-2 py-0.5 rounded-full pointer-events-none">
                        {ep.tag}
                      </span>
                    </>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-display text-sm font-semibold leading-snug group-hover:text-gold transition-colors duration-300 line-clamp-2">
                    {ep.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground">{ep.guest}</p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground/60">
                    <Clock size={11} />
                    {ep.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mt-10 reveal">
          <a
            href="https://www.youtube.com/@RiteshWatts"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-gold transition-colors link-underline"
          >
            View all episodes on YouTube <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* Topics */}
      <Section className="bg-[hsl(var(--background))]">
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

      {/* Connect */}
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
    </Layout>
  );
};

export default Media;
