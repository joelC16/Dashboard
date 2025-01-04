

export default function DashboardLegend({
    color,
    docName
}: {
    color: string,
    docName: string
}) {
  return (
    <li className="flex items-center gap-4">
        <span className={`w-2.5 h-2.5 rounded-full ${color}`}></span>
         {docName}
    </li>
 
  )
}
