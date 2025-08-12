export default function Footer(){
  return (
    <footer className="bg-white border-t py-8 mt-12">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="font-semibold text-[var(--primary)] text-lg">WellMind</h3>
          <p className="text-[var(--muted)]">Mind, Body & Balance — small daily changes.</p>
        </div>
        <div className="text-[var(--muted)]">© 2025 WellMind. All rights reserved.</div>
      </div>
    </footer>
  )
}
