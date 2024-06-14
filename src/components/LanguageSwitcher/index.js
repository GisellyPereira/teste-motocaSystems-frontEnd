import i18n from "../../i18n/config";
import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
    setLanguage(lng);
  };

  useEffect(() => {
    const lng = localStorage.getItem("i18nextLng");
    if (lng && lng !== i18n.language) {
      i18n.changeLanguage(lng);
      setLanguage(lng);
    }
  }, []);

  return (
    <select
      value={language}
      className="bg-gray dark:bg-medium hover:bg-gray-400 text-medium dark:text-light  font-bold py-1 px-2 rounded-md focus:border-medium"
      onChange={(e) => changeLanguage(e.target.value)}
    >

      <option value="pt">PT</option>
      <option value="en">EN</option>
      <option value="es">ES</option>
      <option value="fr">FR</option>
    </select>
  );
}
