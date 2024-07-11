

export function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <p className="text-zinc-300 text-lg">Invite your friends and plan your next trip!</p>
        
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center">
          <input type="text" placeholder="Where are you going?" className="bg-transparent text-lg placeholder-zinc-400" />
          <input type="text" placeholder="When?" className="bg-transparent text-lg placeholder-zinc-400" />
          <button>Continue</button>
        </div>

        <p className="text-sm text-zinc-500">
          By planning your trip with plann.er, you automatically <br/> 
          agree to our <a className="text-zinc-300 underline" href="#">terms of use</a> and <a className="text-zinc-300 underline" href="#">privacy policies</a>.
        </p>
      </div>
    </div>
  )
}
