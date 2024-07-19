import { FormEvent, useState } from 'react';
import { ArrowRight, UserRoundPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { InviteGuestsModal } from './invite-guests-modal';
import { ConfirmTripModal } from './confirm-trip-modal';
import { DestinationAndDateStep } from './steps/destination-and-date-step';

export function CreateTripPage() {
  const navigate = useNavigate()
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)
  const [emailsToInvite, setEmailsToinvite] = useState([
    'teste@gmail.com',
    'testado@ymail.com.com'
  ])



  function openGuestsInput() {
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false)
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true);
  }

  function closeGuestsModal() {
    setIsGuestsModalOpen(false);
  }

  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(true);
  }

  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false);
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if (!email) {
      return
    }

    if (emailsToInvite.includes(email)) {
      return alert("This email has already been added.")
    }

    setEmailsToinvite([
      ...emailsToInvite,
      email
    ])

    event.currentTarget.reset()
  }

  function removeEmailFromInvite(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)

    setEmailsToinvite(newEmailList)
  }

  function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    navigate('/trips/123')
  }

  

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er"/>
          <p className="text-zinc-300 text-lg">Invite your friends and plan your next trip!</p>
        </div>
        
        <div className="space-y-4">
          <DestinationAndDateStep 
            isGuestsInputOpen={isGuestsInputOpen}
            closeGuestsInput={closeGuestsInput}
            openGuestsInput={openGuestsInput}
          />
           
          {isGuestsInputOpen && (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3">
              <button type="button" onClick={openGuestsModal} className="flex items-center gap-2 flex-1 text-left">
                <UserRoundPlus className="size-5 text-zinc-400"/>
                {emailsToInvite.length > 0 ? (
                  <span className="text-zinc-100 text-lg flex-1">
                    {emailsToInvite.length} invited guests
                  </span>
                ) : (
                  <span className="text-zinc-400 text-lg flex-1">Who will be on the trip?</span>
                )}
              </button>

              <div className="w-px h-6 bg-zinc-800"></div>

              <button onClick={openConfirmTripModal} className="h-10 bg-lime-300 text-lime-950 rounded-lg px-5 font-medium flex items-center gap-2 hover:bg-lime-400">
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
        <InviteGuestsModal 
          emailsToInvite={emailsToInvite} 
          addNewEmailToInvite={addNewEmailToInvite} 
          closeGuestsModal={closeGuestsModal} 
          removeEmailFromInvite={removeEmailFromInvite}
        />
      )}

      {isConfirmTripModalOpen && (
        <ConfirmTripModal 
          closeConfirmTripModal={closeConfirmTripModal} 
          createTrip={createTrip}/>
      )}

    </div>
  )
}
