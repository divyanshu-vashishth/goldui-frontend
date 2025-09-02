import { useMemo, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'

type Props = {
  width?: number
  knobWidth?: number
  onComplete?: () => void
}

export default function GoldSlider({ width = 400, knobWidth = 190, onComplete }: Props) {
  const maxX = useMemo(() => width - knobWidth - 60, [width, knobWidth])
  const [x, setX] = useState(0)
  const start = useRef({ x: 0, val: 0 })
  const moved = useRef(false)

  const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max)

  const handleDown = (clientX: number) => {
    start.current = { x: clientX, val: x }
    moved.current = false
    document.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseup', handleUp)
  }

  const handleMove = (e: MouseEvent) => {
    const dx = e.clientX - start.current.x
    const next = clamp(start.current.val + dx, 0, maxX)
    if (Math.abs(dx) > 3) moved.current = true
    setX(next)
  }

  const handleUp = () => {
    document.removeEventListener('mousemove', handleMove)
    document.removeEventListener('mouseup', handleUp)
    if (moved.current && x >= maxX - 4) onComplete?.()
    setTimeout(() => setX(0), 600)
  }

  return (
    <div className="relative mx-auto" style={{ width }}>
      <div className="relative h-20 rounded-[32px] bg-[#f7f8fc] shadow-[inset_6px_6px_16px_rgba(0,0,0,0.08),inset_-6px_-6px_16px_rgba(255,255,255,0.9)] flex items-center px-6 overflow-hidden">
        <ArrowRight className="text-neutral-300 shrink-0" size={28} />
        <div
          className="gold-knob select-none z-10 shrink-0"
          style={{ width: knobWidth, marginLeft: clamp(x, 0, maxX) }}
          onMouseDown={(e) => handleDown(e.clientX)}
          onMouseUp={handleUp}
        />
      </div>
    </div>
  )
}


