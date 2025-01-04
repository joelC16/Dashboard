import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function PerfilUser ({ src, name, state }: { src: string, name: string, state: string }) {
  return (
    <div className="flex items-center justify-between w-[calc(42%-1rem)] h-fit p-4">
      <div className="flex items-center gap-6">
        <Avatar className="w-14 h-14">
          <AvatarImage src={src} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="font-bold text-gray-800">{name}</div>
      </div>
      <Button variant={"secondary"} size={"lg"}>
        {state}
      </Button>
    </div>
  );
}
