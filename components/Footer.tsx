export default function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-200 bg-neutral-900">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-xs font-medium tracking-widest uppercase text-neutral-400 mb-8">
          Get in Touch
        </p>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="font-serif text-3xl md:text-4xl text-white leading-snug max-w-sm">
              Let&apos;s talk about what your data should be doing.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-sm text-neutral-400 leading-relaxed">
              We work with a small number of clients at a time to make sure the
              work is done right. If you&apos;re working through a data challenge
              in higher ed or education-adjacent organizations, reach out.
            </p>
            <a
              href="mailto:hello@example.com"
              className="inline-block text-sm font-medium text-white underline underline-offset-4 decoration-neutral-500 hover:decoration-white transition-colors w-fit"
            >
              hello@example.com
            </a>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-neutral-800 flex items-center justify-between">
          <span className="font-serif text-lg text-neutral-400">XYZ</span>
          <span className="text-xs text-neutral-600">
            © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}
