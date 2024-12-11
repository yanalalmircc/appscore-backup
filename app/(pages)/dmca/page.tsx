import Link from "next/link";

export default function DMCA() {
  return (
    <div className="content">
      <div className="container">
        <h2>DISCLAIMER</h2>
        <p>Copyright © 2024 – thecontentcollection.com</p>
        <b>
          <p>Disclaimer</p>
        </b>
        <p>
          Appsscore.com offers subscription-based health and lifestyle services
          with automatic renewal. By subscribing, you agree to our terms and
          conditions. Offer and Billing Terms: Start with a 1-day trial for
          $1.00. If you decide the service isn’t right for you, you can cancel
          anytime within the trial period. After the trial, your membership will
          automatically transition to a monthly plan, charging the credit card
          on file $59.99 each month until you cancel. You can cancel at any time
          to stop future charges.
        </p>
        <p>
          For assistance, contact{" "}
          <Link href="mailto:help@appsscore.com">
            <b>help@appsscore.com</b>
          </Link>{" "}
          or call{" "}
          <Link href="tel:+18882349184">
            <b>+18882349184</b>
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
