import { memo, useState } from "react"
import './style.scss';
import { AiOutlineFacebook, AiOutlineMenu, AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatters } from "utils/formatter";
import { ROUTERS } from "utils/router";

const HeaderLayout = () => {
    const [isShowCategories, setShowCategories] = useState(true);   
    const [menus] = useState([
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
                                        <li key={menuKey} className={menuKey === 0 ? "active_menu" : ""}>
                                            <Link to={menu?.path}>{menu?.name}</Link>
                                            {
                                                menu.child && (
                                                    <ul className="header_menu_dropdown">
                                                        {menu?.child.map((childrenItem, childKey) => (
                                                            <li key={`${menuKey}-${childKey}`}>
                                                                <Link to={childrenItem.path}>{childrenItem.name}</Link>
                                                            </li>
                                                        )
                                                        )}
                                                    </ul>
                                                )
                                            }
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
            <div className="container">
                <div className="row hero_categories_container">
                    <div className="col-lg-3 hero_categories">
                        <div className="hero_categories_all" onClick={() => setShowCategories(!isShowCategories)}>
                            <AiOutlineMenu />
                            Danh sách sản phẩm
                        </div>
                        {
                                <ul className={isShowCategories ? "" : "hidden"}>
                                <li>
                                    <Link to={"#"}>Laptop gamming</Link>
                                </li>
                                <li>
                                    <Link to={"#"}>PC</Link>
                                </li>
                                <li>
                                    <Link to={"#"}>Keybroad</Link>
                                </li>
                                <li>
                                    <Link to={"#"}>ASUS</Link>
                                </li>
                                <li>
                                    <Link to={"#"}>DELL</Link>
                                </li>
                            </ul>
                        }

                    </div>
                    <div className="col-lg-9 hero_search_container">
                        <div className="hero_search">
                            <div className="hero_search_form">
                            <form>
                                <input type="text" value="" name="" placeholder="Bạn muốn tìm gì ?"></input>
                                <button type="submit">Tìm kiếm</button>
                            </form>
                            </div>
                            <div className="hero_search_phone">
                                <div className="hero_phone_icon">
                                    <AiOutlinePhone/>
                                </div>
                                <div className="hero_phone_number">
                                    <p>0123456789</p>
                                    <span>Hỗ trợ 24/7</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero_items">
                            <div className="hero_text">
                                <span>Laptop xịn</span>
                                <h2>Pc chất lượng <br/>
                                nhất Việt Nam
                                </h2>
                                <p>Miễn phi giao dịch</p>
                                <Link to={"#"} className="primary_button">
                                    Mua ngay
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default memo(HeaderLayout);