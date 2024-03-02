import { useState } from "react"

export default function useProcessando() {
    const [processando, setProcessando] = useState<boolean>(false)
        
    async function iniciarProcessamento(){
        setProcessando(true)
    }

    async function finalizarProcessamento(){
        setProcessando(false)
    }

    return{
        processando,
        iniciarProcessamento,
        finalizarProcessamento
    }
}