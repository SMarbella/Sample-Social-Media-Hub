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
      <path d="M21.823 7.327a11.9 11.9 0 0 0-2.606-3.814a12.1 12.1 0 0 0-3.866-2.57A12.3 12.3 0 0 0 10.617 0H1.831a.6.6 0 0 0-.609.603v3.764c0 .162.064.312.179.426l4.164 4.123a.6.6 0 0 0 .439.177h4.56c.806 0 1.56.313 2.125.88c.557.559.856 1.296.843 2.075c-.029 1.571-1.343 2.849-2.931 2.849h-6.74a.6.6 0 0 0-.432.176a.62.62 0 0 0-.178.427v3.764c0 .162.063.312.178.427l4.139 4.099a.65.65 0 0 0 .476.21h2.572a12.3 12.3 0 0 0 4.733-.945a12.2 12.2 0 0 0 3.866-2.571a12 12 0 0 0 2.607-3.813c.633-1.479.956-3.051.956-4.67s-.321-3.19-.956-4.669zM2.441 4.118V1.982l2.945 2.755l.001 2.297zm4.975 17.813l-2.945-2.917v-2.137l2.945 2.755zm-2.004-5.832h5.19c2.248 0 4.107-1.807 4.147-4.03a4.03 4.03 0 0 0-1.192-2.937a4.2 4.2 0 0 0-2.996-1.239H6.606V5.216h3.996c1.831 0 3.553.706 4.849 1.986a6.724 6.724 0 0 1-.152 9.736a6.88 6.88 0 0 1-4.697 1.84H8.275L5.412 16.1zm15.289.1a10.8 10.8 0 0 1-2.345 3.431a10.9 10.9 0 0 1-3.48 2.314a11 11 0 0 1-4.26.847H8.633v-2.814h1.916c2.145 0 4.161-.802 5.675-2.254a7.88 7.88 0 0 0 2.451-5.728c0-2.177-.87-4.21-2.451-5.728c-1.514-1.454-3.528-2.254-5.675-2.254h-4.16L3.383 1.202h7.234c1.479 0 2.911.285 4.259.847a11 11 0 0 1 3.48 2.313a10.8 10.8 0 0 1 2.345 3.432c.571 1.33.86 2.743.86 4.202s-.289 2.873-.86 4.203"/>
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
