import React, {Component} from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "./Contact";
import Router from "next/router";

class Coaches extends Component {
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
                {/*<section id="hero" className="d-flex align-items-center" style={{ height:"auto" }}>*/}

                {/*    <div className="container">*/}
                {/*        <div className="row gy-4 align-items-center justify-content-center p-5">*/}
                {/*            /!*<div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">*!/*/}
                {/*            /!*    <h1>{this.props.translation("sfk_layout_second_section_heading")}</h1>*!/*/}
                {/*            /!*    /!*<h2>the kids-sport-concept for kids*!/*!/*/}
                {/*            /!*    /!*    between 3 and 12 years*!/*!/*/}
                {/*            /!*    /!*</h2>*!/*!/*/}
                {/*            /!*    <div>*!/*/}
                {/*            /!*        <a href="#contact" className="btn-get-started scrollto">{this.props.translation("sfk_ss_layout_first_section_text")}</a>*!/*/}
                {/*            /!*    </div>*!/*/}
                {/*            /!*    <div>*!/*/}
                {/*            /!*        <p className="mt-3">{this.props.translation("sfk_ss_layout_first_section_text2")}</p>*!/*/}
                {/*            /!*    </div>*!/*/}
                {/*            /!*</div>*!/*/}
                {/*            /!*<div className="col-lg-12 col-md-12 order-1 order-lg-2 hero-img">*!/*/}
                {/*            <img src="/images/trainer_overview.png" className="img-fluid animated rounded-3 m-5"  alt=""/>*/}
                {/*            /!*</div>*!/*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*</section>*/}
                <main id="main">
                    <section id="services" className="services bg-light-blue">
                        <div className="container" data-aos="fade-up">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-md-6 col-lg-3 d-flex justify-content-center" data-aos="zoom-in"
                                     data-aos-delay="300">
                                    <div className="icon-box cursor-pointer" onClick={this.onCoachesOnlineVideoCoursesClick}>
                                        <p className="description">{this.props.translation("menu_online_video_courses")}</p>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-3 d-flex justify-content-center" data-aos="zoom-in"
                                     data-aos-delay="100">
                                    <div className="icon-box cursor-pointer" onClick={this.onCoachesDownloadsClick}>
                                        <p className="description">{this.props.translation("menu_downloads")}</p>
                                    </div>

                                </div>
                                <div className="col-md-6 col-lg-3 d-flex justify-content-center" data-aos="zoom-in"
                                     data-aos-delay="100">
                                    <div className="icon-box cursor-pointer" onClick={this.onCoachesRegionalTrainingsClick}>
                                        <p className="description">{this.props.translation("menu_regional_trainings")}</p>
                                    </div>

                                </div>

                                <div className="col-md-6 col-lg-3 d-flex justify-content-center" data-aos="zoom-in"
                                     data-aos-delay="200">
                                    <div className="icon-box cursor-pointer" onClick={this.onCoachesLiveOnlineMeetingsClick}>
                                        <p className="description">{this.props.translation("menu_live_online_meetings")}</p>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-3 d-flex justify-content-center" data-aos="zoom-in"
                                     data-aos-delay="300">
                                    <div className="icon-box cursor-pointer" onClick={this.onCoachesFirstAidCoursesClick}>
                                        <p className="description">{this.props.translation("menu_first_aid_courses")}</p>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-3 d-flex justify-content-center" data-aos="zoom-in"
                                     data-aos-delay="300">
                                    <div className="icon-box cursor-pointer" onClick={this.onCoachesAppForCoachesClick}>
                                        <p className="description">{this.props.translation("menu_app_for_coaches")}</p>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-3 d-flex justify-content-center" data-aos="zoom-in"
                                     data-aos-delay="300">
                                    <div className="icon-box cursor-pointer" onClick={this.onCoachesSportSuppliesClick}>
                                        <p className="description">{this.props.translation("menu_sports_supplies")}</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>
                    <section id="about" className="about bg-light-blue">
                        <div className="container">

                            <div className="row justify-content-between align-items-center">
                                <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                                    <img src="/images/pic12.jpg" className="img-fluid rounded-3 img-custom-style" alt="" data-aos="zoom-in"/>
                                </div>
                                <div className="col-lg-6 pt-5 pt-lg-0">
                                    <h3 data-aos="fade-up">{this.props.translation("coach_layout_second_section_heading")}</h3>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("coach_layout_second_section_text")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100"><a className="btn-get-started scrollto cursor-pointer" onClick={this.onCoachesOnlineVideoCoursesClick}>{this.props.translation("more_text")}</a></p>

                                </div>
                            </div>

                        </div>
                    </section>
                    <section id="about" className="about section-bg">
                        <div className="container">

