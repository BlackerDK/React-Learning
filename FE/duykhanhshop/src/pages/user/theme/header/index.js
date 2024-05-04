import { memo } from "react"
import './style.scss';
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatters } from "utils/formatter";

const HeaderLayout = () => {
    return (
        <div className="header_top">
            <div className="container">
                <div className="row">
                    <div className="col-6 header_top_left">
                        <ul>
                            <li>
                            <AiOutlineMail/>
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
                                <AiOutlineFacebook/>
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                <AiOutlineMail/>
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                <AiOutlineYoutube/>
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                <AiOutlineUser/>
                                </Link>
                                <span>Login</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default memo(HeaderLayout);