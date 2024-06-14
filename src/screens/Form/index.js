import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header";

function Form() {
  const { t } = useTranslation();

  const [codigo, setCodigo] = useState("");
  const [modelo, setModelo] = useState("");
  const [cor, setCor] = useState("");
  const [valor, setValor] = useState("");
  const [status, setStatus] = useState("Em estoque");
  const [erro, setErro] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!codigo || !modelo || !cor || !valor) {
      setErro(t("please_fill_in_all_fields"));
    } else {
      console.log("Dados enviados:", { codigo, modelo, cor, valor, status });
      setErro("");
    }
  };

  return (
    <div className="bg-light dark:bg-dark w-screen min-h-screen">
      <Header />

      <div className="px-20">
        <h1 className="text-dark dark:text-light text-2xl font-semibold">
          {t("motorcycle_registration")}
        </h1>
        <div className="border-t border-dark dark:border-light my-5"></div>
      </div>

      <div className="text-center mt-20 mb-10">
        <h2 className="text-dark dark:text-light text-3xl font-semibold">
          {t("fill_in_the_information_below_t_register_a_motorcycle")}
        </h2>
      </div>

      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="rounded-lg w-full max-w-[420px] space-y-8"
        >
          {renderInput("codigo", t("input_code"), "#", codigo, setCodigo)}
          {renderInput(
            "modelo",
            t("input_motorcycle_model"),
            "",
            modelo,
            setModelo
          )}
          {renderInput("cor", t("input_color"), "", cor, setCor)}
          {renderInput("valor", t("input_price"), "", valor, setValor)}

          <div className="relative">
            <select
              id="status"
              className="block w-full px-4 py-4 mt-2 bg-light dark:bg-dark border border-dark dark:border-light rounded-md text-dark dark:text-light focus:border-blue focus:outline-none focus:ring"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>{t("in_stock_option")}</option>
              <option>{t("non-stock_option")}</option>
              <option>{t("transit_option")}</option>
            </select>
            <label
              htmlFor="status"
              className="absolute text-dark dark:text-light transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-light dark:bg-dark px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
            >
              {t("input_status")}
            </label>
          </div>

          {erro && <div className="text-red-500 text-sm">{erro}</div>}

          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 bg-blue text-white rounded-md point hover:bg-blueHover transition-all duration-200"
          >
            + {t("register")}
          </button>
        </form>
      </div>
    </div>
  );
}

function renderInput(id, label, placeholder, value, onChange) {
  return (
    <div className="relative" key={id}>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full px-4 py-3 mt-2 bg-light dark:bg-dark border border-dark dark:border-light rounded-md text-dark dark:text-light focus:border-blue focus:outline-none focus:ring"
      />
      <label
        htmlFor={id}
        className="absolute text-dark dark:text-light transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-light dark:bg-dark px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
      >
        {label}
      </label>
    </div>
  );
}

export default Form;
