import { BarChart2, Home, MessageSquare, PanelsTopLeft } from 'lucide-react'
import goldVideo from './assets/gold-animation.mov'
import GoldSlider from './components/GoldSlider'
import chartImage from './assets/chart.png'
function App() {
  return (
    <div className="min-h-max mx-auto max-w-3xl w-full grid place-items-center bg-[#f6f7fb]">
      <div className=" bg-white rounded-3xl shadow-2xl p-5 overflow-hidden">
        <div className="relative rounded-3xl overflow-hidden bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
          <video className="h-40 w-full object-cover" src={goldVideo} autoPlay loop muted playsInline />
          <div className="p-5">
            <div className="flex justify-between gap-4">
              <div className=" text-[28px] font-semibold text-neutral-900 tracking-tight">Gold Price</div>
              <div className=" flex flex-col items-end gap-2">
                <p className="text-4xl font-semibold tracking-tight text-neutral-900">₹ 2,327.81</p>
                <p className="text-emerald-600 font-medium">+₹4.21 (0.18%) Today</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-5">
          <div className="rounded-2xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] p-6 h-36">
            <p className="text-neutral-500 text-sm">Your Investment</p>
            <p className="text-3xl font-semibold mt-1">₹500</p>
          </div>
          <div className="rounded-2xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] p-6 h-36">
            <p className="text-neutral-500 text-sm">1M</p>
            <div className="mt-2 h-16 w-full">
              <img
                src={chartImage}
                alt="Gold price chart"
                className="w-full h-full object-cover -pb-4"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl bg-[#f2f3f7] p-5 shadow-inner">
          <GoldSlider
            width={400}
            knobWidth={190}
            onComplete={() => alert('Congratulations, you have invested 500 Rupees of gold')}
          />
          <p className="text-center text-[24px] font-semibold mt-4 tracking-tight text-neutral-900">Slide to Invest</p>
        </div>

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
