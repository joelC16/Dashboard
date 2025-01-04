import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function SidebarPerfil() {
  return (
    <Link
      href="/perfil"
      className="w-44 flex flex-col items-center justify-center gap-2 pt-4 pb-4"
    >
        <Avatar className="w-14 h-14">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      <h1 className="font-bold">Michael White</h1>
      <p className="font-bold text-cyan-600">Perfil</p>
    </Link>
  );
}
