import React from 'react'
import {ReactComponent as Logo} from "../../assets/images/logo.svg"
import Styles from "../../assets/scss/styles.module.scss";
export default function index() {
  return (
    <div className={Styles.TopBarContainer}>
      <Logo/>
    </div>
  )
}
