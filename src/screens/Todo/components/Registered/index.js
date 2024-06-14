import { useTranslation } from "react-i18next";
import Header from "../../components/Header";

function Registered() {
    const { t } = useTranslation();


  return (
    <div className="bg-light dark:bg-dark w-screen min-h-screen">
      <Header />

      <div className="px-20">
        <h1 className="text-dark dark:text-light text-2xl font-semibold">
          {t("motorcycle_table")}
        </h1>
        <div className="border-t border-dark dark:border-light my-5"></div>
      </div>

      
      </div>
   
  );
}



export default Registered;
