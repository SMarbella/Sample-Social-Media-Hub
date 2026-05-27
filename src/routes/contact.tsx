import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail } from "lucide-react";
import logo from "@/assets/song-warden-logo.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Song Requests | Song Warden" },
      { name: "description", content: "Suggest a public domain folk song or send Song Warden a message." },
      { property: "og:title", content: "Contact & Song Requests | Song Warden" },
      { property: "og:description", content: "Suggest a public domain folk song or send Song Warden a message." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const email = "culturalsongwarden@gmail.com";

  return (
    <main className="relative min-h-screen overflow-hidden bg-background px-4 py-10 sm:py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, oklch(0.78 0.10 80 / 0.18), transparent 70%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-[640px]">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.3em] text-primary/80 transition hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>

        <header className="mt-6 flex flex-col items-center text-center animate-fade-up">
          <img src={logo} alt="Song Warden crest" width={1024} height={1024} loading="lazy" className="h-auto w-40" />
          <h1 className="mt-4 font-display text-3xl text-primary sm:text-4xl">
            Contact &amp; Song Requests
          </h1>
        </header>

        <div className="heraldic-divider my-8 w-full" />

        <section
          aria-label="Guidelines"
          className="space-y-4 text-[15px] leading-relaxed text-foreground/85 animate-fade-up"
        >
          <p>
            Would you like to suggest any song ideas or send me a message? If so, contact me. I can
            only do the following:
          </p>
          <div>
            <p className="font-display text-primary">Public domain songs.</p>
          </div>
          <p>I can&apos;t do:</p>
          <ol className="ml-6 list-decimal space-y-2 text-foreground/80 marker:text-primary">
            <li>Copyrighted songs for obvious legal reasons.</li>
            <li>
              Bigotry, hatred, solicitation, harm, disrespect, or targeting anyone in such a
              manner that is considered unethical.
            </li>
            <li>Politics.</li>
            <li>Inappropriate content, including explicit content (18+).</li>
            <li>Create content that might cost me my account or ban me.</li>
          </ol>
          <p className="italic text-primary/80">
            I have the right to refuse service to violators.
          </p>
        </section>

        <div className="heraldic-divider my-8 w-full" />

        <section
          aria-label="Email contact"
          className="flex flex-col items-center text-center animate-fade-up"
        >
          <p className="font-display text-xs uppercase tracking-[0.3em] text-primary/80">
            Reach me by email
          </p>
          <a
            href={`mailto:${email}`}
            className="mt-4 inline-flex items-center gap-3 rounded-md border border-primary bg-primary/5 px-6 py-3 font-display text-base text-primary transition hover:bg-primary hover:text-primary-foreground sm:text-lg"
          >
            <Mail className="h-5 w-5" />
            {email}
          </a>
        </section>

        <footer className="mt-12 text-center font-display text-xs uppercase tracking-[0.3em] text-primary/40">
          © {new Date().getFullYear()} Song Warden
        </footer>
      </div>
    </main>
  );
}
