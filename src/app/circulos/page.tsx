import Circulo from "@/components/basicos/circulo"

export default function Circulos() {
  return (
    <div className="flex justify-around items-center h-screen">
        <Circulo texto="Circ #1"/>
        <Circulo texto="Circ #2"/>
        <Circulo texto="Circ #3" quasePerfeito={true}/>
    </div>
  );
}
