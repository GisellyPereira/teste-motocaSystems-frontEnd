// import { useTranslation } from "react-i18next";
import DarkModeSwitcher from "../DarkModeSwitcher";


export default function Header() {
//   const { t } = useTranslation();

  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
       Registro de Motos
      </h1>
      <div className="flex gap-2 items-center">
       
       <DarkModeSwitcher />
      </div>
    </header>
  );
}
