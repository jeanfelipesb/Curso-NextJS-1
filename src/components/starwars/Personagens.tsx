interface PersonagensProps{
    personagens: any
}

export default function personagens(props: PersonagensProps) {

    function renderizarPersonagem(){
        return (
            <ul>
                {props.personagens.map((p:any) => (
                    <li key={p.name}>{p.name}</li>
                ))}
            </ul>
        )
    }

    return (
      <div>{renderizarPersonagem()}</div>
    );
  }
  