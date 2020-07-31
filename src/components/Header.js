import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <ul id="slide-out" className="side-nav hidden custom-scrollbar sn-bg-2 ps ps--theme_default" data-ps-id="c27390a3-9efc-e0d8-197a-ab96d73a156a">
                    <li>
                        <div className="logo-wrapper waves-light waves-effect waves-light">
                            <div>
                                <img src="http://mdbootstrap.com/img/logo/mdb-transparent.png" alt="" className="img-fluid flex-center" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <ul className="social">
                            <li>
                                <div className="icons-sm fb-ic">
                                    <i className="fa fa-facebook"> </i>
                                </div>
                            </li>
                            <li>
                                <div className="icons-sm pin-ic">
                                    <i className="fa fa-pinterest"> </i>
                                </div>
                            </li>
                            <li>
                                <div className="icons-sm gplus-ic">
                                    <i className="fa fa-google-plus"> </i>
                                </div>
                            </li>
                            <li>
                                <div className="icons-sm tw-ic">
                                    <i className="fa fa-twitter"> </i>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <form className="search-form" role="search">
                            <div className="form-group waves-light waves-effect waves-light">
                                <input type="text" className="form-control" placeholder="Search" />
                            </div>
                        </form>
                    </li>
                    <li>

                        <ul className="collapsible collapsible-accordion">
                            <li>
                                <div className="collapsible-header waves-effect arrow-r">
                                    <i className="fa fa-shopping-bag"></i> Product Page
                                        <i className="fa fa-angle-down rotate-icon"></i>
                                </div>
                                <div className="collapsible-body">
                                    <ul>
                                        <li>
                                            <div href="product.html" className="waves-effect">Product Page V.1</div>
                                        </li>
                                        <li>
                                            <div href="product-page.html" className="waves-effect">Product Page V.2</div>
                                        </li>
                                        <li>
                                            <div href="product-page-4.html" className="waves-effect">Product Page V.3</div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="active">
                                <div className="collapsible-header waves-effect arrow-r active">
                                    <i className="fa fa-shopping-cart"></i> Cart Pages
                                        <i className="fa fa-angle-down rotate-icon"></i>
                                </div>
                                <div className="collapsible-body">
                                    <ul>
                                        <li>
                                            <div href="cart.html" className="waves-effect">Page with shopping cart</div>
                                        </li>
                                        <li>
                                            <div href="contact.html" className="waves-effect">Page with contact form</div>
                                        </li>
                                        <li>
                                            <div href="contact-2.html" className="waves-effect">Page with contact form V.2</div>
                                        </li>
                                        <li>
                                            <div href="login.html" className="waves-effect">Page with sign in form</div>
                                        </li>
                                        <li>
                                            <div href="terms.html" className="waves-effect">Page with 'terms of use'</div>
                                        </li>
                                        <li>
                                            <div href="faq.html" className="waves-effect">Page with 'FAQ'</div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header waves-effect arrow-r">
                                    <i className="fa fa-dashboard"></i> Homepages
                                        <i className="fa fa-angle-down rotate-icon"></i>
                                </div>
                                <div className="collapsible-body">
                                    <ul>
                                        <li>
                                            <div href="home-page.html" className="waves-effect">Ecommerce homepage default</div>
                                        </li>
                                        <li>
                                            <div href="home-page-2.html" className="waves-effect">Ecommerce homepage full width</div>
                                        </li>
                                        <li>
                                            <div href="home-page-3-carousel.html" className="waves-effect">Ecommerce homepage V.3 Carousel</div>
                                        </li>
                                        <li>
                                            <div href="home-page-3-full-page-carousel.html" className="waves-effect">Ecommerce homepage V.3 Full Page Carousel</div>
                                        </li>
                                        <li>
                                            <div href="home-page-3-half-page-carousel.html" className="waves-effect">Ecommerce homepage V.3 Half Page Carousel</div>
                                        </li>
                                        <li>
                                            <div href="home-page-4.html" className="waves-effect">Ecommerce homepage V.4</div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header waves-effect arrow-r">
                                    <i className="fa fa-desktop"></i> Post Pages
                                        <i className="fa fa-angle-down rotate-icon"></i>
                                </div>
                                <div className="collapsible-body">
                                    <ul>
                                        <li>
                                            <div href="post.html" className="waves-effect">Page with column on the right</div>
                                        </li>
                                        <li>
                                            <div href="blog-post-left-column.html" className="waves-effect">Page with newsletter on the left</div>
                                        </li>
                                        <li>
                                            <div href="blog-post.html" className="waves-effect">Page with newsletter on the right</div>
                                        </li>
                                        <li>
                                            <div href="blog-post-full-width.html" className="waves-effect">Full width page with logged user</div>
                                        </li>
                                        <li>
                                            <div href="blog-post-full-width%20not%20logged%20in%20user.html" className="waves-effect">Full width page with not logged user</div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header waves-effect arrow-r">
                                    <i className="fa fa-diamond"></i> Category Pages
                                        <i className="fa fa-angle-down rotate-icon"></i>
                                </div>
                                <div className="collapsible-body">
                                    <ul>
                                        <li>
                                            <div href="category-list-left-column.html" className="waves-effect">Category list with left column</div>
                                        </li>
                                        <li>
                                            <div href="category-list-right-column.html" className="waves-effect">Category list with right column</div>
                                        </li>
                                        <li>
                                            <div href="category-grid-left-column.html" className="waves-effect">Category grid with left column</div>
                                        </li>
                                        <li>
                                            <div href="category-right-column.html" className="waves-effect">Category grid with right column</div>
                                        </li>
                                        <li>
                                            <div href="category-grid-left-column-carousel.html" className="waves-effect">Category grid with left column carousel</div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>

                    </li>

                    <div className="sidenav-bg mask-strong"></div>

                    <div className="ps__scrollbar-x-rail">
                        <div className="ps__scrollbar-x" tabIndex="0"></div>
                    </div>
                    <div className="ps__scrollbar-y-rail">
                        <div className="ps__scrollbar-y" tabIndex="0"></div>
                    </div>
                </ul>

                <nav className="navbar fixed-top navbar-toggleable-md navbar-expand-lg navbar-dark scrolling-navbar double-nav">

                    <div className="float-left">
                        <div data-activates="slide-out" className="button-collapse">
                            <i className="fa fa-bars"></i>
                        </div>
                    </div>

                    <div className="breadcrumb-dn mr-auto">
                        <ol className="breadcrumb header-breadcrumb">
                            <li className="breadcrumb-item">
                                <div>Trang Chủ</div>
                            </li>
                        </ol>
                    </div>

                    <ul className="nav navbar-nav nav-flex-icons ml-auto">
                        <li className="nav-item dropdown">
                            <div className="nav-link dropdown-toggle waves-effect waves-light" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <i className="fa fa-user"></i> Tài Khoản</div>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                                <div className="dropdown-item waves-effect waves-light">Đăng Ký</div>
                                <div className="dropdown-item waves-effect waves-light">Đăng Nhập</div>
                                <div className="dropdown-item waves-effect waves-light">Đăng Xuất</div>
                            </div>
                        </li>
                    </ul>

                </nav>

            </header>
        );
    }
}

export default Header;
