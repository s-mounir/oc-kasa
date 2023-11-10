import banner_about from "../../assets/banner_about.png";
import banner_homepage from "../../assets/banner_homepage.png";

function Banner(props){
    const banner = props.page === "About" ? banner_about : banner_homepage;
    const text = props.page === "Homepage" ? true : false;

    return (
        <div className='BannerDiv'>
            <img className='BannerImg' src={banner} alt="Banner"/>
            <div className='BannerShadow'></div>
            {text && <p className='BannerText'>Chez vous, partout et ailleurs</p>}
        </div>
    )
}

export default Banner