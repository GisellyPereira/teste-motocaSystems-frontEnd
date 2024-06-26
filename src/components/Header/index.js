// import { useTranslation } from "react-i18next";
import DarkModeSwitcher from "../DarkModeSwitcher";
import iconHome from "../../assets/images/home.png"; 
import person from "../../assets/images/person.png";
import LanguageSwitcher from "../LanguageSwitcher";



export default function Header() {
//   const { t } = useTranslation();

  return (
    <header className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
            <DarkModeSwitcher />
            <LanguageSwitcher />
        </div>
      
      <div className="flex items-center space-x-4">
        <img src={iconHome} alt="home" className="object-cover" />
        <img src={person} alt="person" className="object-cover " />
      </div>
    </header>
  );
}
