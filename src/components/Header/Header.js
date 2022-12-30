import React from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { Slide, Paper } from "@mui/material";
import HeaderSlice from "./HeaderSlice";

export default function Header() {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
           <a href={'/'}>Logo</a>
          </div>
        <ul className={styles.menu}>
          <li>About</li>
        </ul>
        <div className={styles.contact}>Get Contact</div>
        <div className={styles.menuWrap}>
          <div
            onClick={() => (openMenu ? setOpenMenu(false) : setOpenMenu(true))}
          >
            {openMenu ? (
              <>
                <p>COLSE</p>
                <FontAwesomeIcon icon={faX} />
              </>
            ) : (
              <>
                <p>MENU</p>
                <FontAwesomeIcon icon={faBars} />
              </>
            )}
          </div>
        </div>

        <Slide
          in={openMenu}
          style={{
            display: "flex",
            position: "absolute",
            width: "100%",
            top: "0",
            left: "0",
          }}
        >
          <Paper elevation={1}>
            <HeaderSlice />
          </Paper>
        </Slide>
      </div>
    </>
  );
}
