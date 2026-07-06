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
  { label: "YouTube", href: "https://www.youtube.com/@songwarden", icon: <Youtube className="h-5 w-5" /> },
  { label: "TikTok", href: "https://www.tiktok.com/@song_warden", icon: <Music2 className="h-5 w-5" /> },
  { label: "SoundCloud", href: "https://soundcloud.com/songwarden", icon: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 10v4M6 8v8M10 6v12M14 8v8M18 10v4"/>
    </svg>
  ) },
  { label: "X (Twitter)", href: "https://x.com/SongWarden", icon: <Twitter className="h-5 w-5" /> },
  { label: "Instagram", href: "https://www.instagram.com/culturalsongwarden/", icon: <Instagram className="h-5 w-5" /> },
  { label: "Bluesky", href: "https://bsky.app/profile/songwarden.bsky.social", icon: (
    <svg viewBox="0 0 64 57" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13.873 3.805C21.21 9.332 29.103 20.537 32 26.55 M31.59 43.299c-1.512 4.456-7.418 21.847-20.923 7.944-7.111-7.32-3.819-14.64 9.125-16.85-7.405 1.264-15.73-.825-18.014-9.015C1.12 23.022 0 8.51 0 6.55 0-3.268 8.579-.182 13.873 3.805 M50.127 3.805C42.79 9.332 34.897 20.537 32 26.55 M32.41 43.299c1.512 4.456 7.418 21.847 20.923 7.944 7.111-7.32 3.819-14.64-9.125-16.85 7.405 1.264 15.73-.825 18.014-9.015C62.88 23.022 64 8.51 64 6.55c0-9.818-8.578-6.732-13.873-2.745"/>
    </svg>
  ) },
  { label: "Vimeo", href: "https://vimeo.com/songwarden", icon: (
    <svg viewBox="0 0 16 16" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M15.992 4.204q-.106 2.334-3.262 6.393-3.263 4.243-5.522 4.243-1.4 0-2.367-2.583L3.55 7.523Q2.83 4.939 2.007 4.94q-.178.001-1.254.754L0 4.724a210 210 0 0 0 2.334-2.081q1.581-1.364 2.373-1.437 1.865-.185 2.298 2.553.466 2.952.646 3.666.54 2.447 1.186 2.445.5 0 1.508-1.587 1.006-1.587 1.077-2.415.144-1.37-1.077-1.37a3 3 0 0 0-1.185.261q1.183-3.86 4.508-3.756 2.466.075 2.324 3.2z"/>
    </svg>
  ) },
  { label: "DailyMotion", href: "https://www.dailymotion.com/user/songwarden", icon: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M7 3 L5 12 L7 21 A 9 9 0 0 1 7 3 Z M7 7.5 A 4.5 4.5 0 0 1 7 16.5 Z" fill-rule="evenodd" />
    </svg>
  ) },
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
