export default function Aptos(props) {
  const { area, title, image, price } = props;
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
          <p className="mt-6 text-lg leading-8 text-gray-300">
            {price}
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
        <a
          href="#"
          className="rounded-md border px-3.5 py-2.5 text-2xl font-semibold text-white shadow-sm hover:bg-black-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Contactar agente inmobiliario <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  );
}
