const jobOpenings = [
  {
    id: 1,
    salary: "Parque principal",
    location: "2 cuadras",
  },
  {
    id: 2,
    salary: "Nueva salida a Pereira",
    location: "2 cuadras",
  },
  {
    id: 3,
    salary: "Nuevo teatro",
    location: "3 cuadras",
  },
  {
    id: 4,
    salary: "Parque machete",
    location: "3 cuadras",
  },
  {
    id: 5,
    salary: "Clínica Sta Clara",
    location: "3 cuadras",
  },
  {
    id: 6,
    salary: "Tienda D1",
    location: "1 cuadra",
  },
];

export default function Location() {
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
        <div className="w-full lg:max-w-lg lg:flex-auto">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Ubicación
          </h2>
          <img
            src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80"
            alt=""
            className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
          />
        </div>
        <div className="w-full lg:max-w-xl lg:flex-auto">
          <h3 className="sr-only">Job openings</h3>
          <ul className="divide-y divide-gray-100">
            {jobOpenings.map((opening) => (
              <li key={opening.id} className="py-4">
                <dl className="relative flex flex-wrap gap-x-3">
                  <dd className="mt-4 text-base font-semibold leading-7 text-gray-900">
                    {opening.salary}
                  </dd>
                  <dd className="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
                    <svg
                      viewBox="0 0 2 2"
                      className="h-0.5 w-0.5 flex-none fill-gray-300"
                      aria-hidden="true"
                    >
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    {opening.location}
                  </dd>
                </dl>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex border-t border-gray-100 pt-8">
            <a
              href="#"
              className="text-xl font-semibold leading-6 text-blue-600 hover:text-blue-500"
            >
              Contactar agente inmobiliario{" "}
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
