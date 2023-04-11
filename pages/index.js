import Head from "next/head";
import CategoryCard from "../cards/CategoryCard";
import BannerCarousel from "../components/BannerCarousel";
import CategorySection from "../components/CategorySection";
import BottomFooter from "../components/Footer/BottomFooter";
import UpperFooter from "../components/Footer/UpperFooter";
import MenuHeader from "../components/Header/MenuHeader";
import TopHeader from "../components/Header/TopHeader";
import ImagesMultiCarousel from "../components/ImagesMultiCarousel";
import MultiCarousel from "../components/MultiCarousel";
import SignInCTA from "../components/SignInCTA";
import styles from "../styles/Home.module.scss";
import TodayDeals from "../components/Today'sDeals";

export default function Home() {
  return (
    <div className={`${styles.container} bg-[#e7e7e7]`}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <TopHeader />
      <MenuHeader />
      {/* <MegaMenu/> */}
      <BannerCarousel/>
      {/* <CategoryCard/> */}
      <CategorySection/>
      <TodayDeals/>
      <ImagesMultiCarousel/>
      <MultiCarousel/>
      <SignInCTA />
      <UpperFooter />
      <BottomFooter />
    </div>
  );
}
