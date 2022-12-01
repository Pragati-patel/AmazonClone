import styles from "./style.module.scss";
import Image from "next/image";
import { Images } from "../../../public/assests/images";
import { AiOutlineMenu } from "react-icons/ai";

export default function MenuHeader() {
  const menuList = [
    { item: "Sell" },
    { item: "Best  Sellers" },
    { item: "Mobiles" },
    { item: "Today's Deals" },
    { item: "Customer service" },
    { item: "Electronics" },
    { item: "Prime" },
    { item: "Home & kitchen" },
    { item: "Fashion" },
  ];
  return (
    <div className={styles.menu_header_wrapper}>
      <div className={styles.menu_list}>
        <ul>
          <li className="flex items-center">
            <AiOutlineMenu size={"1.2rem"} className="mr-2" /> All
          </li>
          {menuList.map((i, index) => {
            return <li key={index}>{i.item}</li>;
          })}
        </ul>
      </div>
      <div className="menu_header_img">
        <Image src={Images.menuHeader} alt="alt atribute" />
      </div>
    </div>
  );
}
