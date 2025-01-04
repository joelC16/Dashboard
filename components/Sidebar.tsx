import SidebarLink from "./SidebarLink";
import SidebarPerfil from "./SidebarPerfil";
import { Button } from "@/components/ui/button";

const links = [
  { name: "Dashboard", href: "/dashboard", icon: "ICO" },
  { name: "Vuelos", href: "/vuelos", icon: "ICO" },
  { name: "Hoteles", href: "/hoteles", icon: "ICO" },
  { name: "Paquetes", href: "/paquetes", icon: "ICO" },
  { name: "Favoritos", href: "/favoritos", icon: "ICO" },
  { name: "Reservas", href: "/reservas", icon: "ICO" },
  { name: "Finanzas", href: "/finanzas", icon: "ICO" },
  { name: "Trello", href: "/trello", icon: "ICO" },
  { name: "Pasajeros", href: "/pasajeros", icon: "ICO" },
];

export default function Sidebar() {
  return (
    <div className="fixed flex justify-between items-center flex-col h-screen w-72 pt-3 pb-3 bg-white text-black">
     
      <div className="flex flex-col justify-between items-center w-full">
        <div className="w-full flex items-center justify-center">
          <SidebarPerfil></SidebarPerfil>
        </div>
        <div className="w-4/5 h-px bg-gray-200"></div>
        <div className="w-full pb-4">
          <h2 className="font-bold pt-3 pb-3 pl-3">LABELS</h2>
          <ul className="list-none">
            {links.map((link) => (
              <li key={link.href} className="">
                <SidebarLink
                  href={link.href}
                  name={link.name}
                  icon={link.icon}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-4/5 h-px bg-gray-200"></div>

      <div className="w-full flex justify-center items-center pb-4 pt-2">
        {/* <button className="bg-blue-200 font-bold text-blue-700 px-6 py-2 rounded-md hover:bg-blue-700 hover:text-white transform transition-all duration-300">Contactar Soporte</button> */}
        <Button variant={"outline"} size={"lg"}>
          Contactar Soporte
        </Button>
      </div>

    </div>
  );
}
