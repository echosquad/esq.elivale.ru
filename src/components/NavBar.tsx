import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4">
      <Image src="/esq_text.svg" alt="esq" className="w-18" width={0} height={0} />
    </nav>
  );
}
