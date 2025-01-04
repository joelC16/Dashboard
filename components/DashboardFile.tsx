import Image from "next/image";

export default function DashboardFile({
    name,
    src,
    date,
    alt
}: {
    name: string;
    src: string;
    date: string;
    alt: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg p-4 border-[1px] border-gray-200">
      <div className="w-16 h-16 flex items-center justify-center border-[1px] border-gray-200 p-2">
        <Image src={src} width={500} height={500} alt={alt} className="rounded-full bg-yellow-500"></Image>
      </div>
      <h3 className="text-gray-700 font-medium mt-2">{name}</h3>
      <p className="text-gray-500 text-sm">{date}</p>
    </div>
  );
}
