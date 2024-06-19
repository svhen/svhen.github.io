export default function Design(props) {
  const { type, image1, image2, image3, image4 } = props;
  return (
    <div className="mt-32 overflow-hidden sm:mt-40">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <div className="mb-4">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Acabados
              </h2>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                Cielo raso. Zonas húmedas Cerámica en ducha y piso de baños,
                cocina y patio de ropas. Ventanas en aluminio. Pisos Cerámica o
                laminado a elección en el resto del apartamento
              </p>
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Acabados mínimos
            </h2>

            <p className="mt-6 text-xl leading-8 text-gray-600">
              Paredes pintadas con una mano de blanco. Baño social con sanitario
              y céramica en la ducha.
            </p>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                src={image1}
                alt=""
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <img
                  src={image2}
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img
                  src={image3}
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                  src={image4}
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
