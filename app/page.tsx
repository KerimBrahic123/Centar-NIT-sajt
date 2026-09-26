"use client";

import Link from "next/link";


export default function Home() {
  return (
    <main className="home">

      
      <section className="pocetna">

       
        <div className="pocetna-image">
          <img
            src="/Nit.png"
            alt="Kurs programiranja za osnovce"
          />
        </div>

        
        <div className="content">
          <h1>🧠 Kurs programiranja za osnovce</h1>

          <h3>
            Otključaj moć svog uma i nauči da stvaraš – ne samo da koristiš
            tehnologiju!
          </h3>

          <p>
            Na našem kursu programiranja, učenici osnovnih škola kroz zabavu i
            praktičan rad uče osnove logičkog razmišljanja, kodiranja i
            digitalne kreativnosti.
          </p>

          <h3>💡 Šta deca dobijaju?</h3>

          <ul>
            <li>Razvijaju logičko i kreativno razmišljanje</li>
            <li>Uče da rešavaju probleme na zanimljiv način</li>
            <li>
              Stiču osnovno znanje iz programskih jezika (Python, HTML, CSS i
              dr.)
            </li>
            <li>Rade u malim grupama uz podršku mentora</li>
          </ul>

          <p>
            Broj mesta je ograničen – prijavi se na vreme i postani
            <strong> mladi programer budućnosti!</strong>
          </p>

          
        </div>
      </section>


      
      <section className="servisi">

        <p className="title">
          Vaša ideja - Naše iskustvo
        </p>

        <h2>
          Poboljšajte vašu ideju i dajte joj novi
          <br />
          identitet uspeha
        </h2>


        <div className="kartice">

        
          <div className="kartica">
            <div className="icon">
              
            </div>

            <h3>Obuke I Kursevi</h3>

            <div className="linkovi">
              <Link href="c-sharp">C# osnove</Link>
              <Link href="python-osnove">Python osnove</Link>
              <Link href="it-za-sve">IT za sve</Link>
              <Link href="it-camp">IT camp</Link>
            </div>
          </div>


          
          <div className="kartica">
            <div className="icon">
              
            </div>

            <h3>Inkubator</h3>

            <div className="linkovi">
              <Link href="bus-sharp">BusSharp</Link>
              <Link href="bau-sharp">BauSharp</Link>
              <Link href="klinika">Klinika</Link>
              <Link href="ikresoft">Ikresoft</Link>
              <Link href="rez-studio">REZ studio</Link>
            </div>
          </div>


          
          <div className="kartica">
            <div className="icon">
              
            </div>

            <h3>IT Zajednica</h3>

            <div className="linkovi">
              <Link href="meetup-druzenja">Meetup druženja</Link>
              <Link href="radionice-sa-developerima">Radionice sa developerima</Link>
              <Link href="aktuelizacija-it-primene">Aktuelizacija IT primene</Link>
              <Link href="predstavljanje-novih-trendova">Predstavljanje novih trendova</Link>
              <Link href="popularizacija-it-medju-decom">Popularizacija IT među decom i mladima</Link>
            </div>
          </div>

        </div>
      </section>

      


      
      <style jsx>{`

        * {
          box-sizing: border-box;
        }

        .home {
          min-height: 100vh;
          background: #1d1d1f;
          color: white;
          font-family: Arial, Helvetica, sans-serif;
        }


       

        .pocetna {
          max-width: 1200px;
          margin: 0 auto;
          padding: 70px 40px 100px;

          display: flex;
          align-items: flex-start;
          gap: 40px;
        }

        .pocetna-image {
          width: 43%;
          flex-shrink: 0;
        }

        .pocetna-image img {
          width: 100%;
          display: block;
          border-radius: 2px;
        }

        .pocetna-content {
          flex: 1;
        }

        .content h1 {
          font-size: 30px;
          margin: 0 0 25px;
        }

        .pocetna-content h3 {
          font-size: 17px;
          line-height: 1.6;
          margin: 20px 0;
        }

        .pocetna-content Link {
          color: #d0d0d0;
          font-size: 16px;
          line-height: 1.7;
        }

        .pocetna-content ul {
          padding-left: 25px;
          color: #d0d0d0;
          line-height: 2;
        }

        .pocetna-content li {
          margin-bottom: 5px;
        }

        .pocetna-content button {
          margin-top: 20px;
          padding: 18px 45px;

          background: #0638c9;
          color: white;

          border: none;
          border-radius: 4px;

          font-size: 16px;
          font-weight: bold;

          cursor: pointer;

          transition: 0.3s;
        }

        .pocetna-content button:hover {
          background: #0754ff;
          transform: translateY(-2px);
        }


        

        .servisi {
          max-width: 1200px;
          margin: 0 auto  50px;
          

          padding: 70px 40px;

          background: #050568;

          border-radius: 20px;
        }

        .title {
          text-align: center;
          color: #a83b35;
          font-size: 14px;
          margin-bottom: 25px;
        }

        .servisi h2 {
          text-align: center;
          font-size: 30px;
          line-height: 1.4;
          margin-bottom: 25px;
        }


        

        .kartice {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  align-items: stretch;
}

.kartica {
  text-align: center;
  padding: 30px 20px;
  border-radius: 20px;
  transition: 0.3s;
}

.kartica:hover {
  transform: translateY(-8px);
}

.icon {
  height: 200px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 100px;

  margin-bottom: 25px;
}

.kartica h3 {
  font-size: 20px;
  margin-bottom: 25px;
}

.linkovi,
.links {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding:50px;
}

.linkovi a,
.links a {
  color: yellow;
  font-size: 25px;
  text-decoration: none;
}



      `}</style>

    </main>
  );
}