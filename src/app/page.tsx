import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className="tech-grid warm-veil min-h-screen">
          <div className="shell flex min-h-screen items-center pt-24">
            <div className="max-w-4xl">
              <p className="section-label">
                <span className="section-label-number">
                  00
                </span>

                Navigation Preview
              </p>

              <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[0.98] tracking-tighter sm:text-7xl lg:text-8xl">
                The new{" "}
                <span className="text-primary">
                  rizqiyr.id
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground lg:text-lg">
                Scroll this page to test the
                floating navigation and switch
                between light and dark mode.
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-secondary">
          <div className="shell min-h-[70vh]">
            <p className="mono text-primary">
              Scroll state
            </p>

            <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
              The navbar should now have a
              translucent background.
            </h2>
          </div>
        </section>

        <section className="section bg-feature text-feature-foreground">
          <div className="shell min-h-[55vh]">
            <p className="mono text-primary">
              Feature surface
            </p>

            <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
              Light mode can still contain
              intentional dark surfaces.
            </h2>
          </div>
        </section>
      </main>
    </>
  );
}