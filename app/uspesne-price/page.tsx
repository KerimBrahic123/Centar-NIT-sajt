import Image from "next/image"

const people = [
  {
    id: 1,
    name: "Enver Biševac",
    image: "/person-img.png"
  },
  {
    id: 2,
    name: "Šemsudin Plojovic",
    image: "/person-img.png"
  },
  {
    id: 3,
    name: "Mirza Delic",
    image: "/person-img.png"
  },
  {
    id: 4,
    name: "Haris Zenović",
    image: "/person-img.png"
  },
  {
    id: 5,
    name: "Sulejman Karišik",
    image: "/person-img.png"
  },
  {
    id: 6,
    name: "Rejhan Kuc",
    image: "/person-img.png"
  },
  {
    id: 7,
    name: "Melida Radončić",
    image: "/person-img.png"
  },
  {
    id: 8,
    name: "Dženan Imamović",
    image: "/person-img.png"
  },
  {
    id: 9,
    name: "Meris Skenderović",
    image: "/person-img.png"
  }, 
  {
    id: 10,
    name: "Džemil Dupljak",
    image: "/person-img.png"
  },
  {
    id: 11,
    name: "Asija Ramović",
    image: "/person-img.png"
  },
  {
    id: 12,
    name: "Jasmin Husović",
    image: "/person-img.png"
  },
  {
    id: 13,
    name: "Armin Mujković",
    image: "/person-img.png"
  },
  {
    id: 14,
    name: "Mersudin Plojović",
    image: "/person-img.png"
  },
  {
    id: 15,
    name: "Mirza Ramović",
    image: "/person-img.png"
  },
  {
    id: 16,
    name: "Faris Mecinović",
    image: "/person-img.png"
  },
  {
    id: 17,
    name: "Suad Suljović",
    image: "/person-img.png"
  },
  {
    id: 18,
    name: "Elvir Muslić",
    image: "/person-img.png"
  },
  {
    id: 19,
    name: "Ahmed Prušević",
    image: "/person-img.png"
  },
  {
    id: 20,
    name: "Imran Midović",
    image: "/person-img.png"
  },
  {
    id: 21,
    name: "Remzo Gusinac",
    image: "/person-img.png"
  },
  {
    id: 22,
    name: "Ajla Rašljanin",
    image: "/person-img.png"
  },
  {
    id: 23,
    name: "Almedin Ljajić",
    image: "/person-img.png"
  },
  {
    id: 24,
    name: "Miloš Petrović",
    image: "/person-img.png"
  },
  {
    id: 25,
    name: "Samer Ibrahimović",
    image: "/person-img.png"
  },
  {
    id: 26,
    name: "Vahid Koničanin",
    image: "/person-img.png"
  },
  {
    id: 27,
    name: "Nikola Glišović",
    image: "/person-img.png"
  },
  {
    id: 28,
    name: "Edvin Kovačević",
    image: "/person-img.png"
  },
  {
    id: 29,
    name: "Dževad Rastoder",
    image: "/person-img.png"
  },
  {
    id: 30,
    name: "Dženan Selmanović",
    image: "/person-img.png"
  },
  {
    id: 31,
    name: "Džejlan Redžepefendić",
    image: "/person-img.png"
  },
  {
    id: 32,
    name: "Ivan Slavković",
    image: "/person-img.png"
  },
  {
    id: 33,
    name: "Ćamil Plojović",
    image: "/person-img.png"
  },
  {
    id: 34,
    name: "Belma Maljanović",
    image: "/person-img.png"
  },{
    id: 35,
    name: "Muhammed Beširović",
    image: "/person-img.png"
  },
  {
    id: 36,
    name: "Alen Čalaković",
    image: "/person-img.png"
  },
  {
    id: 37,
    name: "Irfan Ugljanin",
    image: "/person-img.png"
  },
  {
    id: 38,
    name: "Ramiz Šabović",
    image: "/person-img.png"
  },
  {
    id: 39,
    name: "Dželal Dupljak",
    image: "/person-img.png"
  },
  {
    id: 40,
    name: "Ajla Gudžević",
    image: "/person-img.png"
  },
  {
    id: 41,
    name: "Ervin Kačar",
    image: "/person-img.png"
  },
  {
    id: 42,
    name: "Dženan Košuta",
    image: "/person-img.png"
  },
  {
    id: 43,
    name: "Ajša Beširović",
    image: "/person-img.png"
  },
  {
    id: 44,
    name: "Nikola Matković",
    image: "/person-img.png"
  },
  {
    id: 45,
    name: "Dženis Idrizović",
    image: "/person-img.png"
  },
  {
    id: 46,
    name: "Sara Saračević",
    image: "/person-img.png"
  },
  {
    id: 47,
    name: "Petar Vučinić",
    image: "/person-img.png"
  },
  {
    id: 48,
    name: "Džemaludin Oraovčanin",
    image: "/person-img.png"
  },
  {
    id: 49,
    name: "Tarik Alivodić",
    image: "/person-img.png"
  },
  {
    id: 50,
    name: "Tarik Ibrahimović",
    image: "/person-img.png"
  },
  {
    id: 51,
    name: "Aldin Halilović",
    image: "/person-img.png"
  },

];

export default function UspensePrice() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Uspense Price</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {people.map((person) => (
          <div
            key={person.id}
            style={{
              width: "220px",
              border: "1px solid #19447cd0",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
            }}
          >
            <Image
              src={person.image}
              alt={person.name}
              width={180}
              height={180}
              style={{
                borderRadius: "10px",
                objectFit: "cover",
              }}
            ></Image>

            <h3>{person.name}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}


