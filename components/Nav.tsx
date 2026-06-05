export default function Nav() {
  return (
    <header className="w-full border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <span className="font-serif text-xl tracking-tight text-neutral-900">
          XYZ
        </span>
        <a
          href="#contact"
          className="text-sm font-medium text-neutral-900 underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-900 transition-colors"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
