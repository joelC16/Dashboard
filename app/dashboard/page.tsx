import DashboardFile from "@/components/DashboardFile"
import DashboardLegend from "@/components/DashboardLegend";

const archivos = [
  {
    id: 1,
    name: 'Spreadsheet.csv',
    src: '/iconos/csv.png',
    date: '27 May 2020',
    alt: "Archivo"
  },
  {
    id: 2,
    name: 'Report_annual.pdf',
    src: '/iconos/pdf.png',
    date: '27 May 2020',
    alt: "Archivo"
  },
  {
    id: 3,
    name: 'Spreadsheet.csv',
    src: '/iconos/csv.png',
    date: '27 May 2020',
    alt: "Archivo"
  },
  {
    id: 4,
    name: 'Report_annual.pdf',
    src: '/iconos/pdf.png',
    date: '27 May 2020',
    alt: "Archivo"
  }, {
    id: 5,
    name: 'Spreadsheet.csv',
    src: '/iconos/csv.png',
    date: '27 May 2020',
    alt: "Archivo"
  },
  {
    id: 6,
    name: 'Report_annual.pdf',
    src: '/iconos/pdf.png',
    date: '27 May 2020',
    alt: "Archivo"
  }, {
    id: 7,
    name: 'Spreadsheet.csv',
    src: '/iconos/csv.png',
    date: '27 May 2020',
    alt: "Archivo"
  },
  {
    id: 8,
    name: 'Report_annual.pdf',
    src: '/iconos/pdf.png',
    date: '27 May 2020',
    alt: "Archivo"
  }, {
    id: 9,
    name: 'Spreadsheet.csv',
    src: '/iconos/csv.png',
    date: '27 May 2020',
    alt: "Archivo"
  },
  {
    id: 10,
    name: 'Report_annual.pdf',
    src: '/iconos/pdf.png',
    date: '27 May 2020',
    alt: "Archivo"
  }, {
    id: 11,
    name: 'Spreadsheet.csv',
    src: '/iconos/csv.png',
    date: '27 May 2020',
    alt: "Archivo"
  },
  {
    id: 12,
    name: 'Report_annual.pdf',
    src: '/iconos/pdf.png',
    date: '27 May 2020',
    alt: "Archivo"
  }, {
    id: 13,
    name: 'Spreadsheet.csv',
    src: '/iconos/csv.png',
    date: '27 May 2020',
    alt: "Archivo"
  },
  {
    id: 14,
    name: 'Report_annual.pdf',
    src: '/iconos/pdf.png',
    date: '27 May 2020',
    alt: "Archivo"
  }, {
    id: 15,
    name: 'Spreadsheet.csv',
    src: '/iconos/csv.png',
    date: '27 May 2020',
    alt: "Archivo"
  }
];

export default function DashboardPage() {
  return (
    <div className="bg-white h-full w-full rounded-md p-6">
      <header className="w-full h-[10%]">
        <ul className="w-full h-full flex items-center justify-end gap-10">
          <DashboardLegend docName={"Docs"} color={"bg-blue-500"}></DashboardLegend>
          <DashboardLegend docName={"Csv"} color={"bg-green-500"}></DashboardLegend>
          <DashboardLegend docName={"Pdf"} color={"bg-red-500"}></DashboardLegend>
          <DashboardLegend docName={"Ppt"} color={"bg-orange-500"}></DashboardLegend>
        </ul>
      </header>
      <div className="w-full h-px bg-gray-200"></div>
      <section className="grid grid-cols-5 grid-rows-3 gap-x-7 gap-y-4 p-4 w-full h-full">
        {archivos.map((archivo) => (
          <DashboardFile key={archivo.id} src={archivo.src} name={archivo.name} date={archivo.date} alt={archivo.alt}></DashboardFile>
        ))}
      </section>
      <footer className="flex items-center justify-center w-full h-[10%] ">
        <div className="flex items-center gap-4 text-gray-500">
          <button>⬅</button>
          <div>1</div>
          <span>of</span>
          <div>6</div>
          <button>➡</button>
        </div>

      </footer>
    </div>
  )
}
