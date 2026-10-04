"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#1d1d20",
        color: "#eeeeee",
        fontFamily: "Arial, sans-serif",
        padding: "60px 7%",
        boxSizing: "border-box",
      }}
    >
     
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "70px",
        }}
      >
        
        <div
          style={{
            flex: "1",
            maxWidth: "650px",
          }}
        >
          <h1
            style={{
              fontSize: "52px",
              fontWeight: "500",
              color: "#e47ba5",
              marginBottom: "35px",
            }}
          >
            Centar NIT
          </h1>

          <p>
            NIT je počeo kao projekat nekoliko entuzijasta koji su imali za cilj
            da industriji odeće pomognu implementacijom IT rešenja u njihovim
            poslovnim aktivnostima. Kasnije smo uvideli da i drugim
            industrijama treba pomoć u implementaciji IT rešenja u poslovanju i
            okrenuli se, pre svega, promociji primene IT rešenja u različitim
            aspektima poslovanja i osnaživanju IT zajednice u Novom Pazaru i
            okolini.
          </p>

          <p>
            Kako bi ispunili novofromirane ciljeve, naše snage smo usmerili na
            tri povezana projekta:
          </p>

          <ol>
            <p>IT biznis inkubator</p>
            <p>IT obuke</p>
            <p>
              Promocija primene IT rešenja i jačanje IT zajednice.
            </p>
          </ol>

          <p>
            Od 2020. godine većinu naših aktivnosti organizujemo u saradnji sa
            Regionalnim inovacionim startup centrom Novi Pazar u želji da
            postignemo sinergijski efekat i damo Novom Pazaru novu snagu.
          </p>

          <p>
            Vremenom smo proširili naše aktivnosti na Rašku, Sjenicu, Tutin,
            Gračanicu, Leposavić, Lešak, Rožaje, Petnjicu, Gusinje i Bijelo
            Polje.
          </p>

          <h2>Naša vizija</h2>

          <p>
            Vizija organizacije je da razvije IT sektor koji će omogućiti
            mladim ljudima da ostanu u području Novog Pazara. Cilj je da im se
            pruže mogućnosti za pristojan rad, karijerni razvoj i život u
            prosperitetnoj zajednici.
          </p>

          <h2>Naša misija</h2>

          <p>
            Misija organizacije je uspostaviti stimulativan ekosistem gde IT
            startupovi mogu da se razvijaju i ostvare svoj puni potencijal kroz
            znanje i inovacije. Mi težimo da pružimo podršku u vidu edukativnih
            programa, mentorstva i pristupa finansiranju.
          </p>

          <h2>Vrednosti koje delimo i promovišemo:</h2>

          <ol>
            <p>
              <strong>Inovacija:</strong> Podsticanje kreativnosti i novih
              ideja u svakodnevnom radu.
            </p>

            <p>
              <strong>Obrazovanje:</strong> Stalno unapređivanje znanja i
              veština kroz edukativne programe i obuke.
            </p>

            <p>
              <strong>Zajedništvo:</strong> Jačanje zajednice kroz saradnju i
              podršku među članovima.
            </p>

            <p>
              <strong>Održivost:</strong> Posvećenost dugoročnom razvoju i
              ekološkoj odgovornosti.
            </p>

            <p>
              <strong>Integritet:</strong> Rad sa visokim moralnim standardima,
              poštenjem i transparentnošću.
            </p>

            <p>
              <strong>Jednakost:</strong> Promocija ravnopravnosti i inkluzije,
              omogućavajući svim članovima zajednice jednake šanse za uspeh.
            </p>

            <p>
              <strong>Tehnološki napredak:</strong> Korišćenje i promocija
              najnovijih tehnoloških dostignuća za unapređenje društva i
              ekonomije.
            </p>

            <p>
              <strong>Podrška preduzetništvu:</strong> Pružanje pomoći i
              resursa za razvoj i uspeh startupa.
            </p>
          </ol>

          <div
  style={{
    marginTop: "50px",
    textAlign: "center",
  }}
>
  <Link
    href="/uspesne-price"
    style={{
      display: "inline-block",
      padding: "14px 30px",
      background: "#e47ba5",
      color: "#ffffff",
      textDecoration: "none",
      borderRadius: "8px",
      fontSize: "17px",
      fontWeight: "600",
    }}
  >
    Uspješne priče
  </Link>
</div>
        </div>

        
        <div
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/Nit.png"
            alt="Centar NIT"
            style={{
              width: "100%",
              maxWidth: "650px",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>
      </section>
      </main>
      );
    }
