import { useEffect, useState } from "react";
import logo from "../../public/images/brand-name.png";
import logoTwo from "../../public/images/logo.png";
import { useCart } from "../context/Cart";
import toast from "react-hot-toast";

const HeaderTab = () => {
  const { customProducts } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const total = customProducts.reduce((accumulator, item) => {
      return accumulator + (item.price || 0);
    }, 0);

    setTotalPrice(total);
  }, [customProducts]);

  const notify = () => toast.success("only for Demo");
  return (
    <header className="header-mainWrapper">
      {/* Icon on the left */}
      <div className="header-icon">
        {/* Use FontAwesome or another icon library */}
        <img src={logo} alt={"brand logo"} id="main-logo" />
        <img src={logoTwo} alt={"brand logo"} id="mobile-logo" />
      </div>

      {/* Buttons on the right */}
      <div className="header-buttons">
        <button className="header-button" onClick={notify}>
          Add to Cart
        </button>
        <div className="header-price-list">
          {customProducts?.map((item, index) => {
            return item.price ? (
              <div
                key={`${item.name}-${index}`}
                className="price-list-separator"
              >
                <span>{`${item.name}`}</span>
                <span>{`${item.price}`}</span>
              </div>
            ) : null;
          })}
          <span className="header-price">₹ {totalPrice}/-</span>
        </div>
      </div>
    </header>
  );
};

export default HeaderTab;
