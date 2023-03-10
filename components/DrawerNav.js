import styles from "../styles/components/DrawerNav.module.scss";
import MenuNavbar from "./MenuNavbar";
import RoomsData from "./RoomsData";
import Link from "next/link";
import { useDispatch } from "react-redux";

import { showHamburgerNav } from "../store/actions/modalAction";

export default function DrawerNav() {
  const dispatch = useDispatch();

  const handleClic = () => {
    dispatch(showHamburgerNav());
  };

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Link href="/" prefetch={false}>
          <h2 onClick={handleClic}>Home</h2>
        </Link>
        <Link href="/about" prefetch={false}>
          <h2 onClick={handleClic}>Nosotros</h2>
        </Link>
        <Link href="/contact" prefetch={false}>
          <h2 onClick={handleClic}>Contacto</h2>
        </Link>
        <MenuNavbar />
      </div>
      <div className={styles.rooms}>
        <RoomsData />
      </div>
    </div>
  );
}
