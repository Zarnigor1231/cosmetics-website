import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import { Container } from "@mui/system";

// css
import './advertising.css'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black", borderRadius: '50px' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black", borderRadius: '50px' }}
            onClick={onClick}
        />
    );
}

export const Advertising = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed:1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        // speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />


    };
    return (
        <Container>
            <Slider {...settings}>
                <div>
                    <div className="slider-list">
                        <div className="slider-item">
                            <h3 className="slider-title">Face Makeup Brush</h3>
                            <h4 className="slider-title-info">Skincare Brush Set Sale 30% Off</h4>
                            <button className="slider-title-btn">Shop Now</button>
                        </div>
                        <img className="slider-item-img" src="https://cdek.shopping/storage/notino-pl-images/3523/327585/notino-spa-collection-skincare-brush-set-with-stand-zestaw-pedzli-do-pielegnacji-skory.jpg" width='600' height={754} alt="" />
                    </div>
                </div>
                <div>
                    <div className="slider-list ">
                        <div className="slider-item">
                            <h3 className="slider-title">Eldan</h3>
                            <h4 className="slider-title-info">Crema Giorno Notte 24H cream 10% discount</h4>
                            <button className="slider-title-btn">Shop Now</button>
                        </div>
                        <img className="slider-item-img mt-4" src="https://www.cosmetic-store.ru/media/154/154016.jpg" width='600' height={754} alt="" />
                    </div>
                </div>
                <div>
                    <div className="slider-list">
                        <div className="slider-item">
                            <h3 className="slider-title">LALiQUE</h3>
                            <h4 className="slider-title-info">Lalique Le Parfum Lalique 30% discount</h4>
                            <button className="slider-title-btn">Shop Now</button>
                        </div>
                        <img className="slider-item-img mt-8" src="https://parfum-paradise.ru/upload/iblock/062/0626d01d52a5426d6848da2c394b10e1.jpg" width='600' height={754} alt="" />
                    </div>
                </div>
            </Slider>
        </Container>
    )
}


