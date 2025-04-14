import Image from "next/image";

export default function Home() {
  const items = [
    {
      title: "Zapatilla Nova Runner",
      description: "Diseñada para corredores apasionados, la Nova Runner combina ligereza, amortiguación reactiva y un diseño moderno que te impulsa en cada zancada.",
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      title: "Zapatilla Street Flex",
      description: "Ideal para el uso diario, la Street Flex ofrece comodidad durante todo el día con una suela flexible y un diseño urbano que va con todo.",
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      title: "Zapatilla Titan Force",
      description: "Potencia, soporte y durabilidad se unen en la Titan Force. Perfecta para entrenamientos intensos o rutinas de gimnasio exigentes.",
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      title: "Zapatilla Urban Shadow",
      description: "Con un look minimalista y materiales de primera calidad, la Urban Shadow es perfecta para quienes buscan estilo sin renunciar al confort.",
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      title: "Zapatilla TrailX Terrain",
      description: "Explorá nuevos caminos con la TrailX Terrain, equipada con tracción superior y resistencia al agua para aventuras sin límites.",
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      title: "Zapatilla AirLite Pro",
      description: "Tan liviana que olvidarás que la llevás puesta. La AirLite Pro está diseñada para brindar máxima ventilación y libertad de movimiento.",
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      title: "Zapatilla Retro Volt",
      description: "Inspirada en los modelos clásicos de los 90, la Retro Volt combina estética vintage con tecnología moderna de amortiguación.",
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      title: "Zapatilla StormGuard GTX",
      description: "Con membrana impermeable y suela antideslizante, la StormGuard GTX es tu mejor aliada para enfrentar la lluvia y terrenos resbaladizos.",
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
  ];
  return (
    <>
    <div
    className="hero min-h-screen"
    style={{
      backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
    }}>
    <div className="hero-overlay"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Impulsá tu presencia digital</h1>
        <p className="mb-5">
        Llegá más lejos con soluciones creativas, ágiles y a medida. Diseño, estrategia y tecnología trabajando para vos.
        </p>
        <button className="btn btn-primary">Empezar ahora</button>
      </div>
    </div>
  </div>
  <div className="">
    {/* Titulo */}
    <div className="mt-10">
      <h2 className="text-center text-4xl font-bold">Explorá la colección</h2>
    </div>
    {/* cartas de productos */}
    <div className="flex mt-2 flex-wrap">
      {/* Card */}
      {
        items.map((item,key) => (
          <div className="card bg-base-100 w-full md:w-1/2 lg:w-1/4 shadow-sm">
            <figure className="px-10 pt-10">
              <img
                src={item.image}
                alt="Shoes"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.description}</p>
              <div className="card-actions">
                <button className="btn btn-primary">Comprar</button>
              </div>
            </div>
          </div>

        ))
      }
    </div>
  </div>
  </>
  );
}
