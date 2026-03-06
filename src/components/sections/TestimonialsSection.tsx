interface Testimonial {
  quote: string;
  author: string;
  handle?: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      '"JsonViz Libraries made our dashboard setup 10x faster. We start from a pack, then only tweak data bindings."',
    author: 'Lan Anh',
  },
  {
    quote:
      '"The schema validation is exactly what our team needed. No more broken templates in production."',
    author: 'Minh Hoang',
  },
  {
    quote:
      '"Collections helped us group chart packs by business domain, so onboarding new analysts is much easier."',
    author: 'Thao Nguyen',
  },
  {
    quote:
      '"We published internal libraries first, then open-sourced the best ones. The workflow feels clean and practical."',
    author: 'Khanh Vu',
  },
  {
    quote:
      '"This is the missing bridge between custom JSON specs and reusable visual components for JsonViz."',
    author: 'Bao Tran',
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