                            <div className="row justify-content-between align-items-center">

                                <div className="col-lg-6 pt-5 pt-lg-0">
                                    <h3 data-aos="fade-up">{this.props.translation("coach_layout_third_section_heading")}</h3>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("coach_layout_second_section_text")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100"><a className="btn-get-started scrollto cursor-pointer" onClick={this.onCoachesDownloadsClick}>{this.props.translation("more_text")}</a></p>

                                </div>
                                <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                                    <img src="/images/pic13.jpg" className="img-fluid rounded-3 img-custom-style" alt="" data-aos="zoom-in"/>
                                </div>
                            </div>

                        </div>
                    </section>
                    <section id="about" className="about bg-light-blue">
                        <div className="container">

                            <div className="row justify-content-between align-items-center">
                                <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                                    <img src="/images/pic14.jpg" className="img-fluid rounded-3 img-custom-style" alt="" data-aos="zoom-in"/>
                                </div>
                                <div className="col-lg-6 pt-5 pt-lg-0">
                                    <h3 data-aos="fade-up">{this.props.translation("coach_layout_fourth_section_heading")}</h3>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("coach_layout_fourth_section_text")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100"><a className="btn-get-started scrollto cursor-pointer" onClick={this.onCoachesRegionalTrainingsClick}>{this.props.translation("more_text")}</a></p>

                                </div>
                            </div>

                        </div>
                    </section>
                    <section id="about" className="about section-bg">
                        <div className="container">

                            <div className="row justify-content-between align-items-center">

                                <div className="col-lg-6 pt-5 pt-lg-0">
                                    <h3 data-aos="fade-up">{this.props.translation("coach_layout_fifth_section_heading")}</h3>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("coach_layout_fifth_section_text")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100"><a className="btn-get-started scrollto cursor-pointer" onClick={this.onCoachesLiveOnlineMeetingsClick}>{this.props.translation("more_text")}</a></p>

                                </div>
                                <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                                    <img src="/images/pic15.jpg" className="img-fluid rounded-3 img-custom-style" alt="" data-aos="zoom-in"/>
                                </div>
                            </div>

                        </div>
                    </section>
                    <section id="about" className="about bg-light-blue">
                        <div className="container">

                            <div className="row justify-content-between align-items-center">
                                <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                                    <img src="/images/pic16.jpg" className="img-fluid rounded-3 img-custom-style" alt="" data-aos="zoom-in"/>
                                </div>
                                <div className="col-lg-6 pt-5 pt-lg-0">
                                    <h3 data-aos="fade-up">{this.props.translation("coach_layout_sixth_section_heading")}</h3>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("coach_layout_sixth_section_text")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100"><a className="btn-get-started scrollto cursor-pointer" onClick={this.onCoachesFirstAidCoursesClick}>{this.props.translation("more_text")}</a></p>

                                </div>
                            </div>

                        </div>
                    </section>
                    <section id="about" className="about section-bg">
                        <div className="container">

                            <div className="row justify-content-between align-items-center">

                                <div className="col-lg-6 pt-5 pt-lg-0">
                                    <h3 data-aos="fade-up">{this.props.translation("coach_layout_seventh_section_heading")}</h3>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("coach_layout_seventh_section_text")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100"><a className="btn-get-started scrollto cursor-pointer" onClick={this.onCoachesAppForCoachesClick}>{this.props.translation("more_text")}</a></p>

                                </div>
                                <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                                    <img src="/images/pic17.jpg" className="img-fluid rounded-3 img-custom-style" alt="" data-aos="zoom-in"/>
                                </div>
                            </div>

                        </div>
                    </section>
                    <section id="about" className="about bg-light-blue">
                        <div className="container">

                            <div className="row justify-content-between align-items-center">
                                <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                                    <img src="/images/pic18.jpg" className="img-fluid rounded-3 img-custom-style" alt="" data-aos="zoom-in"/>
                                </div>
                                <div className="col-lg-6 pt-5 pt-lg-0">
                                    <h3 data-aos="fade-up">{this.props.translation("coach_layout_eight_section_heading")}</h3>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("coach_layout_eight_section_text")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100"><a className="btn-get-started scrollto cursor-pointer" onClick={this.onCoachesSportSuppliesClick}>{this.props.translation("more_text")}</a></p>

                                </div>
                            </div>

                        </div>
                    </section>
                    {/*<section className="section-bg">*/}
                    {/*    <div className="row my-auto" align="center">*/}
                    {/*        <p>Text Text Text Text Text Text Text</p>*/}
                    {/*    </div>*/}
                    {/*</section>*/}
                    <Contact translation={this.props.translation}/>
                </main>
                <Footer translation ={this.props.translation}/>
            </div>
        );
    }
}

export default Coaches;