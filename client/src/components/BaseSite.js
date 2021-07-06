import React from "react";
import styles from "../styles/Basesite.module.scss"

export default function BaseSite(props)  {
    return(
        <div className={styles.mainBackground}>
            {props.site}
        </div>
    );
}