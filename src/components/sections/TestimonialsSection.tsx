interface Testimonial {
  quote: string;
  author: string;
  handle?: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      '"My first impressions of using this tool to build an iOS app (working on an existing repo built by Claude Code): It feels way more agentic, it feels like I can let the agents/subagents run and it\'ll correctly come up with code reliably and consistently."',
    author: 'TheAlexYao',
  },
  {
    quote:
      '"Tried Codex in lieu of this tool. It makes me appreciate the level of polish it brings! The whole tool really delivers a premium experience, and I pity whoever is stuck with CC / Codex."',
    author: 'Petr Baudis',
  },
  {
    quote: '"We keep trying CC, Cursor Agent, etc. and keep coming back. It\'s built different."',
    author: 'Evan Owen',
  },
  {
    quote:
      '"umm ok stop being so good — this data flow diagram is actually sick, and generated without me specifically asking for it"',
    author: 'Adam Sorensen',
  },
  {
    quote:
      '"Tried this with GPT5 and Sonnet4. You guys put some juice into Claude. Hard to believe its running the same model under the hood as CC."',
    author: 'Alfredo Sandoval',
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-divider px-4 py-section">
      <div className="mx-auto max-w-content">
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="group transition-opacity hover:opacity-80">
              <blockquote className="testimonial-quote">{testimonial.quote}</blockquote>
              <cite className="mt-4 block text-body-sm font-medium not-italic text-muted-foreground">
                – {testimonial.author}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
