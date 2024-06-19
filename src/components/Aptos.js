const finishedApartmentFeatures = [
  {
    name: "Cielo raso.",
    description: "Drywall pintado de blanco.",
  },
  {
    name: "Zonas húmedas y otros.",
    description:
      "Cerámica en ducha y piso de baños, cocina y patio de ropas. Ventanas en aluminio.",
  },
  {
    name: "Pisos.",
    description: "Cerámica o laminado a elección en el resto del apartamento.",
  },
  {
    name: "Baños.",
    description: "Ducha eléctrica, lavamanos, sanitario.",
  },
  {
    name: "Cocinas.",
    description: "Mesón, barra americana.",
  },
  {
    name: "Patio de ropas.",
    description: "Lavadero. ",
  },
];

const almostFinishedApartmentFeatures = [
  {
    name: "Paredes.",
    description: "Paredes pintadas con una mano de blanco.",
  },
  {
    name: "Baños.",
    description: "Baño social con sanitario y céramica en la ducha.",
  },
  {
    name: "Hidráulicos.",
    description: "Puntos hidráulicos en cocina, patio y baños.",
  },
  {
    name: "Accesorios.",
    description: "Accesorios eléctricos, más una luz led en cada espacio.",
  },
];

export default function Aptos(props) {
  const { area, title, image, finishedApartment } = props;
  return (
    <div className="mt-32 sm:mt-56 bg-gray-900 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            {area}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            src={image}
            alt="App screenshot"
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
            width={2432}
            height={1442}
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8 text-center">
        <p className="mt-2 text-white">Imágenes de referencia</p>
      </div>
    </div>
  );
}
