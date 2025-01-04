import { Switch } from "@/components/ui/switch";

export default function PerfilSwitch({ name }: { name: string }) {
  return (
    <div className="flex items-start gap-5 w-[calc(40%-1rem)] p-4">
        <Switch></Switch>
        <p className="text-gray-800">{name}</p>
    </div>
  );
}
