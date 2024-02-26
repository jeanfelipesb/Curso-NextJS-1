import Evento from "@/components/basicos/evento"

export default function PaginaEventos() {
    return (
      <div className="flex gap-5 flex-wrap justify-center items-center h-screen">
        <Evento/>
        <Evento/>
        <Evento/>
      </div>
    );
  }
  