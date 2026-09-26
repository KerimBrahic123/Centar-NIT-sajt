import Image from "next/image";
import Link from "next/link";

export default function CSharpOsnove(){
    return(
        <main>
     <div className="Csharposnove">
       <img src="/Nit.png" alt="c# slika"/>
        <h1>Kurs C# osnove</h1>       
        <h2>3 meseca Nastava 3x sedmično</h2>
        <p>C# je programski jezik koji nam omogućuje pisanje kako konzolnih tako i Windows aplikacija, pa čak i aplikacija za Web.
     U prvom delu koji se odnosi na osnove programskog jezika C# primeri će se odnositi na delove koda neke konzolne aplikacije dok
    će se u drugom delu detaljnije objašnjavati razvoj Windows aplikacija te će i primeri biti sa odgovarajućim grafičkim korisničkim interfejsom.</p>
     </div>

     <style>{`
       .Csharposnove{
        display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
          padding: 50px;
    }
        `
     };
     </style>
     </main>
    );
}