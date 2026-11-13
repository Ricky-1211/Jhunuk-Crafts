
import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";

export const metadata: Metadata = {
  title: "Privacy Policy | Jhunuk Crafts",
};

const sections = [
  [
    "Demo Notice",
    "Jhunuk Crafts is a frontend demonstration website created to showcase handmade products and crafts. This privacy policy is sample content and is not legal advice.",
  ],
  [
    "Information We Collect",
    "The contact form on this website is for demonstration purposes only. Information entered into the form is not submitted to a server or stored by this website.",
  ],
  [
    "Cookies and Analytics",
    "This demo website does not intentionally use tracking cookies or analytics tools.",
  ],
  [
    "Your Privacy",
    "We respect your privacy. Since this is a frontend-only demonstration, no personal information is collected through its demo contact form.",
  ],
  [
    "Contact",
    "For questions about Jhunuk Crafts, please visit our Contact Us page.",
  ],
];

export default function Privacy() {
  return (
    <main>
      <PageHeading
        title="Privacy Policy"
        intro="Your privacy matters to us. Learn how this demonstration website handles information."
      />

      <section className="container-x section max-w-3xl space-y-8">
        {sections.map(([title, description]) => (
          <div key={title}>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="mt-2 text-charcoal/80 leading-7">
              {description}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
