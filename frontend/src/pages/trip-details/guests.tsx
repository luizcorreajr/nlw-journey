import { CircleDashed, UserCog } from "lucide-react"
import { Button } from "../../components/button"

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
        <Button variant="secondary" size="full">
            <UserCog className="size-5 "/>
            Manage guests
        </Button>
    </div>
  )
}