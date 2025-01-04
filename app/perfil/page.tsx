import Link from "next/link";
import PerfilSwitch from "@/components/PerfilSwitch";
import PerfilUser from "@/components/PerfilUser";

export default function ProfilePage() {
  return (
    <div className="bg-white h-full w-full rounded-md p-6">
      <header className="w-full h-[10%] px-1">
        <div className="w-full h-full flex items-center justify-between gap-10">
          <h1 className="font-bold text-[28px] text-gray-700">
            Cuenta y configuración
          </h1>
          <p>
            Necesitas una configuración adicional?{" "}
            <Link href={"/contacto"} className="text-blue-500 pl-1">
              Contactanos
            </Link>
          </p>
        </div>
      </header>

      <div className="w-full h-px bg-gray-200"></div>

      <section className="py-4 pb-16 w-full min-h-4/5">
        <h1 className="text-[20px] text-gray-800">Application updates</h1>
        <div className="flex flex-wrap gap-3 pt-4">
          <PerfilSwitch name="Email notifications about changes in tasks"></PerfilSwitch>
          <PerfilSwitch name="Get infrequent updates, announcements, and exclusive promotions"></PerfilSwitch>
          <PerfilSwitch name="Activity from other members"></PerfilSwitch>
          <PerfilSwitch name="Events and offers"></PerfilSwitch>
          <PerfilSwitch name="Activity in folders"></PerfilSwitch>
          <PerfilSwitch name="Require email transcripts"></PerfilSwitch>
          <PerfilSwitch name="Someone adds your product to a collection"></PerfilSwitch>
          <PerfilSwitch name="Get infrequent updates"></PerfilSwitch>
          <PerfilSwitch name="Invitee notifications"></PerfilSwitch>
          <PerfilSwitch name="Setting options"></PerfilSwitch>
          <PerfilSwitch name="Events and offers"></PerfilSwitch>
        </div>
      </section>

      <div className="w-full h-px bg-gray-200"></div>

      <footer className="w-full h-fit py-4 pb-16">
        <h1 className="text-[20px] text-gray-800">
          Administración de usuarios
        </h1>
        <div className="flex flex-wrap gap-3 pt-6">
          <PerfilUser src="https://github.com/shadcn.png" name="Nombre" state="Admin"></PerfilUser>
          <PerfilUser src="https://github.com/shadcn.png" name="Nombre" state="User"></PerfilUser>
          <PerfilUser src="https://github.com/shadcn.png" name="Nombre" state="Admin"></PerfilUser>
          <PerfilUser src="https://github.com/shadcn.png" name="Nombre" state="Admin"></PerfilUser>
          <PerfilUser src="https://github.com/shadcn.png" name="Nombre" state="User"></PerfilUser>
          <PerfilUser src="https://github.com/shadcn.png" name="Nombre" state="Admin"></PerfilUser>
        </div>
      </footer>
    </div>
  );
}
