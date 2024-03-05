'use client'
import useStarWars from "@/app/data/hooks/useStarWars";
import Personagens from "@/components/starwars/Personagens"
import Background from "@/components/starwars/Background"
import Filmes from "@/components/starwars/Filmes";

export default function PaginaStarWars() {
    const {personagens, processando, filmes, voltar, selecionarPersonagem} = useStarWars()

    return (
      <div className="flex flex-col gap-5 justify-center items-center h-screen">
            <Background/>
            {processando ? (
                    <div>Processando...</div>
                    ) : filmes.length > 0 ? (    
                        <Filmes voltar={voltar} filmes={filmes} />
                    ) : personagens.length > 0 ? (                
                    <Personagens personagens={personagens} selecionar={selecionarPersonagem} />
                ): (
                    <div>Dados não encontrados</div>
                )
            }                
        </div>
    );
}
  