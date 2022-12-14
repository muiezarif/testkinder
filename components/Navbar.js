import React, {Component} from 'react';
import Router from "next/router";

class Navbar extends Component {
    state = {
        mobileNav:false,
        sfkDrop:false,
        coachDrop:false,
        parentDrop:false,
        clubDrop:false,
        fjDrop:false
    }
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
    onENClick = () => {
        Router.push("/", "/", {locale: "en"})
    }
    onDEClick = () => {
        Router.push("/", "/", {locale: "de"})
    }
    render() {
        // const handleClickDropdown = (e) => {
        //     e.currentTarget.classList.toggle("dropdown-active")
        //     // e.target.closest("ul").classList.toggle("dropdown-active")
        // }
        return (
            <div>
                <header id="header" className="fixed-top d-flex align-items-center">
                    <div className="container d-flex align-items-center justify-content-between">

                        <div className="logo">
                            <h1 className="text-light"><div onClick={this.onHomeClick} className="cursor-pointer"><img src="/kids-fit-logo.png" alt=""/></div></h1>
                            {/*Uncomment below if you prefer to use an image log*/}
                            {/*<a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                        </div>

                        <nav id="navbar" className={this.state.mobileNav ? "navbar navbar-mobile" : "navbar"}>
                            <ul>
                                {/*<li><a className="nav-link scrollto cursor-pointer" onClick={this.onHomeClick}>{this.props.translation("menu_home")}</a></li>*/}
                                <li className="dropdown"><a className="cursor-pointer" ><span onClick={this.onSportsForKidsClick}>{this.props.translation("menu_sports_for_kids")}</span> <i className="bi bi-chevron-down" onClick={() => this.setState({sfkDrop:!this.state.sfkDrop})}/></a>
                                    <ul className={this.state.sfkDrop ? "dropdown-active" : ""}>
                                        <li><a className="cursor-pointer" onClick={this.onSportsForKidsSportsSchoolClick}>{this.props.translation("menu_sport_school")}</a></li>
                                        <li><a className="cursor-pointer" onClick={this.onSportsForKidsSportsCoursesClick}>{this.props.translation("menu_sport_courses")}</a></li>
                                        <li><a className="cursor-pointer" onClick={this.onSportsForKidsHolidayCampsClick}>{this.props.translation("menu_holiday_camps")}</a></li>
                                        <li><a className="cursor-pointer" onClick={this.onSportsForKidsEventsForKidsClick}>{this.props.translation("menu_events_for_kids")}</a></li>
                                        <li><a className="cursor-pointer" onClick={this.onSportsForKidsShopForKidsClick}>{this.props.translation("menu_shop_for_kids")}</a></li>
                                        <li><a className="cursor-pointer" onClick={this.onSportsForKidsAppForHomeTrainingClick}>{this.props.translation("menu_app_for_hometraining")}</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="cursor-pointer" ><span onClick={this.onCoachesClick}>{this.props.translation("menu_coaches")}</span> <i className="bi bi-chevron-down" onClick={() => this.setState({coachDrop:!this.state.coachDrop})}/></a>
                                    <ul className={this.state.coachDrop ? "dropdown-active" : ""}>
                                        <li><a className="cursor-pointer" onClick={this.onCoachesOnlineVideoCoursesClick}>{this.props.translation("menu_online_video_courses")}</a></li>
                                        <li><a className="cursor-pointer" onClick={this.onCoachesDownloadsClick}>{this.props.translation("menu_downloads")}</a></li>
                                        <li><a className="cursor-pointer" onClick={this.onCoachesRegionalTrainingsClick}>{this.props.translation("menu_regional_trainings")}</a></li>
                                        <li><a className="cursor-pointer" onClick={this.onCoachesLiveOnlineMeetingsClick}>{this.props.translation("menu_live_online_meetings")}</a></li>
                                        <li><a className="cursor-pointer" onClick={this.onCoachesFirstAidCoursesClick}>{this.props.translation("menu_first_aid_courses")}</a></li>
                                        <li><a className="cursor-pointer" onClick={this.onCoachesAppForCoachesClick}>{this.props.translation("menu_app_for_coaches")}</a></li>
                                        <li><a className="cursor-pointer" onClick={this.onCoachesSportSuppliesClick}>{this.props.translation("menu_sports_supplies")}</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="cursor-pointer" ><span onClick={this.onParentClick}>{this.props.translation("menu_parents")}</span> <i className="bi bi-chevron-down" onClick={() => this.setState({parentDrop:!this.state.parentDrop})}/></a>
                                    <ul className={this.state.parentDrop ? "dropdown-active" : ""}>
                                        <li><a className="cursor-pointer" onClick={this.onParentNatureAppClick}>{this.props.translation("menu_nature_app")}</a></li>
                                        <li><a className="cursor-pointer" onClick={this.onParentCounselorsClick}>{this.props.translation("menu_counselors")}</a></li>
                                        <li><a className="cursor-pointer" onClick={this.onParentOnlineVideoCoursesClick}>{this.props.translation("menu_online_video_courses")}</a></li>
                                        {/*<li><a className="cursor-pointer" onClick={this.onParentYoutubeClick}>{this.props.translation("menu_youtube")}</a></li>*/}
                                        <li><a className="cursor-pointer" onClick={this.onParentInfoBlogsClick}>{this.props.translation("menu_info_blogs")}</a></li>
                                        <li><a className="cursor-pointer" onClick={this.onParentNewsClick}>{this.props.translation("menu_news")}</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="cursor-pointer" ><span onClick={this.onKidsSportsClubsClick}>{this.props.translation("menu_kids_sports_clubs")}</span> <i className="bi bi-chevron-down" onClick={() => this.setState({clubDrop:!this.state.clubDrop})}/></a>
                                    <ul className={this.state.clubDrop ? "dropdown-active" : ""}>
                                        <li><a className="cursor-pointer" onClick={this.onKidsSportsClubsClubMemberServiceClick}>{this.props.translation("menu_club_member_service")}</a></li>
                                        <li><a className="cursor-pointer" onClick={this.onKidsSportsClubsWebSolutionsClick}>{this.props.translation("menu_web_solutions")}</a></li>
                                        <li><a className="cursor-pointer" onClick={this.onKidsSportsClubsTeamPackagesClick}>{this.props.translation("menu_team_packages")}</a></li>
                                        <li><a className="cursor-pointer" onClick={this.onKidsSportsClubsFirstAidCoursesClick}>{this.props.translation("menu_first_aid_courses")}</a></li>
                                        <li><a className="cursor-pointer" onClick={this.onKidsSportsClubsAppForCoachesClick}>{this.props.translation("menu_app_for_coaches")}</a></li>
                                        <li><a className="cursor-pointer" onClick={this.onKidsSportsClubsRegionalTrainingsClick}>{this.props.translation("menu_regional_trainings")}</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="cursor-pointer" ><span onClick={this.onFranchiseClick}>{this.props.translation("menu_franchise_jobs")}</span> <i className="bi bi-chevron-down" onClick={() => this.setState({fjDrop:!this.state.fjDrop})}/></a>
                                    <ul className={this.state.fjDrop ? "dropdown-active" : ""}>
                                        <li><a className="cursor-pointer" onClick={this.onFranchiseBecomeCoachClick}>{this.props.translation("menu_become_coach")}</a></li>
                                        {/*<li><a className="cursor-pointer" onClick={this.onFranchiseRegionalBusinessLeaderClick}>{this.props.translation("menu_regional_business_leader")}</a></li>*/}
                                        <li><a className="cursor-pointer" onClick={this.onFranchiseBecomeFranchiseClick}>{this.props.translation("menu_become_franchise")}</a></li>
                                    </ul>
                                </li>
                                <li><a className="nav-link scrollto cursor-pointer" onClick={this.onContactClick}><span>{this.props.translation("menu_contact")}</span></a></li>
                                <li><a className=" scrollto cursor-pointer" ><span onClick={this.onENClick}>en </span><span className="m-2"> | </span><span onClick={this.onDEClick}> de</span></a></li>
                                {/*<li><a className="text-white"></a></li>*/}
                                {/*<li><a className="nav-link scrollto cursor-pointer" >de</a></li>*/}
                                {/*<li><a className="getstarted scrollto" href="#about">Get Started</a></li>*/}
                            </ul>
                            {this.state.mobileNav ? <i className="bi mobile-nav-toggle bi-x text-white" onClick={() => this.setState({mobileNav:!this.state.mobileNav})}/> : <i className="bi mobile-nav-toggle bi-list text-white" onClick={() => this.setState({mobileNav:!this.state.mobileNav})}/>}

                        </nav>
                    </div>
                </header>
            </div>
        );
    }
}

export default Navbar;