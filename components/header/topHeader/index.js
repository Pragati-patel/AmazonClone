import * as React from 'react';
import SearchFeild from "../SearchFeild";
import styles from "./style.module.scss";
import Image from "next/image";
import { Images } from "../../../public/assests/images";
import { CgShoppingCart } from "react-icons/cg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import LanguagePopover from '../../Popover/LanguagePopover';

export default function TopHeader() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

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
      <div className={styles.top_header_box}>
        <Typography
          aria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          Language
        </Typography>
      </div>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
          marginTop:"1rem",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography  
         sx={{ p: 1, }}><LanguagePopover /></Typography>
      </Popover>



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
