import Header from "../../components/Header";

function Form() {
  return (
    <div className=" bg-light dark:bg-dark w-screen min-h-screen">
      <Header />

      <div>
        <div className="px-20">
          <h1 className="text-dark dark:text-light text-2xl font-semibold">
            Registro de Motos
          </h1>
          <div className="border-t border-dark dark:border-light mb-10 mt-5"></div>
        </div>

        <div>
          <div className="text-center mb-10">
            <h2 className="text-dark dark:text-light text-2xl font-semibold">
              Preencha as informações abaixo para registrar uma Moto 🏍️
            </h2>
          </div>
          <div className="flex justify-center">
            <form className=" rounded-lg w-full max-w-[420px] space-y-8">
              <div className="relative">
                <input
                  type="text"
                  id="codigo"
                  placeholder="#"
                  className="block w-full px-4 py-3 mt-2 bg-light dark:bg-dark border border-dark dark:border-light rounded-md text-light focus:border-blue-500 focus:outline-none focus:ring"
                />
                <label
                  htmlFor="codigo"
                  className="absolute text-dark dark:text-light transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-light dark:bg-dark px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
                >
                  Código
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="modelo"
                  className="block w-full px-4 py-3 mt-2 bg-light dark:bg-dark border border-dark dark:border-light rounded-md text-light focus:border-blue-500 focus:outline-none focus:ring"
                />
                <label
                  htmlFor="modelo"
                  className="absolute text-dark dark:text-light transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-light dark:bg-dark px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
                >
                  Modelo da Moto
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="cor"
                  className="block w-full px-4 py-3 mt-2 bg-light dark:bg-dark border border-dark dark:border-light rounded-md text-light focus:border-blue-500 focus:outline-none focus:ring"
                />
                <label
                  htmlFor="cor"
                  className="absolute text-dark dark:text-light transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-light dark:bg-dark px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
                >
                  Cor
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="valor"
                  className="block w-full px-4 py-3 mt-2 bg-light dark:bg-dark border border-dark dark:border-light rounded-md text-light focus:border-blue-500 focus:outline-none focus:ring"
                />
                <label
                  htmlFor="valor"
                  className="absolute text-dark dark:text-light transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-light dark:bg-dark px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
                >
                  Valor
                </label>
              </div>

              <div className="relative">
                <select
                  id="status"
                  className="block w-full px-4 py-4 mt-2 bg-light dark:bg-dark border border-dark dark:border-light rounded-md text-dark dark:text-light focus:border-blue-500 focus:outline-none focus:ring"
                >
                  <option>Em estoque</option>
                  <option>Sem estoque</option>
                  <option>Em trânsito</option>
                </select>
                <label
                  htmlFor="status"
                  className="absolute text-dark dark:text-light transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-light dark:bg-dark px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
                >
                  Status
                </label>
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 mt-4 bg-blue text-white rounded-md hover:bg-blue-600"
              >
                + REGISTRAR
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
