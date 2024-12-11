/* eslint-disable */

import Link from "next/link";

export default function Terms() {
  return (
    <div className="content">
      <div className="container">
        <h2>Terms of Service</h2>
        <h2>1. Access and Registration</h2>
        <p>
          To access our platform, you may need to create an account ("Account").
          When registering, you must provide accurate and up-to-date information
          and safeguard your password. You are fully responsible for your
          interactions with other users. We do not conduct background checks on
          users, so exercise caution when sharing personal information. You can
          update your profile at any time to ensure its accuracy. Sharing
          contact details is at your own discretion. For more on how we handle
          your data, refer to our Privacy Policy.
        </p>

        <h2>2. Subscriptions and Billing</h2>
        <p>
          We offer subscription plans ("Subscription") to unlock additional
          features. Details about available plans are provided on our platform.
          Current options include 1-day access for $1.00 and monthly
          subscriptions for $59.99. Subscriptions auto-renew monthly unless
          cancelled. Payments are processed at the end of the current billing
          period using the same payment method initially provided. Renewal
          confirms the continuation of your subscription under the original
          terms. We’ll notify you in advance of any pricing changes. Continued
          use after a price adjustment signifies your agreement to the new
          terms.
        </p>

        <h2>3. Cancellation and Termination</h2>
        <p>
          You may cancel your 1-day or monthly subscription anytime via the “My
          Account” section, the Subscription Cancellation form, or by contacting
          Support. Refunds for partial months or unused services are not
          available. Cancelled subscriptions remain active until the current
          billing cycle ends. We reserve the right to terminate your account
          without notice for breaching these Terms, with no refunds provided.
          Upon termination, all rights under these Terms, except those intended
          to survive, will cease.
        </p>

        <h2>4. User Obligations</h2>
        <p>By using our platform, you agree to:</p>
        <ul>
          <li>Avoid illegal activities or violating these Terms.</li>
          <li>
            Refrain from impersonating others or sharing content without
            permission.
          </li>
          <li>Not request money or deceive other users.</li>
          <li>
            Avoid sharing harmful, harassing, explicit, discriminatory, or
            misleading content.
          </li>
          <li>
            Not spam, promote unauthorized materials, or infringe on others'
            privacy. You confirm you are at least 18 years old and legally
            permitted to agree to these Terms. Accounts are non-transferable,
            and you are responsible for any breaches. You agree to indemnify the
            Company against claims or damages, including legal fees, arising
            from violations of these Terms or third-party rights.
          </li>
        </ul>

        <h2>5. Content and External Links</h2>
        <p>
          Users may submit content such as suggestions or questions, provided it
          does not violate any laws or infringe on rights. We reserve the right
          to remove inappropriate content. Content submitted to our email
          becomes the Company’s property. Our platform may include links to
          third-party websites, but we do not endorse or take responsibility for
          their content or practices. Use external links at your own risk and
          review their policies.
        </p>

        <h2>6. Responsibilities</h2>
        <p>
          Our platform is provided “as is,” without warranties of any kind. We
          do not guarantee uninterrupted or error-free services. Users are
          responsible for their safety and the content they share. Misconduct
          can be reported to{" "}
          <Link href="mailto:help@appsscore.com">
            <b>help@appsscore.com</b>
          </Link>
          .
        </p>

        <h2>7. Intellectual Property</h2>
        <p>
          All intellectual property on the platform belongs to the Company or is
          licensed for use. You may download or print content for personal use
          but may not alter or use it for commercial purposes without written
          consent.
        </p>
        <h2>8. Disclaimer and Limitation of Liability</h2>
        <p>
          We disclaim all warranties and are not liable for any damages arising
          from the use of our platform, whether direct or indirect. Certain
          jurisdictions may have laws that limit these disclaimers.
        </p>
        <h2>9. Indemnity</h2>
        <p>
          Users agree to indemnify the Company and its affiliates against
          claims, damages, or losses resulting from platform use or breaches of
          these Terms.
        </p>
        <h2>10. Miscellaneous</h2>
        <p>
          These Terms represent the entire agreement between you and the
          Company. If any provision is deemed invalid, the remaining Terms
          remain enforceable. The Terms are governed by the laws of the United
          Kingdom, and disputes are subject to the jurisdiction of UK courts.
          Changes to the Terms may be made at any time and will be communicated
          through the platform or via email.
        </p>
        <h2>11. Complaints and Dispute Resolution</h2>
        <p>
          Complaints should be sent to{" "}
          <Link href="mailto:help@appsscore.com">
            <b>help@appsscore.com</b>
          </Link>
          . We aim to resolve issues within 15 business days. If unresolved
          after 60 days, disputes may be escalated to UK courts. Claims must be
          filed within one year of the incident.
        </p>
        <h2>12. Contact Information</h2>
        <p>
          For questions or concerns regarding these Terms, contact us:{" "}
          <Link href="mailto:help@appsscore.com">
            <b>help@appsscore.com</b>
          </Link>{" "}
          |{" "}
          <Link href="tel:+18882349184">
            <b>+18882349184</b>
          </Link>
        </p>
      </div>
    </div>
  );
}
