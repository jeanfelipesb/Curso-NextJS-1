interface FilmesProps{
    filmes: any
    voltar: () => void
}

export default function Filmes(props: FilmesProps) {
    return (
    <div className="flex flex-col gap-5 items-center w-full">    
        <button className="bg-slate-500 p-2 rounded-lg" onClick={props.voltar}>
            Voltar    
        </button>        
        <table className="w-3/5 text-xl opacity-70 rounded-lg overflow-hidden">
            <thead>
                <tr className="bg-zinc-900">
                    <th className="p-2 font-black">Título</th>
                    <th className="p-2 font-black">Epsódio</th>
                    <th className="p-2 font-black">Data</th>
                </tr>
            </thead>
            <tbody>
                {props.filmes.map((p: any, indice: number) => (
                    <tr className={`
                        text-center
                        ${indice % 2 === 0 ? 'bg-zinc-700' : 'bg-zinc-800' }
                    `} key={p.title}>
                        <td className="p-2">{p.title}</td>
                        <td className="p-2">{p.episode_id}</td>
                        <td className="p-2">{new Date(p.release_date).toLocaleDateString('pt-BR')}</td>
                    </tr>
                ))

                }
            </tbody>
        </table>
    </div>
    );
  }
  