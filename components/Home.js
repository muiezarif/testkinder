import React, {Component} from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import Contact from "./Contact";
import Router from "next/router";
import {CookieConsent} from "react-cookie-consent";

class Home extends Component {
    onHomeClick = () => {
        Router.push("/")
    }
    onCoachesClick = () => {
        Router.push("/coaches")
    }
    onCoachesAppForCoachesClick = () => {
        Router.push("/coaches/app-for-coaches")
    }
    onCoachesDownloadsClick = () => {
        Router.push("/coaches/downloads")
    }
    onCoachesFirstAidCoursesClick = () => {
        Router.push("/coaches/first-aid-courses")
    }
    onCoachesLiveOnlineMeetingsClick = () => {
        Router.push("/coaches/live-online-meetings")
    }
    onCoachesOnlineVideoCoursesClick = () => {
        Router.push("/coaches/online-video-courses")
    }
    onCoachesRegionalTrainingsClick = () => {
        Router.push("/coaches/regional-trainings")
    }
    onCoachesSportSuppliesClick = () => {
        Router.push("/coaches/sports-supplies")
    }
    onContactClick = () => {
        Router.push("/contact")
    }
    onFranchiseClick = () => {
        Router.push("/franchise-jobs")
    }
    onFranchiseBecomeCoachClick = () => {
        Router.push("/franchise-jobs/become-coach")
    }
    onFranchiseBecomeFranchiseClick = () => {
        Router.push("/franchise-jobs/become-franchise")
    }
    onFranchiseRegionalBusinessLeaderClick = () => {
        Router.push("/franchise-jobs/regional-business-leader")
    }
    onKidsSportsClubsClick = () => {
        Router.push("/kids-sports-clubs")
    }
    onKidsSportsClubsAppForCoachesClick = () => {
        Router.push("/kids-sports-clubs/app-for-coaches")
    }
    onKidsSportsClubsClubMemberServiceClick = () => {
        Router.push("/kids-sports-clubs/club-member-service")
    }
    onKidsSportsClubsFirstAidCoursesClick = () => {
        Router.push("/kids-sports-clubs/first-aid-courses")
    }
    onKidsSportsClubsRegionalTrainingsClick = () => {
        Router.push("/kids-sports-clubs/regional-trainings")
    }
    onKidsSportsClubsTeamPackagesClick = () => {
        Router.push("/kids-sports-clubs/team-packages")
    }
    onKidsSportsClubsWebSolutionsClick = () => {
        Router.push("/kids-sports-clubs/web-solutions")
    }
    onParentClick = () => {
        Router.push("/parents")
    }
    onParentCounselorsClick = () => {
        Router.push("/parents/counselors")
    }
    onParentInfoBlogsClick = () => {
        Router.push("/parents/info-blogs")
    }
    onParentNatureAppClick = () => {
        Router.push("/parents/nature-app")
    }
    onParentNewsClick = () => {
        Router.push("/parents/news")
    }
    onParentOnlineVideoCoursesClick = () => {
        Router.push("/parents/online-video-courses")
    }
    onParentYoutubeClick = () => {
        Router.push("/parents/youtube")
    }
    onSportsForKidsClick = () => {
        Router.push("/sports-for-kids")
    }
    onSportsForKidsAppForHomeTrainingClick = () => {
        Router.push("/sports-for-kids/app-for-hometraining")
    }
    onSportsForKidsEventsForKidsClick = () => {
        Router.push("/sports-for-kids/events-for-kids")
    }
    onSportsForKidsHolidayCampsClick = () => {
        Router.push("/sports-for-kids/holiday-camps")
    }
    onSportsForKidsShopForKidsClick = () => {
        Router.push("/sports-for-kids/shop-for-kids")
    }
    onSportsForKidsSportsCoursesClick = () => {
        Router.push("/sports-for-kids/sports-courses")
    }
    onSportsForKidsSportsSchoolClick = () => {
        Router.push("/sports-for-kids/sports-school")
    }
    render() {
        return (
            <div>
                <Navbar translation ={this.props.translation}/>
                <section id="hero" className="d-flex" style={{ backgroundImage: "url(/images/pic1-new.png)" }}>

                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column pt-3">
                                <h1>{this.props.translation("home_layout_first_section_heading")}</h1>
                                <h2>{this.props.translation("home_layout_first_section_paragraph")}
                                </h2>
                                <div>
                                    <a href="#contact" className="btn-get-started scrollto">{this.props.translation("home_layout_first_section_button")}</a>
                                </div>
                                {/*<div>*/}
                                {/*    <p className="mt-3">{this.props.translation("home_layout_first_section_paragraph2")}</p>*/}
                                {/*</div>*/}
                            </div>
                            {/*<div className="col-lg-6 order-1 order-lg-2 hero-img">*/}
                            {/*    <img src="/images/pic1.jpg" className=" animated rounded-3" alt=""/>*/}
                            {/*</div>*/}
                        </div>
                    </div>

                </section>
                <main id="main">
                    <section id="services" className="services bg-light-blue">
                        <div className="container" data-aos="fade-up">

                            {/*<div className="section-title">*/}
                            {/*    <h2>{this.props.translation("sfk_ss_layout_second_section_heading")}</h2>*/}
                            {/*    /!*<p>Check out the great services we offer</p>*!/*/}
                            {/*</div>*/}

                            <div className="row align-items-center">
                                <div className="col-md-6 col-lg-3 d-flex justify-content-center" data-aos="zoom-in"
                                     data-aos-delay="100">
                                    <div className="icon-box cursor-pointer" onClick={this.onSportsForKidsClick}>
                                        {/*<div className="icon"><i className="bx bxl-dribbble"></i></div>*/}
                                        <h4 className="title"><a href="">Angebote</a></h4>
                                        <p className="description">{this.props.translation("home_sports_for_kids")}</p>
                                        {/*<div>*/}
                                        {/*    <a className="btn-get-started scrollto cursor-pointer">Try Now For Free</a>*/}
                                        {/*</div>*/}
                                    </div>

                                </div>
                                <div className="col-md-6 col-lg-3 d-flex justify-content-center" data-aos="zoom-in"
                                     data-aos-delay="100">
                                    <div className="icon-box cursor-pointer" onClick={this.onCoachesClick}>
                                        {/*<div className="icon"><i className="bx bxl-dribbble"></i></div>*/}
                                        <h4 className="title"><a href="">Angebote</a></h4>
                                        <p className="description">{this.props.translation("home_coaches")}</p>
                                        {/*<div>*/}
                                        {/*    <a className="btn-get-started scrollto cursor-pointer">Try Now For Free</a>*/}
                                        {/*</div>*/}
                                    </div>

                                </div>

                                <div className="col-md-6 col-lg-3 d-flex justify-content-center" data-aos="zoom-in"
                                     data-aos-delay="200">
                                    <div className="icon-box cursor-pointer" onClick={this.onParentClick}>
                                        {/*<div className="icon"><i className="bx bx-file"></i></div>*/}
                                        <h4 className="title"><a href="">Angebote</a></h4>
                                        <p className="description">{this.props.translation("home_parents")}</p>
                                        {/*<div>*/}
                                        {/*    <a className="btn-get-started scrollto cursor-pointer">Try Now For Free</a>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-3 d-flex justify-content-center" data-aos="zoom-in"
                                     data-aos-delay="300">
                                    <div className="icon-box cursor-pointer" onClick={this.onKidsSportsClubsClick}>
                                        {/*<div className="icon"><i className="bx bx-tachometer"></i></div>*/}
                                        <h4 className="title"><a href="">Angebote</a></h4>
                                        <p className="description">{this.props.translation("home_kids_sports_clubs")}</p>
                                        {/*<div>*/}
                                        {/*    <a className="btn-get-started scrollto cursor-pointer">Try Now For Free</a>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>
                    <section id="about" className="about section-bg">
                        <div className="container">

                            <div className="row justify-content-between align-items-center">
                                <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                                    <img src="/images/pic2.jpg" className="img-fluid rounded-3" alt="" data-aos="zoom-in"/>
                                </div>
                                <div className="col-lg-6 pt-5 pt-lg-0">
                                    <h3 data-aos="fade-up">{this.props.translation("home_layout_second_section_heading")}</h3>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_second_section_point1")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_second_section_point2")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_second_section_point3")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_second_section_point4")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_second_section_point5")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_second_section_point6")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100"><a className="btn-get-started scrollto cursor-pointer" onClick={this.onSportsForKidsClick}>{this.props.translation("more_text")}</a></p>
                                </div>
                            </div>

                        </div>
                    </section>
                    <section id="about" className="about bg-light-blue">
                        <div className="container">

                            <div className="row justify-content-between align-items-center">
                                <div className="col-lg-6 pt-5 pt-lg-0">
                                    <h3 data-aos="fade-up">{this.props.translation("home_layout_third_section_heading")}</h3>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_second_section_point1")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_second_section_point2")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_second_section_point3")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_second_section_point4")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_second_section_point5")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_second_section_point6")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100"><a className="btn-get-started scrollto cursor-pointer" onClick={this.onCoachesClick}>{this.props.translation("more_text")}</a></p>

                                </div>
                                <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                                    <img src="/images/pic3.jpg" className="img-fluid rounded-3 img-custom-style" alt="" data-aos="zoom-in"/>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="about" className="about section-bg">
                        <div className="container">

                            <div className="row justify-content-between align-items-center">
                                <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                                    <img src="/images/pic4.jpg" className="img-fluid rounded-3 img-custom-style" alt="" data-aos="zoom-in"/>
                                </div>
                                <div className="col-lg-6 pt-5 pt-lg-0">
                                    <h3 data-aos="fade-up">{this.props.translation("home_layout_fourth_section_heading")}</h3>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_third_section_point1")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_third_section_point2")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_third_section_point3")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_third_section_point4")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_third_section_point5")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_third_section_point6")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_third_section_point7")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100"><a className="btn-get-started scrollto cursor-pointer" onClick={this.onParentClick} >{this.props.translation("more_text")}</a></p>

                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="about" className="about bg-light-blue">
                        <div className="container">

                            <div className="row justify-content-between align-items-center">
                                <div className="col-lg-6 pt-5 pt-lg-0">
                                    <h3 data-aos="fade-up">{this.props.translation("home_layout_fifth_section_heading")}</h3>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_fourth_section_point1")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_fourth_section_point2")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_fourth_section_point3")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_fourth_section_point4")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_fourth_section_point5")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_fourth_section_point6")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100"><a className="btn-get-started scrollto cursor-pointer" onClick={this.onKidsSportsClubsClick}>{this.props.translation("more_text")}</a></p>

                                </div>
                                <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                                    <img src="/images/pic5.JPG" className="img-fluid rounded img-custom-style" alt="" data-aos="zoom-in"/>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="about" className="about section-bg">
                        <div className="section-title">
                            <h2>{this.props.translation("home_layout_sixth_section_heading")}</h2>
                            {/*<p>Check out the great services we offer</p>*/}
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <Carousel autoPlay={true} showArrows={false} infiniteLoop={true} dynamicHeight={false} axis="horizontal" showIndicators={false} showStatus={false}>
                                    {/*<div className="primary-color">*/}
                                    {/*    <div className="container">*/}
                                    {/*        <div className="row">*/}
                                    {/*            <div className="col-md-4 col-xs-4 col-lg-4" align="center">*/}
                                    {/*                <img src="https://media.istockphoto.com/photos/excited-woman-wearing-rainbow-cardigan-picture-id1327495437?b=1&k=20&m=1327495437&s=170667a&w=0&h=Vbl-XLyAnBoTkyGXXi-X1CFzuSHlNcn-dqB-sCosxFo=" className="avatar-img" alt=""/>*/}
                                    {/*            </div>*/}
                                    {/*            <div  className="col-md-2 col-lg-2 col-xs-2 my-auto" align="center">*/}
                                    {/*                <p>*/}
                                    {/*                    <b className="ml-10">{this.props.translation("home_layout_sixth_section_customer_name")}</b>*/}
                                    {/*                </p>*/}
                                    {/*            </div>*/}
                                    {/*            <div className="col-md-6 col-lg-6 col-xs-6 my-auto" align="left" >*/}
                                    {/*                <p>*/}
                                    {/*                    {this.props.translation("home_layout_sixth_section_customer_review")}*/}
                                    {/*                </p>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    <div className="primary-color">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-4 col-xs-4 col-lg-4" align="center">
                                                    <img src="https://image.shutterstock.com/image-photo/stock-photo-portrait-of-young-beautiful-cute-cheerful-girl-smiling-looking-at-camera-over-white-background-250nw-666258808.jpg" className="avatar-img" alt=""/>
                                                </div>
                                                <div  className="col-md-2 col-lg-2 col-xs-2 my-auto" align="center">
                                                    <p>
                                                        <b className="ml-10">{this.props.translation("home_layout_sixth_section_customer_name")}</b>
                                                    </p>
                                                </div>
                                                <div className="col-md-6 col-lg-6 col-xs-6 my-auto" align="left" >
                                                    <p>
                                                        {this.props.translation("home_layout_sixth_section_customer_review")}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<div className="primary-color">*/}
                                    {/*    <div className="container">*/}
                                    {/*        <div className="row">*/}
                                    {/*            <div className="col-md-4 col-xs-4 col-lg-4" align="center">*/}
                                    {/*                <img src="https://media.istockphoto.com/photos/very-happy-young-man-man-picture-id1332373959?b=1&k=20&m=1332373959&s=170667a&w=0&h=TKCIoc778sQTiiNFzS3mm_aUMIGcZ6VAN4Cn8mz4UaI=" className="avatar-img" alt=""/>*/}
                                    {/*            </div>*/}
                                    {/*            <div  className="col-md-2 col-lg-2 col-xs-2 my-auto" align="center">*/}
                                    {/*                <p>*/}
                                    {/*                    <b className="ml-10">{this.props.translation("home_layout_sixth_section_customer_name")}</b>*/}
                                    {/*                </p>*/}
                                    {/*            </div>*/}
                                    {/*            <div className="col-md-6 col-lg-6 col-xs-6 my-auto" align="left" >*/}
                                    {/*                <p>*/}
                                    {/*                    {this.props.translation("home_layout_sixth_section_customer_review")}*/}
                                    {/*                </p>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </Carousel>
                            </div>
                        </div>
                    </section>
                    <section id="about" className="about  bg-light-blue">
                        <div className="container">

                            <div className="row justify-content-between align-items-center">
                                <div className="col-lg-12 col-md-12 col-xs-12 d-flex align-items-center justify-content-center about-img">
                                    <img src="kids-fit-concept2.png" className="img-fluid rounded-3" alt="" data-aos="zoom-in"/>
                                </div>
                            </div>
                        </div>
                    </section>
                    <CookieConsent>{this.props.translation("cookie_text")}</CookieConsent>
                    <Contact translation ={this.props.translation}/>
                    </main>
                    <Footer translation ={this.props.translation}/>

            </div>
        );
    }
}

export default Home;