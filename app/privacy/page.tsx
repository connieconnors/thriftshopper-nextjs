export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif font-bold mb-8" style={{ color: "#000080" }}>
          Privacy Notice
        </h1>
        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-muted-foreground mb-6">
            <strong>Effective Date:</strong> September 1, 2025
          </p>

          <div className="mb-6">
            <strong>Purpose:</strong> This Privacy Notice explains how ThriftShopper ("we", "our") collects, uses, and
            protects personal information when you visit our website or subscribe to our newsletter.
          </div>

          <p>
            ThriftShopper respects your privacy and aims to be transparent about our data practices in compliance with
            laws like the EU's GDPR and California's CCPA. We collect only what we need (email addresses and basic usage
            data) and never sell your personal information.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Email Address:</strong> You provide this when subscribing to our newsletter. It is used only to
              send the newsletter and related updates.
            </li>
            <li>
              <strong>Usage Data:</strong> We automatically collect non-personal technical data about how you use our
              site/newsletter (for example, which pages or links you click). We use Google Analytics (and cookies) to
              gather this data.
            </li>
            <li>
              <strong>Other Data:</strong> We do not collect sensitive information (like health, financial, or
              government ID). We do not collect any personal data beyond your email and the usage metadata noted above.
            </li>
          </ul>
          <p>
            We do not knowingly collect information from children under age 16. Our services are intended for adults; if
            you are under 16, please do not subscribe or provide us with personal data.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Sending the Newsletter:</strong> We use your email to deliver the newsletter and any subscription
              confirmations or customer support emails. This is done with your consent when you sign up.
            </li>
            <li>
              <strong>Improving Our Service:</strong> We use analytics data (through Google Analytics) to understand how
              readers engage with our content, so we can improve the site and newsletter.
            </li>
            <li>
              <strong>Legal and Security:</strong> We may use information for legal reasons (e.g., to comply with laws
              or defend our rights) and to prevent fraud or spam.
            </li>
          </ul>
          <p>
            We do not use your email or activity data for any purpose other than those stated here (sending the
            newsletter and improving content).
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Sharing and Disclosure</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Service Providers:</strong> We use third-party services to operate our newsletter and website.
              These providers are data processors that act on our behalf.
            </li>
            <li>
              <strong>Aggregated Statistics:</strong> We may share aggregated, de-identified data. This data is
              anonymized and cannot be traced back to any individual.
            </li>
            <li>
              <strong>Legal Requests:</strong> We will only share personal data if required by law (e.g., a court
              order).
            </li>
          </ul>
          <p>
            We never sell your email or personal data. We only share what is necessary for the ThriftShopper marketplace
            that you have opted into.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Cookies and Tracking</h2>
          <p>
            We use cookies and similar technologies for Google Analytics. Cookies are small data files stored on your
            browser. They help us count visitors and see how readers use our site. You can disable cookies through your
            browser settings if you prefer; however, this may limit functionality.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Data Security and Retention</h2>
          <p>
            We take reasonable precautions to protect your data. We store information on secure servers and limit access
            to authorized personnel. We use encryption (HTTPS) for data in transit.
          </p>
          <p>
            We retain your email address as long as you remain subscribed. If you unsubscribe or request deletion, we
            will promptly remove your email from our lists.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Your Rights</h2>
          <p>Depending on your location, you have certain data privacy rights under applicable law:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>EU/UK (GDPR):</strong> You have the right to access, correct, delete, restrict, object to
              processing, and request portability of your data.
            </li>
            <li>
              <strong>California (CCPA/CPRA):</strong> California residents have the right to know what personal
              information is collected, used, and shared about them. They can request access to or deletion of their
              personal data.
            </li>
            <li>
              <strong>Other Regions:</strong> If local privacy laws apply, you have similar rights to those above.
            </li>
          </ul>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Changes to This Privacy Notice</h2>
          <p>
            We may update this Privacy Notice from time to time. The "Effective Date" above tells you when it was last
            revised. If we make material changes, we will notify subscribers by email or prominent notice on the site.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Contact Us</h2>
          <p>
            For questions about this notice, data access/deletion requests, or any privacy concerns, please contact us
            at:{" "}
            <a href="mailto:connie@thriftshopper.ai" className="text-primary hover:underline">
              connie@thriftshopper.ai
            </a>
          </p>

          <p className="text-sm text-muted-foreground mt-8">Last updated: September 1, 2025</p>
        </div>
      </div>
    </div>
  )
}
