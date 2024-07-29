import { useState } from 'react'
import { Calendar, CircleCheck, CircleDashed, Link2, MapPin, Plus, Settings2, UserCog } from "lucide-react";
import { CreateActivityModal } from './create-activity-modal';
import { ImportantLinks } from './important-links';
import { Guests } from './guests';

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true)
  }
  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false)
  }

  return (
    <div className="max-w-6xl px-4 py-10 mx-auto space-y-8">
      <header className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
        
        <div className="flex items-center gap-2">
          <MapPin className="size-5 text-zinc-400"/>
          <span className="text-zinc-100">Curitiba, Brazil</span>
        </div>
        
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400"/>
            <span className="text-zinc-100">17 a 23 de Março</span>
          </div>

          <div className="w-px h-6 bg-zinc-800"/>

          <button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
            Change location/date
            <Settings2 className="size-5 "/>
          </button>
        </div>

      </header>

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Activities</h2>
            <button onClick={openCreateActivityModal} className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
              <Plus className="size-5"/>
              Register activities
            </button>
          </div>

          <div className="space-y-8">
            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">Day 17</span>
                <span className="text-xs text-zinc-500">Saturday</span>
              </div>
              <p className="text-sm text-zinc-500">No activity registered on this day</p>
            </div>

            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">Day 18</span>
                <span className="text-xs text-zinc-500">Sunday</span>
              </div>
              <div className="space-y-2.5">
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                  <CircleCheck className="size-5 text-lime-300"/>
                  <span className="text-zinc-100">Group gym</span>
                  <span className="text-zinc-100 text-sm ml-auto">8h00</span>
                </div>
              </div>
              <div className="space-y-2.5">
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                  <CircleCheck className="size-5 text-lime-300"/>
                  <span className="text-zinc-100">Group meeting</span>
                  <span className="text-zinc-100 text-sm ml-auto">9h00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-80 space-y-6">
          <ImportantLinks/>
          <div className="w-full h-px bg-zinc-800"/>
          <Guests/>
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal 
          closeCreateActivityModal={closeCreateActivityModal}
        />
      )}

    </div>
  )
}