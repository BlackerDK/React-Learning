import { memo } from "react"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import sliderImage1 from "asset/user/images/slider/Slider1.jpg";
import sliderImage2 from "asset/user/images/slider/Slider2.jpg";
import sliderImage3 from "asset/user/images/slider/Slider3.jpg";
import sliderImage4 from "asset/user/images/slider/Slider4.jpg";
import sliderImage5 from "asset/user/images/slider/Slider5.jpg";

import cartImgAcer from "asset/user/images/cart/Acer.jpg";
import cartImgAcer1 from "asset/user/images/cart/Acer1.jpg";
import cartImgAcer2 from "asset/user/images/cart/Acer2.jpg";
import cartImgAcer3 from "asset/user/images/cart/Acer3.jpg";
import cartImgAsus from "asset/user/images/cart/Asus.jpg";
import cartImgAsus1 from "asset/user/images/cart/Asus1.jpg";
import cartImgAsus2 from "asset/user/images/cart/Asus2.jpg";
import cartImgDell from "asset/user/images/cart/Dell.jpg";
import cartImgDell1 from "asset/user/images/cart/Dell1.jpg";
import cartImgDell2 from "asset/user/images/cart/Dell2.jpg";
import cartImgLenovo from "asset/user/images/cart/Lenovo.jpg";
import cartImgLenovo1 from "asset/user/images/cart/Lenovo1.jpg";
import cartImgLenovo2 from "asset/user/images/cart/Lenovo3.jpg";

import banner1 from "asset/user/images/hero/Banner1.jpg";
import banner2 from "asset/user/images/hero/Banner2.jpg";





import "./style.scss";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatters } from "utils/formatter";
const HomePage = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const imgSlideItem = [
        {
            sImage: sliderImage1,
            name: "Laptop",
        },
        {
            sImage: sliderImage2,
            name: "ASUS",
        }, {
            sImage: sliderImage3,
            name: "DELL",
        }, {
            sImage: sliderImage4,
            name: "MSI",
        }, {
            sImage: sliderImage5,
            name: "MSI2024",
        }
    ]
    const featureItems = {
        all: {
            title: "Toàn bộ",
            product: [
                {
                    img: cartImgAcer1,
                    name: "Acer1",
                    price: 100
                },
                {
                    img: cartImgAcer2,
                    name: "Acer2",
                    price: 100
                },                {
                    img: cartImgAcer,
                    name: "Acer",
                    price: 100
                },
                {
                    img: cartImgAcer3,
                    name: "Acer3",
                    price: 100
                },{
                    img: cartImgAsus,
                    name: "Asus",
                    price: 100
                },                {
                    img: cartImgAsus1,
                    name: "Asus1",
                    price: 100
                },
                {
                    img: cartImgAsus2,
                    name: "Asus2",
                    price: 100
                },
                {
                    img: cartImgDell,
                    name: "Dell",
                    price: 100
                },{
                    img: cartImgDell1,
                    name: "Dell1",
                    price: 100
                },{
                    img: cartImgDell2,
                    name: "Dell2",
                    price: 100
                },{
                    img: cartImgLenovo,
                    name: "Lenovo",
                    price: 100
                },{
                    img: cartImgLenovo1,
                    name: "Lenovo1",
                    price: 100
                },{
                    img: cartImgLenovo2,
                    name: "Lenovo2",
                    price: 100
                },
            ]
        }, acerLaptop: {
            title: "Acer",
            product: [
                {
                    img: cartImgAcer1,
                    name: "Acer1",
                    price: 100
                },
                {
                    img: cartImgAcer2,
                    name: "Acer2",
                    price: 100
                },                {
                    img: cartImgAcer,
                    name: "Acer",
                    price: 100
                },
                {
                    img: cartImgAcer3,
                    name: "Acer3",
                    price: 100
                },
            ]
        }, asusLaptop: {
            title: "Asus",
            product: [
                {
                    img: cartImgAsus,
                    name: "Asus",
                    price: 100
                },                {
                    img: cartImgAsus1,
                    name: "Asus1",
                    price: 100
                },
                {
                    img: cartImgAsus2,
                    name: "Asus2",
                    price: 100
                },
            ]
        },DellLaptop: {
            title: "Dell",
            product: [
                {
                    img: cartImgDell,
                    name: "Dell",
                    price: 100
                },{
                    img: cartImgDell1,
                    name: "Dell1",
                    price: 100
                },{
                    img: cartImgDell2,
                    name: "Dell2",
                    price: 100
                },
            ]
        },LenovoLaptop: {
            title: "Lenovo",
            product: [
                {
                    img: cartImgLenovo,
                    name: "Lenovo",
                    price: 100
                },{
                    img: cartImgLenovo1,
                    name: "Lenovo1",
                    price: 100
                },{
                    img: cartImgLenovo2,
                    name: "Lenovo2",
                    price: 100
                },
            ]
        }
    }
    const renderFeaturedProducts = (data) => {
        const tabList = [];
        const tabPanels = [];
        Object.keys(data).forEach((key, index) => {
            tabList.push(<Tab key={index}>{data[key].title}</Tab>);
            
            const tabPanel = [];
            data[key].product.forEach((item, j) => {
                tabPanel.push(<div className="col-lg-3" key={j}>
                    <div className="featured_item">
                        <div className="featured_item_pic" style={{
                            backgroundImage:`url(${item.img})`
                        }}>
                            <ul className="featured_item_pic_hover">
                                <li><AiOutlineEye /></li>
                                <li><AiOutlineShoppingCart /></li>
                            </ul>
                        </div>
                        <div className="featured_item_text">
                            <h6><Link to={"#"}>{item.name}</Link></h6>
                            <h5>{formatters(item.price)}</h5>
                        </div>
                    </div>
                
                </div>);
            });
            tabPanels.push(tabPanel);
        });
        return (
            <Tabs>
                <TabList>
                    {tabList}
                </TabList>
                {
                    tabPanels.map((item, key) => (
                        <TabPanel key={key}>
                            <div className="row">{item}</div>
                        </TabPanel>
                    ))
                }
            </Tabs>
        )
    }
    return (
        <>
            <div className="container container_categories_slider">
                <Carousel responsive={responsive} className="categories_slider">
                    {
                        imgSlideItem.map((item, key) => (
                            <div key={key} className="categories_slider_items"
                                style={{ backgroundImage: `url(${item.sImage})` }}
                            >
                                <p>{item.name}</p>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
            <div className="container">
                <div className="featured">
                    <div className="section_title">
                        <h2>Sản phẩm nổi bật</h2>
                    </div>
                    {renderFeaturedProducts(featureItems)}
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 banner_topic">
                        <img src={banner1} alt="banner1" />
                    </div>
                    <div className="col-lg-6 banner_topic">
                    <img src={banner2} alt="banner2" />
                    </div>
                </div>
            </div>
        </>

    )
};

export default memo(HomePage);