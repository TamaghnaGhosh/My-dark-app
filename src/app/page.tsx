import { DarkModeToggle } from "@/components/DarkModeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <h1 className="text-lg font-semibold tracking-tight text-foreground">
            🌗 Dark Mode App
          </h1>
          <DarkModeToggle />
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Next.js 16 + Tailwind CSS v4
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
          A simple project with a beautiful dark mode toggle. Click the
          sun/moon icon in the top right to switch themes.
        </p>
      </section>

      {/* Feature Cards */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            emoji="⚡"
            title="Next.js 16"
            description="Built on the latest version of Next.js with the App Router and React 19."
          />
          <FeatureCard
            emoji="🎨"
            title="Tailwind CSS v4"
            description="Using Tailwind CSS v4 with the new CSS-first configuration and @custom-variant."
          />
          <FeatureCard
            emoji="🌙"
            title="Dark Mode"
            description="Class-based dark mode with localStorage persistence and system preference detection."
          />
          <FeatureCard
            emoji="💾"
            title="Persistent"
            description="Your theme preference is saved to localStorage and restored on next visit."
          />
          <FeatureCard
            emoji="✨"
            title="Smooth Transitions"
            description="All color changes are animated with CSS transitions for a polished feel."
          />
          <FeatureCard
            emoji="♿"
            title="Accessible"
            description="The toggle button includes proper ARIA labels for screen reader support."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 py-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
          Built with Next.js 16, React 19, and Tailwind CSS v4
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  emoji,
  title,
  description,
}: {
  emoji: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mb-3 text-3xl transition-transform duration-200 group-hover:scale-110">
        {emoji}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </div>
  );
}
