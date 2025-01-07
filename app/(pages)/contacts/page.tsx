import Link from "next/link";

export default function Contacts() {
  return (
    <div className="content">
      <div className="container">
        <h2>Contact Us</h2>
        <p>
          Contact Appsscore if you want to make suggestions, report bugs, submit
          your app or have other questions.{" "}
          <Link href="mailto:help@appsscore.com">
            <b>help@appsscore.com</b>
          </Link>{" "}
          or call{" "}
          <Link href="tel:+18882349184">
            <b>+18882349184</b>
          </Link>
        </p>
      </div>
    </div>
  );
}
