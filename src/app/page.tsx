import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-4 text-center flex flex-col items-center mb-4 pb-4">
      <div className="flex gap-6 items-center">
        <Image src="/esq_text.svg" alt="esq" className="w-28 mb-4" width={0} height={0} />
        <h1 className="font-bold text-4xl mb-2">echo squad</h1>
      </div>
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
  );
}
