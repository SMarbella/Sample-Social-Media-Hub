import { createFileRoute, Link } from "@tanstack/react-router";
import { Youtube, Instagram, Twitter, Music2, Heart, Coffee, Mail } from "lucide-react";
import logo from "@/assets/song-warden-logo.png";
import { LinkButton } from "@/components/LinkButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Song Warden | Social Links" },
      { name: "description", content: "Song Warden — Münchner Kindl. Traditional folk music covers from around the world. Find my social media and support links here." },
      { property: "og:title", content: "Song Warden | Social Links" },
      { property: "og:description", content: "Traditional folk music covers from around the world." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const socialLinks = [
  { label: "YouTube", href: "https://www.youtube.com/@knowsmore/", icon: <Youtube className="h-5 w-5" /> },
  { label: "TikTok", href: "https://www.tiktok.com/@song_warden", icon: <Music2 className="h-5 w-5" /> },
  { label: "X (Twitter)", href: "https://x.com/SongWarden", icon: <Twitter className="h-5 w-5" /> },
  { label: "Instagram", href: "https://www.instagram.com/culturalsongwarden/", icon: <Instagram className="h-5 w-5" /> },
];

const supportLinks = [
  { label: "Patreon", href: "https://www.patreon.com/c/SongWarden", icon: <Heart className="h-5 w-5" /> },
  { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/songwarden", icon: <Coffee className="h-5 w-5" /> },
  { label: "Ko-fi", href: "https://ko-fi.com/songwarden", icon: <Heart className="h-5 w-5" /> },
];

function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background px-4 py-12 sm:py-16">
      {/* Subtle radial backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, oklch(0.78 0.10 80 / 0.18), transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[600px] flex-col items-center">
        <header className="flex flex-col items-center text-center animate-fade-up">
          <img
            src={logo}
            alt="Song Warden — heraldic crest with two doves and an S monogram"
            width={1024}
            height={1024}
            className="h-auto w-64 sm:w-80 drop-shadow-[0_0_30px_rgba(232,224,200,0.15)]"
          />
        </header>

        <div className="heraldic-divider my-10 w-full" />

        <section
          aria-label="Welcome"
          className="space-y-4 text-center text-[15px] leading-relaxed text-foreground/85 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <p className="font-display text-xl text-primary">Herzlich willkommen an alle!</p>
          <p>
            In a world of billions of searches, yours made me smile. Please support my work by
            subscribing to my awesome YouTube channel! I would appreciate monetary donations.
            Also, no bots allowed! Thank you!
          </p>
          <p className="italic text-primary/80">
            I compose covers of traditional folk music from around the world.
          </p>
        </section>

        <section
          aria-labelledby="find-me"
          className="mt-12 w-full animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <h2
            id="find-me"
            className="mb-6 text-center font-display text-sm uppercase tracking-[0.35em] text-primary"
          >
            — Find Me —
          </h2>
          <ul className="space-y-3">
            {socialLinks.map((l) => (
              <li key={l.href}>
                <LinkButton {...l} />
              </li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="support"
          className="mt-12 w-full animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <h2
            id="support"
            className="mb-6 text-center font-display text-sm uppercase tracking-[0.35em] text-primary"
          >
            — Support My Work —
          </h2>
          <ul className="space-y-3">
            {supportLinks.map((l) => (
              <li key={l.href}>
                <LinkButton {...l} />
              </li>
            ))}
          </ul>
        </section>

        <div className="heraldic-divider my-10 w-full" />

        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 rounded-md border border-primary px-6 py-3 font-display text-sm uppercase tracking-[0.25em] text-primary transition-all hover:bg-primary hover:text-primary-foreground"
        >
          <Mail className="h-4 w-4" />
          Contact / Song Requests
        </Link>

        <footer className="mt-12 text-center font-display text-xs uppercase tracking-[0.3em] text-primary/40">
          © {new Date().getFullYear()} Song Warden
        </footer>
      </div>
    </main>
  );
}
