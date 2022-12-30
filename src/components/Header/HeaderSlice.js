import React from "react";
import styles from "./HeaderSlice.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const menu = [
  {
    name: "about",
    path: "/about",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

export default function HeaderSlice() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.listMenu}>
          {menu.map((i) => {
            return (
              <div key={i.name} className={styles.menu}>
                <a href={i.path}> {i.name}</a>
              </div>
            );
          })}
        </div>

        <div className={styles.listButton}>
          <div className={styles.button}>
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </div>

          <div className={styles.button}>
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </div>

          <div className={styles.button}>
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </div>
        </div>
      </div>
    </div>
  );
}
