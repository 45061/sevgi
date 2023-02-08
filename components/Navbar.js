import { useDispatch, useSelector } from "react-redux";

import { Burger, Box, NavLink, Drawer, Menu } from "@mantine/core";
import { IconBuildingSkyscraper } from "@tabler/icons";

import { showHamburgerNav } from "../store/actions/modalAction";

import Image from "next/image";

import styles from "../styles/components/Navbar.module.scss";
import DrawerNav from "./DrawerNav";
import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [opened, setOpened] = useState(false);

  const dispatch = useDispatch();

  const handleClic = () => {
    dispatch(showHamburgerNav());
  };

  const { showingHamburgerNav } = useSelector((state) => state.modalReducer);

  return (
    <div className={styles.nav}>
      <div className={styles.nav__contact}>
        <p>Carrera: 80D # 22 - 72</p>
        <p>Cel: 305 801 0485</p>
      </div>
      <div className={styles.nav__navBar}>
        <Burger
          opened={showingHamburgerNav}
          onClick={handleClic}
          color="#d1aa65"
        />
        <Link href="/">
          <Image src="/Sevgi.png" alt="Sevgi Logo" width={150} height={80} />
        </Link>
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <button>
              <IconBuildingSkyscraper size={16} stroke={1.5} color="#d1aa65" />
              Conocenos
            </button>
          </Menu.Target>
          <Menu.Dropdown>
            <Link href="/room1">
              <NavLink label="Habitación Familiar" />
            </Link>
            <Link href="/room2">
              <NavLink label="Habitacion Triple Baño Privado" />
            </Link>
            <Link href="/room3">
              <NavLink label="Habitacion Triple Baño Compartido" />
            </Link>
          </Menu.Dropdown>
        </Menu>
      </div>
      <Drawer
        opened={showingHamburgerNav}
        onClose={handleClic}
        size="xl"
        position="bottom"
      >
        <DrawerNav />
      </Drawer>
    </div>
  );
}
