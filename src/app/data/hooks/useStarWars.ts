'use client';
import { useCallback, useEffect, useState } from "react"
import useProcessando from "./useProcessando";

export default function useStarWars() {
    const { processando, iniciarProcessamento, finalizarProcessamento} = useProcessando()
    const [personagens, setPersonagens] = useState<any>([])
    const [personagemSelecionado, setPersonagemSelecionado] = useState<any>([])
    const [filmes, setFilmes] = useState<any>([])

    const obterFilmes = useCallback(async function (personagemSelecionado: any) {
        if(!personagemSelecionado?.films?.length)
            return
        try{
            iniciarProcessamento()
            const reqs = personagemSelecionado.films.map (async (film: string) => {
                const resp = await fetch(film)   
                return resp.json()
            })
    
            const filmes = await Promise.all(reqs)
            setFilmes(filmes)
    
            console.log(filmes)
        } finally {
            finalizarProcessamento()
        }
    },[iniciarProcessamento, finalizarProcessamento])
    
    const obterPersonagens = useCallback(async function () {
        try{
            console.log('Teste')
            iniciarProcessamento()
            const resp = await fetch('https://swapi.dev/api/people/')
            const dados = await resp.json()
            setPersonagens(dados.results)
        } finally{
            finalizarProcessamento()
        }
    },[iniciarProcessamento, finalizarProcessamento])

    useEffect(() => {
        obterPersonagens()
    }, [obterPersonagens])

    useEffect(() => {
        obterFilmes(personagemSelecionado)
    },[personagemSelecionado, obterFilmes])

    function selecionarPersonagem(personagem: any){
        setPersonagemSelecionado(personagem)
        console.log(personagem.name)
    }

    function voltar(){
        setPersonagemSelecionado(null)
        setFilmes ([])
    }
    
    return{
        personagens,
        processando,
        selecionarPersonagem,
        filmes,
        voltar
    }

}