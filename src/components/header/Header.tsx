import css from "./Header.module.sass";
import { Link } from "react-router-dom";
import Logo from "../UI/logo/Logo";
import useMenuToggle from "../../hook/useMenuToggle";
import CustomLinkList from "../UI/customLinkList/CustomLinkList";
import HeaderToggle from "./headerToggle/HeaderToggle";
import tabsAll from '../../tabs.json'

const Header = () => {

  const { menuOpen, menuToggleHandler } = useMenuToggle();


  return (
    <header className={css.header}>
      <div className={css.header__content}>
        <Link to="/several__table/" className={css.header__content__logo}>
          <Logo white />
        </Link>
        <nav
          className={`${css.header__content__nav} 
            ${menuOpen ? css.isMenu : ""}`}
        >
          <ul>
            {tabsAll.tabs.map((item) => (
              <CustomLinkList
                key={item.id}
                link={item.path}
                name={item.title}
                onClick={menuToggleHandler}
              />
            ))}
          </ul>
        </nav>
        <HeaderToggle
          menuOpen={menuOpen}
          onClick={menuToggleHandler}
        />
      </div>
    </header>
  );
};

export default Header;