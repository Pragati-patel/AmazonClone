import styles from "./SearchFeild.module.scss";
import { HiOutlineSearch } from "react-icons/hi";

export default function SearchFeild() {
  return (
    <div className={styles.SearchFeild_wrapper}>
      <form className="flex">
        <div className={styles.nav_left}>All</div>
        <div className={styles.nav_fill}>
          <input
            className={styles.search_input}
            type="text"
            id="twotabsearchtextbox"
            name="field-keywords"
            autoComplete="off"
            placeholder=""
            dir="auto"
            tabIndex="0"
            aria-label="Search"
            spellCheck="false"
          />
        </div>
        <div className={styles.nav_right}>
          <HiOutlineSearch size={"1.5rem"} color="#000000" />
        </div>
      </form>
    </div>
  );
}
