import { useState } from 'react'
import { Calendar, CircleCheck, CircleDashed, Link2, MapPin, Plus, Settings2, UserCog, X, User, Tag } from "lucide-react";


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
          <div className="space-y-6">
            <h2 className=" font-semibold text-xl">Important Links</h2>
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">AirBnB Reservation</span>
                  <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">https://www.airbnb.com.br/rooms/104700011</a>
                </div>
                <Link2 className="text-zinc-400 size-5 shrink-0"/>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">House rules</span>
                  <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">https://www.notion.com/pages/1047000112354648336?adults=13&children=0&infants=0&pets=0&wishlist_item_id=11003621872995&check_in=2024-08-17&check_out=2024-08-26&source_impression_id=p3_1717600906_P3DL0E-bJZzguEci&previous_page_section_name=1000</a>
                </div>
                <Link2 className="text-zinc-400 size-5 shrink-0"/>
              </div>
            </div>
            <button className="bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700">
              <Plus className="size-5 "/>
              Register new link
            </button>
          </div>

          <div className="w-full h-px bg-zinc-800"/>

          <div>
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
          </div>

        </div>
      </main>

      {isCreateActivityModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Register activity</h2>
                <button type="button" onClick={closeCreateActivityModal}>
                  <X className="size-5 text-zinc-400"/>
                </button>
              </div>
              <p className="text-sm text-zinc-400 ">
                All guests can visit the activities
              </p>
            </div>

            <form className="space-y-3">
              <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <Tag className="text-zinc-400"/>
                <input 
                  name="title"
                  placeholder="What's the activity?" 
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                />
              </div>

              <div className="flex items-center gap-2">
                <div className="h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                  <Calendar className="text-zinc-400"/>
                  <input 
                    type="datetime-local"
                    name="occurs_at"
                    placeholder="Date and time" 
                    className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                  />
                </div>
              </div>

              <button type="submit" className="w-full h-11 justify-center bg-lime-300 text-lime-950 rounded-lg font-medium flex items-center gap-2 hover:bg-lime-400">
                Save activity
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  )
}