export default function Home() {
  return (
    <div className="mx-4">
      <div className="text-center flex flex-col items-center mb-4 border-b-2 border-white/20 pb-4">
        <h1 className="font-bold text-4xl mb-2">echo squad</h1>
        <p className="font-semibold text-lg mb-4">team & skill-share community focused on programming, hacking and having fun.</p>
        <p className="font-bold text-lg">Join Us:</p>
        <div className="flex gap-4">
          <a href="https://discord.gg/tsC465qu6J" target="_blank" className="font-semibold hover:underline text-lg">
            Discord
          </a>
          <a href="https://github.com/echosquad" target="_blank" className="font-semibold hover:underline text-lg">
            GitHub
          </a>
        </div>
      </div>

      {/* <div>
        <h1 className="text-lg font-bold tracking-wide">
          POSTS FROM <span className="text-yellow-200">ECHO SQUAD</span>
        </h1>
      </div> */}
    </div>
  );
}
