import type { Project } from "../data/portfolio"

type TileProps = {
  art: Project["art"]
  label: string
}

const Tile = ({ art, label }: TileProps) => {
  if (art === "pos") {
    return (
      <div className="flex h-full flex-col justify-center gap-2 bg-[#d7d2c8] p-4 text-[#1c1a16]">
        {["09:10  Gel set", "09:40  Manicure", "10:15  Pedicure"].map((row) => (
          <div key={row} className="flex justify-between border-b border-black/10 pb-2 font-display text-xs">
            <span>{row}</span>
            <span className="text-black/50">Chair</span>
          </div>
        ))}
      </div>
    )
  }

  if (art === "booking") {
    return (
      <div className="flex h-full flex-col justify-center gap-3 bg-[#ece7dc] p-5 text-[#1c1a16]">
        <p className="font-display text-xs uppercase tracking-wide">Book a chair</p>
        <div className="h-8 border border-black/15 bg-white/70" />
        <div className="h-8 w-2/3 bg-black text-center font-display text-xs leading-8 text-white">Deposit</div>
      </div>
    )
  }

  if (art === "alert") {
    return (
      <div className="flex h-full flex-col justify-end bg-[#2c3338] p-5 text-white">
        <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/40 font-display text-sm">
          !
        </span>
        <p className="font-display text-sm font-semibold">{label}</p>
        <p className="text-xs text-white/70">Photo · location</p>
      </div>
    )
  }

  if (art === "team") {
    return (
      <div className="grid h-full grid-cols-3 gap-2 bg-[#3d4450] p-5">
        {["A", "B", "C", "D", "E", "F"].map((mark) => (
          <div key={mark} className="grid place-items-center bg-white/10 font-display text-sm text-white">
            {mark}
          </div>
        ))}
      </div>
    )
  }

  if (art === "loan") {
    return (
      <div className="flex h-full flex-col justify-center gap-2 bg-[#e7eef2] p-5 text-[#1c2830]">
        <p className="font-display text-xs uppercase">Loan list</p>
        {["Applied", "Review", "Approved"].map((step) => (
          <div key={step} className="border border-black/10 bg-white/80 px-3 py-1 font-display text-xs">
            {step}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="flex h-full flex-col justify-center bg-[#f3efe6] p-5 text-[#1c1a16]">
      <p className="font-display text-xs uppercase">Leave request</p>
      <p className="mt-3 font-display text-2xl font-semibold">3 days</p>
      <p className="text-sm text-black/50">{label}</p>
    </div>
  )
}

export default Tile
