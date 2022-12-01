import SearchFeild from "../SearchFeild";
import styles from "./style.module.scss";
import Image from "next/image";
import { Images } from "../../../public/assests/images";
import { CgShoppingCart } from "react-icons/cg";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function TopHeader() {
  return (
    <div className={styles.top_header_wrapper}>
      <div className={`${styles.top_header_box} w-36 box-border`}>
        <Image
          src={Images.amazonLogo}
          className={styles.amazonLogo}
          alt="amazon-logo"
        />
      </div>
      <div className={`${styles.top_header_box} flex-row `}>
        <div className="flex items-end">
          <HiOutlineLocationMarker size={"1.2rem"} className="mb-1" />
          <div className="flex flex-col">
            <p className={styles.normal_text}>Hello</p>
            <p className={styles.bold_text}>Select your address</p>
          </div>
        </div>
      </div>
      <div className={styles.top_header_box3}>
        <SearchFeild />
      </div>
      <div className={styles.top_header_box}>Language</div>
      <div className={styles.top_header_box}>
        <p className={styles.normal_text}>Hello, sign in</p>
        <p className={styles.bold_text}>Account & Lists</p>
      </div>
      <div className={styles.top_header_box}>
        <p className={styles.normal_text}>Retruns</p>
        <p className={styles.bold_text}>& Orders</p>
      </div>
      <div className={styles.top_header_box}>
        <p className="flex items-center">
          <CgShoppingCart size={"2rem"} className="mr-1" />
          Cart
        </p>
      </div>
    </div>
  );
}
