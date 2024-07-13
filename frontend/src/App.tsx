import { useState } from 'react';
import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2 } from 'lucide-react';

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);

  function openGuestsInput() {
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false)
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true);
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er"/>
          <p className="text-zinc-300 text-lg">Invite your friends and plan your next trip!</p>
        </div>
        
        <div className="space-y-4">
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400"/>
              <input disabled={isGuestsInputOpen} type="text" placeholder="Where are you going?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
            </div>

            <div className="flex items-center gap-2 ">
              <Calendar className="size-5 text-zinc-400"/>
              <input disabled={isGuestsInputOpen} type="text" placeholder="When?" className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none" />
            </div>

            <div className="w-px h-6 bg-zinc-800"/>

            {isGuestsInputOpen ? (
              <button onClick={closeGuestsInput} className="h-10 bg-zinc-800 text-zinc-200 rounded-lg px-5 font-medium flex items-center gap-2 hover:bg-zinc-700">
                Change location/date
                <Settings2 className="size-5"/>
              </button>
            ) : (
              <button onClick={openGuestsInput} className="h-10 bg-lime-300 text-lime-950 rounded-lg px-5 font-medium flex items-center gap-2 hover:bg-lime-400">
                Continue
                <ArrowRight className="size-5"/>
            </button>
            )}
          </div>

          {isGuestsInputOpen && (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3">
              <button type="button" onClick={openGuestsModal} className="flex items-center gap-2 flex-1 text-left">
                <UserRoundPlus className="size-5 text-zinc-400"/>
                <span className="text-zinc-400 text-lg flex-1">Who will be on the trip?</span>
              </button>

              <div className="w-px h-6 bg-zinc-800"></div>

              <button className="h-10 bg-lime-300 text-lime-950 rounded-lg px-5 font-medium flex items-center gap-2 hover:bg-lime-400">
                Confirm trip
                <ArrowRight className="size-5"/>
              </button>
            </div>
          )}
        </div>

        <p className="text-sm text-zinc-500">
          By planning your trip with plann.er, you automatically <br/> 
          agree to our <a className="text-zinc-300 underline" href="#">terms of use</a> and <a className="text-zinc-300 underline" href="#">privacy policies</a>.
        </p>
      </div>

      {isGuestsModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900">
            <h2>Select guests</h2>

          </div>
        </div>
      )}
    </div>
  )
}
