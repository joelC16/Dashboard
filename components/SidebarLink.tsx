"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation'


export default function SidebarLink({
    href,
    icon,
    name,
}: {
    href: string;
    icon: string;
    name: string;
}) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href} className="h-9 flex items-center gap-9 hover:bg-blue-50 transition-all ease-in-out duration-200">
            <div className={`w-[6px] rounded-r-lg h-full transition-all ease-in-out duration-500 delay-75 ${isActive ? 'bg-blue-400': 'bg-none'}`}></div>
            <span className={`${isActive ? 'text-blue-400': 'bg-none'} transition-all ease-in-out duration-500 delay-75`}>{ icon }</span>
            <p>{ name }</p>
        </Link>
    );
}
