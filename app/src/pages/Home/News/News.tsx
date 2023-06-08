import React from "react";

import styles from "./News.module.scss";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface Props {
}

export const News: React.FC<Props> = () => {

  return (
    <div className={styles.container}>
        <div className={styles.title}>Activité collaborateurs</div>
        <div className={styles.wrapper}>
            <div className={styles.list_item}>

                <div className={styles.item}>
                    <div className={styles.img}><img src="https://placehold.co/400" alt="Image"/></div>
                    <div className={styles.text}>Nico a reçu un nouveau badge</div>
                    <div className={styles.badge}><img src="https://placehold.co/400" alt="Image" /></div>
                </div>
                <div className={styles.item}>
                    <div className={styles.img}><img src="https://placehold.co/400" alt="Image"/></div>
                    <div className={styles.text}>Nico a reçu un nouveau badge</div>
                    <div className={styles.badge}><img src="https://placehold.co/400" alt="Image" /></div>
                </div>
                <div className={styles.item}>
                    <div className={styles.img}><img src="https://placehold.co/400" alt="Image"/></div>
                    <div className={styles.text}>Nico a reçu un nouveau badge khk jh kjhk jhk kljlk jlkjkjkjk</div> {/* Limiter le nombre de caractères */}
                    <div className={styles.badge}></div>

                </div>

            </div>
        </div>
    
    </div>
  );
};

export default News;
