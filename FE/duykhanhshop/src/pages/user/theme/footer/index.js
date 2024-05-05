import { memo } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { AiOutlineFacebook, AiOutlineYoutube } from "react-icons/ai";


const FooterLayout = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="footer_about">
                            <h1 className="footer_about_logo">
                                Shop React
                            </h1>
                            <ul>
                                <li>Địa chỉ: Hồ Chí Minh</li>
                                <li>Số điện thoại: 0123456789</li>
                                <li>Gmail: duykhanhvip28@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="footer_widget">
                            <h6>Cửa hàng</h6>
                            <ul>
                                <li>
                                    <Link to={''}>Liên hệ</Link>
                                </li>
                                <li>
                                    <Link to={''}>Thông tin về chúng tôi</Link>
                                </li>
                                <li>
                                    <Link to={''}>sản phẩm kinh danh</Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Link to={''}>Thông tin tài khoản</Link>
                                </li> <li>
                                    <Link to={''}>Giỏ hàng</Link>
                                </li> <li>
                                    <Link to={''}>Danh sách ưa thích</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="footer_widget">
                            <h6>Khuyến mãi & Ưu đãi</h6>
                            <p>Đăng kí thông tin tại đây</p>
                            <form className="" action="#">
                                <div className="input_group">
                                    <input className="" type="text" placeholder="Nhập thông tin vào đây"></input>
                                    <button className="button_submit" type="submit">Đăng kí</button>
                                </div>
                                <div className="footer_widget_social">
                                    <div>
                                        <AiOutlineFacebook />
                                    </div>
                                    <div>
                                        <AiOutlineYoutube />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default memo(FooterLayout);