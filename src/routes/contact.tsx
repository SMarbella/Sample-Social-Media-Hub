import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
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

        <form
          onSubmit={handleSubmit}
          noValidate
          className="space-y-5 animate-fade-up"
          aria-label="Contact form"
        >
          <div>
            <label htmlFor="name" className="mb-2 block font-display text-xs uppercase tracking-[0.25em] text-primary">
              Name <span aria-hidden="true">*</span>
            </label>
            <input id="name" name="name" type="text" required maxLength={100} className={inputClass} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} />
            {errors.name && <p id="name-err" className="mt-1 text-sm text-destructive">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block font-display text-xs uppercase tracking-[0.25em] text-primary">
              Email <span aria-hidden="true">*</span>
            </label>
            <input id="email" name="email" type="email" required maxLength={255} className={inputClass} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} />
            {errors.email && <p id="email-err" className="mt-1 text-sm text-destructive">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="subject" className="mb-2 block font-display text-xs uppercase tracking-[0.25em] text-primary">
              Subject
            </label>
            <input id="subject" name="subject" type="text" maxLength={200} className={inputClass} />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block font-display text-xs uppercase tracking-[0.25em] text-primary">
              Message <span aria-hidden="true">*</span>
            </label>
            <textarea id="message" name="message" required rows={6} maxLength={2000} className={inputClass} aria-invalid={!!errors.message} aria-describedby={errors.message ? "msg-err" : undefined} />
            {errors.message && <p id="msg-err" className="mt-1 text-sm text-destructive">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-md border border-primary bg-primary px-6 py-3 font-display text-sm uppercase tracking-[0.3em] text-primary-foreground transition hover:bg-transparent hover:text-primary disabled:opacity-60"
          >
            {submitting ? "Sending…" : "Send Message"}
          </button>
        </form>

        <footer className="mt-12 text-center font-display text-xs uppercase tracking-[0.3em] text-primary/40">
          © {new Date().getFullYear()} Song Warden
        </footer>
      </div>
    </main>
  );
}
