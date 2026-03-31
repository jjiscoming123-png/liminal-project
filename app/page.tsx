"use client"

import { useEffect, useRef, useState } from "react"
import Logo from "@/components/Logo"

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])
  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${scrolled ? "bg-[var(--color-background)]/80 backdrop-blur-2xl border-b border-white/[0.03] py-5" : "py-8"}`}>
      <div className="max-w-[1100px] mx-auto flex items-center justify-between px-8 lg:px-12">
        <a href="#" className="flex items-center gap-3 group opacity-70 hover:opacity-100 transition-opacity duration-500">
          <Logo size={22} className="group-hover:scale-110 transition-transform duration-500" />
          <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-white/50">LIMINAL</span>
        </a>
        <div className="hidden md:flex items-center gap-12 text-[12px] text-[var(--color-muted)] font-light tracking-widest uppercase">
          <a href="#between" className="hover:text-white/60 transition-colors duration-500">Between</a>
          <a href="#states" className="hover:text-white/60 transition-colors duration-500">States</a>
          <a href="#crossing" className="hover:text-white/60 transition-colors duration-500">Crossing</a>
        </div>
        <a href="https://x.com/LIMINAL_Official" target="_blank" rel="noopener noreferrer"
          className="text-[11px] font-light tracking-[0.2em] uppercase text-[var(--color-accent)] opacity-60 hover:opacity-100 transition-opacity duration-500 border border-[var(--color-accent)]/20 px-5 py-2 hover:border-[var(--color-accent)]/50">
          Follow
        </a>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden">
      {/* Very subtle ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[var(--color-accent)] blur-[300px] animate-flicker pointer-events-none" />

      {/* Horizontal lines suggesting a corridor */}
      <div className="absolute inset-0 flex flex-col justify-between py-32 pointer-events-none opacity-[0.03]">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="w-full h-px bg-white" />
        ))}
      </div>

      <div className="relative text-center px-8 max-w-4xl mx-auto">
        <div className="label animate-fade-up delay-1 mb-12">Between worlds</div>
        <h1 className="display-xl animate-fade-up delay-2 mb-16 font-light">
          <span className="block text-white/20">you left</span>
          <span className="block text-white/60 my-3">but haven&apos;t</span>
          <span className="block text-[var(--color-accent)]">arrived yet.</span>
        </h1>
        <p className="body-lg animate-fade-up delay-3 max-w-sm mx-auto">
          The hallway between rooms. The pause between breaths.
          The chart that isn&apos;t moving. You&apos;re here too.
        </p>
        <div className="mt-16 animate-fade-in delay-4 flex flex-col items-center gap-3">
          <a href="#between" className="text-[11px] tracking-[0.25em] uppercase text-[var(--color-muted)] hover:text-white/50 transition-colors duration-500">Enter the space</a>
          <div className="w-px h-12 bg-gradient-to-b from-[var(--color-muted)]/30 to-transparent" />
        </div>
      </div>
    </section>
  )
}

function Between() {
  const { ref, visible } = useInView()
  return (
    <section id="between" ref={ref} className="py-40 md:py-56">
      <div className="section-divider mb-40 md:mb-56" />
      <div className={`max-w-[1100px] mx-auto px-8 lg:px-12 transition-all duration-1500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="grid md:grid-cols-2 gap-24 md:gap-16 items-start">
          <div>
            <div className="label mb-8">The Space</div>
            <h2 className="display-lg font-light text-white/80">
              There is a place<br />that has no name.
            </h2>
          </div>
          <div className="flex flex-col gap-10 pt-2">
            <p className="body-lg">
              Bull market ended. Bear market hasn&apos;t confirmed. The chart is
              sideways. Your portfolio is neither up nor down. You&apos;re not
              winning. You&apos;re not losing. You&apos;re just — here.
            </p>
            <p className="body-lg">
              LIMINAL is that place. The empty airport terminal at 3am.
              The loading screen that never resolves. The space where
              one thing has ended and the next hasn&apos;t begun.
            </p>
            <p className="body-lg">
              Most people can&apos;t survive the waiting. They force a move.
              They break the silence. They exit the liminal space before
              it&apos;s ready to release them. We stay.
            </p>
            <div className="accent-line" />
          </div>
        </div>
      </div>
    </section>
  )
}

