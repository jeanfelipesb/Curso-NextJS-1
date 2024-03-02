'use client'
import useStarWars from "@/app/data/hooks/useStarWars";
import Personagens from "@/components/starwars/Personagens"
import Background from "@/components/starwars/background"

export default function PaginaStarWars() {
    const {personagens, obterPersonagens, processando} = useStarWars()

    return (
      <div className="flex flex-col gap-5 justify-center items-center h-screen">
            <Background/>
            <button onClick={obterPersonagens} className="bg-blue-500 p-2">
                Obter
            </button>
            {processando ? (
                    <div>Processando...</div>
                ) : personagens.length > 0 ? (                
                    <Personagens personagens={personagens} />
                ): (
                    <div>Nenhum Personagem encontrado</div>
                )
            }                
        </div>
    );
}
  