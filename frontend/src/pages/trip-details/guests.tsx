import { CircleDashed, UserCog } from "lucide-react"

export function Guests() {
  return (
    <div className="space-y-6">
        <h2 className=" font-semibold text-xl">Guests</h2>
        <div className="space-y-5">
            <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5">
                <span className="block font-medium text-zinc-100">Bruna Carvalho</span>
                <span className="block text-sm text-zinc-400 truncate">brunaca@gmail.com</span>
            </div>
            <CircleDashed className="text-zinc-400 size-5 shrink-0"/>
            </div>
            <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5">
                <span className="block font-medium text-zinc-100">Pedro Coimbra</span>
                <span className="block text-sm text-zinc-400 truncate">pedraocoimbra94@outlook.com</span>
            </div>
            <CircleDashed className="text-zinc-400 size-5 shrink-0"/>
            </div>
        </div>
        <button className="bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700">
            <UserCog className="size-5 "/>
            Manage guests
        </button>
    </div>
  )
}