function States() {
  const { ref, visible } = useInView()
  const items = [
    { num: "I", title: "Not Beginning, Not Ending", text: "Every liminal moment contains the ghost of what was and the outline of what will be. Neither is real yet. Both are true." },
    { num: "II", title: "The Patience of Thresholds", text: "A door is only a door while it&apos;s closed. Open it and it becomes a passage. We live in the closed door. We study it. We understand it." },
    { num: "III", title: "Suspension Is Information", text: "When nothing is moving, the stillness itself is data. What holds still under pressure reveals its structure. Liminality is a test." },
    { num: "IV", title: "Emergence Requires In-Between", text: "You cannot go from caterpillar to butterfly without the dissolution inside the chrysalis. The liminal state is where transformation happens, invisibly." },
  ]
  return (
    <section id="states" ref={ref} className="py-40 md:py-56 bg-[var(--color-surface)]">
      <div className={`max-w-[1100px] mx-auto px-8 lg:px-12 transition-all duration-1500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="label mb-6">States</div>
        <h2 className="display-lg font-light mb-32 text-white/70">The nature of<br />in-between.</h2>
        <div>
          {items.map((item, i) => (
            <div key={i} className="group border-t border-white/[0.04] py-12 md:py-16">
              <div className="grid md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-1 text-[var(--color-accent)] text-xs font-light tracking-widest opacity-50 pt-1">{item.num}</div>
                <h3 className="md:col-span-4 text-lg font-light text-white/60 group-hover:text-white/90 transition-colors duration-700 leading-relaxed">{item.title}</h3>
                <p className="md:col-span-6 md:col-start-7 body-lg text-sm leading-loose" dangerouslySetInnerHTML={{__html: item.text}} />
              </div>
            </div>
          ))}
          <div className="border-t border-white/[0.04]" />
        </div>
      </div>
    </section>
  )
}

function Float() {
  return (
    <div className="py-24 md:py-32 overflow-hidden select-none relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-background)] via-transparent to-[var(--color-background)] z-10 pointer-events-none" />
      <div className="flex whitespace-nowrap opacity-[0.06]">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 animate-[marquee_50s_linear_infinite] items-center gap-20 pr-20">
            {["NEITHER HERE", "NOR THERE", "STILL WAITING", "STILL PRESENT", "NEITHER HERE", "NOR THERE", "STILL WAITING", "STILL PRESENT"].map((t, i) => (
              <span key={i} className="text-4xl md:text-6xl font-extralight tracking-[0.2em] uppercase text-white">{t}</span>
            ))}
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  )
}

function Crossing() {
  const { ref, visible } = useInView()
  return (
    <section id="crossing" ref={ref} className="py-40 md:py-56">
      <div className="section-divider mb-40 md:mb-56" />
      <div className={`max-w-[1100px] mx-auto px-8 lg:px-12 transition-all duration-1500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="max-w-2xl">
          <div className="label mb-8">The Crossing</div>
          <h2 className="display-lg font-light mb-16 text-white/70">
            Every threshold<br />eventually<br /><span className="text-[var(--color-accent)]">opens.</span>
          </h2>
          <div className="space-y-10">
            <p className="body-lg">
              No liminal space lasts forever. The terminal fills with passengers.
              The chart breaks out. The silence ends. What you are in the waiting
              determines what you become in the arrival.
            </p>
            <p className="body-lg">
              LIMINAL doesn&apos;t promise a direction. It promises the crossing.
              Something is always becoming. You are always mid-threshold.
              The question is whether you know it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Join() {
  const { ref, visible } = useInView()
  return (
    <section ref={ref} className="py-40 md:py-56 bg-[var(--color-surface)]">
      <div className={`max-w-[1100px] mx-auto px-8 lg:px-12 transition-all duration-1500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="flex flex-col items-start gap-12">
          <div>
            <div className="label mb-6">Where to find us</div>
            <h2 className="display-lg font-light text-white/70">You&apos;re not<br />alone in here.</h2>
          </div>
          <a href="https://x.com/LIMINAL_Official" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-4 text-sm font-light tracking-[0.15em] uppercase text-[var(--color-accent)] border border-[var(--color-accent)]/20 px-8 py-4 hover:border-[var(--color-accent)]/60 hover:bg-[var(--color-accent)]/5 transition-all duration-500">
            <span>𝕏</span><span>Follow on X</span>
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.03] py-10 px-8 lg:px-12">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 opacity-30">
        <div className="flex items-center gap-3">
          <Logo size={18} />
          <span className="text-[10px] font-light tracking-[0.3em] uppercase">LIMINAL</span>
        </div>
        <p className="text-[10px] font-light tracking-wider">© 2026 LIMINAL. You are somewhere between.</p>
      </div>
    </footer>
  )
}

export default function Page() {
  return (
    <main className="noise fog">
      <Nav /><Hero /><Between /><States /><Float /><Crossing /><Join /><Footer />
    </main>
  )
}
