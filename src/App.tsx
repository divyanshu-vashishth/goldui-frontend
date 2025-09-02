import { BarChart2, Home, MessageSquare, PanelsTopLeft } from 'lucide-react'
import goldVideo from './assets/gold-animation.mov'
import GoldSlider from './components/GoldSlider'

function App() {
  return (
    <div className="min-h-max mx-auto max-w-3xl w-full grid place-items-center bg-[#f6f7fb]">
      <div className=" bg-white rounded-3xl shadow-2xl p-5 overflow-hidden">
        {/* Top hero card with gold splash and price */}
        <div className="relative rounded-3xl overflow-hidden bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
          <video className="h-40 w-full object-cover" src={goldVideo} autoPlay loop muted playsInline />
          <div className="p-5">
            <div className="flex items-end justify-between gap-4">
              <p className="text-[28px] font-semibold text-neutral-900 tracking-tight">Gold Price</p>
              <div className="text-right">
                <p className="text-5xl font-semibold tracking-tight text-neutral-900">₹ 2,327.81</p>
                <p className="mt-2 text-emerald-600 font-medium">+₹4.21 (0.18%) Today</p>
              </div>
            </div>
          </div>
        </div>

        {/* Two small info cards */}
        <div className="grid grid-cols-2 gap-4 mt-5">
          <div className="rounded-2xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] p-4">
            <p className="text-neutral-500 text-sm">Your Investment</p>
            <p className="text-3xl font-semibold mt-1">₹500</p>
          </div>
          <div className="rounded-2xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] p-4">
            <p className="text-neutral-500 text-sm">1M</p>
            <div className="mt-2 h-16 w-full">
              <svg viewBox="0 0 200 64" className="w-full h-full" aria-hidden="true">
                <path d="M0 50 Q 20 40 40 45 T 80 30 T 120 42 T 160 20 T 200 55" fill="none" stroke="#d6b065" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Slide to invest */}
        <div className="mt-6 rounded-3xl bg-[#f2f3f7] p-5 shadow-inner">
          <GoldSlider
            width={400}
            knobWidth={190}
            onComplete={() => alert('Congratulations, you have invested 500 Rupees of gold')}
          />
          <p className="text-center text-[24px] font-semibold mt-4 tracking-tight text-neutral-900">Slide to Invest</p>
        </div>

        {/* Bottom navigation */}
        <div className="mt-6 rounded-3xl bg-white shadow-[0_-8px_24px_rgba(0,0,0,0.08)] p-5">
          <div className="flex items-center justify-around text-[#c59d3f]">
            <Home size={36} strokeWidth={1.75} />
            <BarChart2 size={36} strokeWidth={1.75} />
            <PanelsTopLeft size={36} strokeWidth={1.75} />
            <MessageSquare size={36} strokeWidth={1.75} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
