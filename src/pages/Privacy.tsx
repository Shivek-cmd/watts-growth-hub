import Layout from "@/components/Layout";
import Section from "@/components/SectionWrapper";

const Privacy = () => (
  <Layout>
    <section className="relative overflow-hidden" style={{ paddingTop: "calc(var(--section-py) + 2rem)", paddingBottom: "var(--section-py)" }}>
      <div className="container relative z-10">
        <p className="section-label reveal mt-6 sm:mt-0">Legal</p>
        <h1 className="mt-4 font-display text-h1 font-bold tracking-tight reveal delay-1">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground reveal delay-2">Last updated: April 11, 2026</p>
      </div>
    </section>

    <Section>
      <article className="max-w-3xl mx-auto prose-custom space-y-10">
        <div className="reveal">
          <h2 className="font-display text-xl font-semibold mb-4">1. Information We Collect</h2>
          <p className="text-muted-foreground leading-relaxed">We collect information you provide directly, such as your name, email address, phone number, and any other details submitted through our contact forms, speaking inquiry forms, or newsletter sign-up. We also automatically collect certain technical data, including IP address, browser type, device information, and pages visited.</p>
        </div>

        <div className="reveal delay-1">
          <h2 className="font-display text-xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="text-muted-foreground leading-relaxed">We use your information to respond to inquiries and requests, send newsletters and updates you've subscribed to, improve our website and services, analyze website usage and trends, and comply with legal obligations. We do not sell or rent your personal information to third parties.</p>
        </div>

        <div className="reveal delay-2">
          <h2 className="font-display text-xl font-semibold mb-4">3. Cookies and Tracking</h2>
          <p className="text-muted-foreground leading-relaxed">Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze site traffic. You can control cookie preferences through your browser settings. Third-party services such as analytics providers may also place cookies on your device.</p>
        </div>

        <div className="reveal delay-3">
          <h2 className="font-display text-xl font-semibold mb-4">4. Data Sharing</h2>
          <p className="text-muted-foreground leading-relaxed">We may share your information with trusted service providers who assist in operating our website and business (e.g., email platforms, analytics services). These providers are contractually obligated to protect your data. We may also disclose information when required by law or to protect our rights.</p>
        </div>

        <div className="reveal">
          <h2 className="font-display text-xl font-semibold mb-4">5. Data Security</h2>
          <p className="text-muted-foreground leading-relaxed">We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
        </div>

        <div className="reveal delay-1">
          <h2 className="font-display text-xl font-semibold mb-4">6. Your Rights</h2>
          <p className="text-muted-foreground leading-relaxed">Depending on your jurisdiction, you may have the right to access, correct, or delete your personal information, opt out of marketing communications, request data portability, and withdraw consent at any time. To exercise these rights, please contact us using the information below.</p>
        </div>

        <div className="reveal delay-2">
          <h2 className="font-display text-xl font-semibold mb-4">7. Third-Party Links</h2>
          <p className="text-muted-foreground leading-relaxed">Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.</p>
        </div>

        <div className="reveal delay-3">
          <h2 className="font-display text-xl font-semibold mb-4">8. Changes to This Policy</h2>
          <p className="text-muted-foreground leading-relaxed">We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Your continued use of the website after changes are posted constitutes acceptance of the revised policy.</p>
        </div>

        <div className="reveal">
          <h2 className="font-display text-xl font-semibold mb-4">9. Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">If you have questions about this Privacy Policy or your personal data, please reach out through our <a href="/contact" className="text-gold hover:underline">Contact page</a>.</p>
        </div>
      </article>
    </Section>
  </Layout>
);

export default Privacy;
