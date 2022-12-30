import React from 'react'
import styles from './Content.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand } from '@fortawesome/free-solid-svg-icons';
import image1 from '../../assets/images/lp.jpg';

export default function Content() {
  return (
    <div className={styles.container}>
      
      <div className={styles.homeItem}>
        <div>
          <FontAwesomeIcon icon={faHand} size='2x'/>
          <p>Hi, I am Loi Phan. A Web Developer</p>
        </div>

        <img src={image1} alt='LP images'/>
      </div>
      
    </div>
  )
}
