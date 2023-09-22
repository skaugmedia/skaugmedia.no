import { Link } from "react-router-dom";
import etsy from "/src/Images/etsy.png";
import facebook from "/src/Images/facebook.png";
import instagram from "/src/Images/instagram.png";
import pinterest from "/src/Images/pinterest.png";
import tiktok from "/src/Images/tiktok.png";

export function SocialIcons({ itemClassName, containerClassName }) {
  return (
    <div className={containerClassName}>
      <Link to="https://www.facebook.com/profile.php?id=100089990337611">
        <img className={itemClassName} src={facebook} alt="Facebook" />
      </Link>
      <Link to="https://www.instagram.com/skaugmedia/">
        <img className={itemClassName} src={instagram} alt="Instagram" />
      </Link>
      
      <Link to="https://www.etsy.com/shop/SkaugMedia?ref=search_shop_redirect">
        <img className={itemClassName} src={etsy} alt="Etsy" />
      </Link>
      
    </div>
  );
}
