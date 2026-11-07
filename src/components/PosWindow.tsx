const rows = [
  { time: "09:10", service: "Gel set", chair: "Chair 2", state: "Checked in" },
  { time: "09:40", service: "Manicure", chair: "Chair 1", state: "Waiting", open: true },
  { time: "10:15", service: "Pedicure", chair: "Chair 4", state: "Booked" },
  { time: "11:00", service: "Nail art", chair: "Chair 3", state: "Booked" },
  { time: "13:20", service: "Fill-in", chair: "Chair 2", state: "Booked" },
]

const PosWindow = () => {
  return (
    <div
      className="flex h-full min-h-0 flex-col overflow-hidden rounded-[4px] border border-white/10 bg-sheet text-sheet-ink shadow-[0_24px_80px_rgb(0_0_0/0.35)]"
      aria-label="Salon appointment board"
    >
      <div className="flex h-11 shrink-0 items-center justify-between border-b border-black/10 px-4">
        <p className="font-mono text-[13px]">salon/today.tsx</p>
        <p className="font-mono text-[13px] text-sheet-muted">Xsofts POS</p>
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
        <ul className="min-h-0 border-black/10 lg:border-r">
          {rows.map((row) => (
            <li
              key={row.time}
              className={
                row.open
                  ? "grid grid-cols-[64px_1fr_auto] items-center gap-3 bg-black/[0.04] px-4 py-3"
                  : "grid grid-cols-[64px_1fr_auto] items-center gap-3 px-4 py-3"
              }
            >
              <span className="font-mono text-[13px]">{row.time}</span>
              <span className="min-w-0">
                <span className="block truncate text-base">{row.service}</span>
                <span className="block text-[13px] text-sheet-muted">{row.chair}</span>
              </span>
              <span className={row.open ? "text-[13px] font-medium" : "text-[13px] text-sheet-muted"}>
                {row.state}
              </span>
            </li>
          ))}
        </ul>
        <div className="hidden flex-col justify-between p-5 lg:flex">
          <div>
            <p className="font-mono text-[13px] text-sheet-muted">09:40 · Chair 1</p>
            <p className="display mt-2 text-[28px]">Manicure</p>
            <ul className="mt-5 space-y-2 text-base">
              <li>Appointment</li>
              <li>Waiting list</li>
              <li>Check-in</li>
              <li>Ticket</li>
            </ul>
          </div>
          <p className="font-mono text-[13px] text-sheet-muted">Waiting</p>
        </div>
      </div>
    </div>
  )
}

export default PosWindow
