import Layout from "@/components/Layout";
import Section from "@/components/SectionWrapper";

const Terms = () => (
  <Layout>
    <section className="relative overflow-hidden" style={{ paddingTop: "calc(var(--section-py) + 2rem)", paddingBottom: "var(--section-py)" }}>
      <div className="container relative z-10">
        <p className="section-label reveal">Legal</p>
        <h1 className="mt-4 font-display text-h1 font-bold tracking-tight reveal delay-1">Terms of Service</h1>
        <p className="mt-4 text-sm text-muted-foreground reveal delay-2">Last updated: April 11, 2026</p>
      </div>
    </section>

    <Section>
      <article className="max-w-3xl mx-auto prose-custom space-y-10">
        <div className="reveal">
          <h2 className="font-display text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground leading-relaxed">By accessing and using this website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website. These terms apply to all visitors, users, and others who access or use the site.</p>
        </div>

        <div className="reveal delay-1">
          <h2 className="font-display text-xl font-semibold mb-4">2. Use of Website</h2>
          <p className="text-muted-foreground leading-relaxed">You agree to use this website only for lawful purposes and in accordance with these terms. You must not use the site in any way that could damage, disable, or impair it, or interfere with any other party's use of the website. Unauthorized use may give rise to a claim for damages and/or be a criminal offense.</p>
        </div>

        <div className="reveal delay-2">
          <h2 className="font-display text-xl font-semibold mb-4">3. Intellectual Property</h2>
          <p className="text-muted-foreground leading-relaxed">All content on this website — including text, graphics, logos, images, audio, video, and software — is the property of Ritesh Watts or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without prior written consent.</p>
        </div>

        <div className="reveal delay-3">
          <h2 className="font-display text-xl font-semibold mb-4">4. Speaking Engagements</h2>
          <p className="text-muted-foreground leading-relaxed">Inquiries submitted through the speaking inquiry form are not binding. All speaking engagements are subject to availability, mutual agreement on terms, and a formal written agreement. Fees, travel arrangements, and other details will be discussed and confirmed separately.</p>
        </div>

        <div className="reveal">
          <h2 className="font-display text-xl font-semibold mb-4">5. User Submissions</h2>
          <p className="text-muted-foreground leading-relaxed">Any information, feedback, or materials you submit through forms on this website become the property of Ritesh Watts. We are free to use any ideas, concepts, or techniques contained in such submissions for any purpose, including developing, manufacturing, and marketing products or services.</p>
        </div>

        <div className="reveal delay-1">
          <h2 className="font-display text-xl font-semibold mb-4">6. Disclaimers</h2>
          <p className="text-muted-foreground leading-relaxed">This website and its content are provided "as is" without warranties of any kind, either express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses. Any reliance on information provided on this site is at your own risk. Content is for informational purposes only and does not constitute professional advice.</p>
        </div>

        <div className="reveal delay-2">
          <h2 className="font-display text-xl font-semibold mb-4">7. Limitation of Liability</h2>
          <p className="text-muted-foreground leading-relaxed">To the fullest extent permitted by law, Ritesh Watts shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the website. Our total liability shall not exceed the amount paid by you, if any, for accessing the website.</p>
        </div>

        <div className="reveal delay-3">
          <h2 className="font-display text-xl font-semibold mb-4">8. External Links</h2>
          <p className="text-muted-foreground leading-relaxed">This website may contain links to third-party websites that are not owned or controlled by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites. Visiting external links is at your own risk.</p>
        </div>

        <div className="reveal">
          <h2 className="font-display text-xl font-semibold mb-4">9. Modifications</h2>
          <p className="text-muted-foreground leading-relaxed">We reserve the right to modify or replace these Terms of Service at any time. Changes will be effective immediately upon posting on this page. Your continued use of the website following the posting of revised terms constitutes acceptance of those changes.</p>
        </div>

        <div className="reveal delay-1">
          <h2 className="font-display text-xl font-semibold mb-4">10. Governing Law</h2>
          <p className="text-muted-foreground leading-relaxed">These terms shall be governed by and construed in accordance with applicable laws. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the relevant courts.</p>
        </div>

        <div className="reveal delay-2">
          <h2 className="font-display text-xl font-semibold mb-4">11. Contact</h2>
          <p className="text-muted-foreground leading-relaxed">If you have any questions about these Terms of Service, please reach out through our <a href="/contact" className="text-gold hover:underline">Contact page</a>.</p>
        </div>
      </article>
    </Section>
  </Layout>
);

export default Terms;
