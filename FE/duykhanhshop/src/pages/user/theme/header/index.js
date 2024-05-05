import { memo, useState } from "react"
import './style.scss';
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatters } from "utils/formatter";
import { ROUTERS } from "utils/router";

const HeaderLayout = () => {
    const [menus, setMenus] = useState([
        {
            name: "Trang chủ",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Cửa hàng",
            path: ROUTERS.USER.SHOP,
        },
        {
            name: "Sản phẩm",
            path: ROUTERS.USER.PRODUCT,
            isShowSubMenus: false,
            child: [
                {
                    name: "Laptop",
                    path: ROUTERS.USER.PRODUCT,
                },
                {
                    name: "Key broad",
                    path: ROUTERS.USER.PRODUCT,
                },
                {
                    name: "PC",
                    path: ROUTERS.USER.PRODUCT,
                }
            ]
        },
        {
            name: "Bài viết",
            path: ROUTERS.USER.BLOG,
        },
        {
            name: "Liên hệ",
            path: ROUTERS.USER.CONTACT,
        },
    ]);
    return (
        <>
            <div className="header_top">
                <div className="container">
                    <div className="row">
                        <div className="col-6 header_top_left">
                            <ul>
                                <li>
                                    <AiOutlineMail />
                                    hello@gmail.com
                                </li>
                                <li>
                                    Miễn phí giao dịch đến {formatters(200000)}
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 header_top_right">
                            <ul>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineFacebook />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineMail />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineYoutube />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineUser />
                                    </Link>
                                    <span>Login</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3">
                        <div className="header_logo">
                            <h1>Shop React</h1>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <nav className="header_menus">
                            <ul>
                                {
                                    menus?.map((menu, menuKey) => (
                                        <li key={menuKey} className={menuKey===0 ? "active_menu" : ""}>
                                            <Link to={menu?.path}>{menu?.name}</Link>
                                        </li>
                                    ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="col-xl-3">
                        <div className="header_cart">
                            <div className="header_cart_price">
                                <span>
                                    {formatters(1000000)}
                                </span>
                            </div>
                            <ul>
                                <li>
                                    <Link to="#"><AiOutlineShoppingCart /></Link><span>5</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default memo(HeaderLayout);