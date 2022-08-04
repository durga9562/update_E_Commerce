import React from 'react'
import {Link} from "react-router-dom"

import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import { Navigate } from "react-router-dom";

function Home() {
    // const [goToSignIn, setGoToSignIn] = React.useState(false);

    // if (goToSignIn) {
    //     return <Navigate to="/signin" />
    // }

  return (
    <div className="app">

            <nav className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
                <div className="container text-light">
                    <div className="w-100 d-flex justify-content-between">
                        <div>
                            <i className="fa fa-envelope mx-2"></i>
                            <a className="navbar-sm-brand text-light text-decoration-none" href="#">info@company.com</a>
                            <i className="fa fa-phone mx-2"></i>
                            <a className="navbar-sm-brand text-light text-decoration-none" href="#">010-000-0000</a>
                        </div>
                        <div>
                            <a className="text-light" href="#" target="_blank" rel="sponsored"><i className="fab fa-facebook-f fa-sm fa-fw me-2"></i></a>
                            <a className="text-light" href="#" target="_blank"><i className="fab fa-instagram fa-sm fa-fw me-2"></i></a>
                            <a className="text-light" href="#" target="_blank"><i className="fab fa-twitter fa-sm fa-fw me-2"></i></a>
                            <a className="text-light" href="#" target="_blank"><i className="fab fa-linkedin fa-sm fa-fw"></i></a>
                        </div>
                    </div>
                </div>
            </nav>

            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container d-flex justify-content-between align-items-center">

                    <a className="navbar-brand text-success logo h1 align-self-center" href="#" >
                        Shopping
                    </a>

                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">

                        <div className="flex-fill ">

                            <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                                <li className="nav-item">
                                    <a className="nav-link " href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Shop</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>

                        <div className="navbar align-self-center d-flex">
                            <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                                <div className="input-group">
                                    <input type="text" className="form-control" id="inputMobileSearch" placeholder="Search ..." />
                                    <div className="input-group-text">
                                        <i className="fa fa-fw fa-search"></i>
                                    </div>
                                </div>
                            </div>
                            <a className="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                                <i className="fa fa-fw fa-search text-dark mr-2"></i>
                            </a>
                            <a className="nav-icon position-relative text-decoration-none" href="#">
                                <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                                <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">5</span>
                            </a>
                            <a className="nav-icon position-relative text-decoration-none" href="#">
                                <i className="fa fa-fw fa-user text-dark mr-3"></i>
                                <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">18</span>
                            </a>
                            {/* <PersonAddIcon>
                   <example/>
                        </PersonAddIcon> */}
                            {/* <div>
                    <button onClick={navigatePage}>SignIn</button>
                    <Routes>
                 <Route path="/sign" element={<example/>}/>
                    </Routes>
                  </div> */}

                            {/* <button onClick={loginHandler }>SignIn</button> */}
                            {/* <button onClick={() => {
                                setGoToSignIn(true);
                            }}>{" "}
                                <PersonAddIcon />
                            </button> */}

                             {/* <Router>
                                <Routes>
                                    <Route exact path="/signin" element={<Example />} />
                                </Routes>
                            </Router> */}
                            <button >
                                <Link to="/signin"> <PersonAddIcon/></Link>
                            </button> 

                        </div>
                    </div>

                </div>
            </nav>

            <div className="modal fade bg-white" id="templatemo_search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="w-100 pt-1 mb-5 text-right">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form action="" method="get" className="modal-content modal-body border-0 p-0">
                        <div className="input-group mb-2">
                            <input type="text" className="form-control" id="inputModalSearch" name="q" placeholder="Search ..." />
                            <button type="submit" className="input-group-text bg-success text-light">
                                <i className="fa fa-fw fa-search text-white"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>




            <div id="template-mo-jassa-hero-carousel" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="1"></li>
                    <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img className="img-fluid" src="https://therichpost.com/wp-content/uploads/2021/05/banner_img_01.jpg" alt="" />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left align-self-center">
                                        <img src='https://img.freepik.com/free-vector/flat-design-shopping-center-twitch-background_23-2149337408.jpg?w=996&t=st=1659419768~exp=1659420368~hmac=be901e3b24e171d3ce88062eea67dd25e5ae2e3ed051d00a67b9075d6c0b9d20' alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img className="img-fluid" src="https://therichpost.com/wp-content/uploads/2021/05/banner_img_02.jpg" alt="" />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left">
                                        <img src="https://img.freepik.com/free-psd/horizontal-banner-template-big-sale-with-woman-shopping-bags_23-2148786755.jpg?w=1060&t=st=1659419728~exp=1659420328~hmac=33708577e130157f888bd7e10dd6d9cb0f364fcddc9d48ea619a08281fb6dba4" alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img className="img-fluid" src="https://therichpost.com/wp-content/uploads/2021/05/banner_img_03.jpg" alt="" />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left">
                                        <img src='https://img.freepik.com/free-psd/horizontal-banner-online-fashion-sale_23-2148585404.jpg?w=1060&t=st=1659419868~exp=1659420468~hmac=2aad8980568f5fdb5f4773c1ccdfef0f9f8f2fc0d88694e9e153d7c54e372eb0' alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-jassa-hero-carousel" role="button" data-bs-slide="prev">
                    <i className="fas fa-chevron-left"></i>
                </a>
                <a className="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-jassa-hero-carousel" role="button" data-bs-slide="next">
                    <i className="fas fa-chevron-right"></i>
                </a>
            </div>

            <section className="container py-5">
                <div className="row text-center pt-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">Categories of The Month</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4 p-5 mt-3">
                        <a href="#"><img src="https://therichpost.com/wp-content/uploads/2021/05/category_img_01.jpg" className="rounded-circle img-fluid border" /></a>
                        <h5 className="text-center mt-3 mb-3">Watches</h5>
                        <p className="text-center"><a className="btn btn-success">Go Shop</a></p>
                    </div>
                    <div className="col-12 col-md-4 p-5 mt-3">
                        <a href="#"><img src="https://therichpost.com/wp-content/uploads/2021/05/category_img_02.jpg" className="rounded-circle img-fluid border" /></a>
                        <h2 className="h5 text-center mt-3 mb-3">Shoes</h2>
                        <p className="text-center"><a className="btn btn-success">Go Shop</a></p>
                    </div>
                    <div className="col-12 col-md-4 p-5 mt-3">
                        <a href="#"><img src="https://therichpost.com/wp-content/uploads/2021/05/category_img_03.jpg" className="rounded-circle img-fluid border" /></a>
                        <h2 className="h5 text-center mt-3 mb-3">Accessories</h2>
                        <p className="text-center"><a className="btn btn-success">Go Shop</a></p>
                    </div>
                </div>
            </section>

            <section className="bg-light">
                <div className="container py-5">
                    <div className="row text-center py-3">
                        <div className="col-lg-6 m-auto">
                            <h1 className="h1">Featured Product</h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card h-100">
                                <a href="#">
                                    <img src="https://therichpost.com/wp-content/uploads/2021/05/feature_prod_01.jpg" className="card-img-top" alt="..." />
                                </a>
                                <div className="card-body">
                                    <ul className="list-unstyled d-flex justify-content-between">
                                        <li>
                                            <i className="text-warning fa fa-star"></i>
                                            <i className="text-warning fa fa-star"></i>
                                            <i className="text-warning fa fa-star"></i>
                                            <i className="text-muted fa fa-star"></i>
                                            <i className="text-muted fa fa-star"></i>
                                        </li>
                                        <li className="text-muted text-right">$240.00</li>
                                    </ul>
                                    <a href="#" className="h2 text-decoration-none text-dark">Torch Light</a>
                                    <p className="card-text">
                                        Torch, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                                    </p>
                                    <p className="text-muted">Reviews (24)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card h-100">
                                <a href="#">
                                    <img src="https://therichpost.com/wp-content/uploads/2021/05/feature_prod_02.jpg" className="card-img-top" alt="..." />
                                </a>
                                <div className="card-body">
                                    <ul className="list-unstyled d-flex justify-content-between">
                                        <li>
                                            <i className="text-warning fa fa-star"></i>
                                            <i className="text-warning fa fa-star"></i>
                                            <i className="text-warning fa fa-star"></i>
                                            <i className="text-muted fa fa-star"></i>
                                            <i className="text-muted fa fa-star"></i>
                                        </li>
                                        <li className="text-muted text-right">$480.00</li>
                                    </ul>
                                    <a href="#" className="h2 text-decoration-none text-dark">Special New Design Smart Watch</a>
                                    <p className="card-text">
                                        This is One of the most suspecius smart watch ever
                                    </p>
                                    <p className="text-muted">Reviews (48)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card h-100">
                                <a href="#">
                                    <img src="https://therichpost.com/wp-content/uploads/2021/05/feature_prod_03.jpg" className="card-img-top" alt="..." />
                                </a>
                                <div className="card-body">
                                    <ul className="list-unstyled d-flex justify-content-between">
                                        <li>
                                            <i className="text-warning fa fa-star"></i>
                                            <i className="text-warning fa fa-star"></i>
                                            <i className="text-warning fa fa-star"></i>
                                            <i className="text-warning fa fa-star"></i>
                                            <i className="text-warning fa fa-star"></i>
                                        </li>
                                        <li className="text-muted text-right">$360.00</li>
                                    </ul>
                                    <a href="#" className="h2 text-decoration-none text-dark">Beautifull lens Camera</a>
                                    <p className="card-text">
                                        Camera lens must be uses the sony model lens there will be take your Picture Real Feeling
                                    </p>
                                    <p className="text-muted">Reviews (74)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-dark" id="tempaltemo_footer">
                <div className="container">
                    <div className="row">

                        <div className="col-md-4 pt-5">
                            <h2 className="h2 text-success border-bottom pb-3 border-light logo">Java Shop</h2>
                            <ul className="list-unstyled text-light footer-link-list">
                                <li>
                                    <i className="fas fa-map-marker-alt fa-fw"></i>
                                    India
                                </li>
                                <li>
                                    <i className="fa fa-phone fa-fw"></i>
                                    <a className="text-decoration-none" href="#">123456789</a>
                                </li>
                                <li>
                                    <i className="fa fa-envelope fa-fw"></i>
                                    <a className="text-decoration-none" href="#">ojas@company.com</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-4 pt-5">
                            <h2 className="h2 text-light border-bottom pb-3 border-light">Products</h2>
                            <ul className="list-unstyled text-light footer-link-list">
                                <li><a className="text-decoration-none" href="#">Luxury</a></li>
                                <li><a className="text-decoration-none" href="#">Sport Wear</a></li>
                                <li><a className="text-decoration-none" href="#">Men's Shoes</a></li>
                                <li><a className="text-decoration-none" href="#">Women's Shoes</a></li>
                                <li><a className="text-decoration-none" href="#">Popular Dress</a></li>
                                <li><a className="text-decoration-none" href="#">Gym Accessories</a></li>
                                <li><a className="text-decoration-none" href="#">Sport Shoes</a></li>
                            </ul>
                        </div>

                        <div className="col-md-4 pt-5">
                            <h2 className="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
                            <ul className="list-unstyled text-light footer-link-list">
                                <li><a className="text-decoration-none" href="#">Home</a></li>
                                <li><a className="text-decoration-none" href="#">About Us</a></li>
                                <li><a className="text-decoration-none" href="#">Shop Locations</a></li>
                                <li><a className="text-decoration-none" href="#">FAQs</a></li>
                                <li><a className="text-decoration-none" href="#">Contact</a></li>
                            </ul>
                        </div>

                    </div>

                    <div className="row text-light mb-4">
                        <div className="col-12 mb-3">
                            <div className="w-100 my-3 border-top border-light"></div>
                        </div>
                        <div className="col-auto me-auto">
                            <ul className="list-inline text-left footer-icons">
                                <li className="list-inline-item border border-light rounded-circle text-center">
                                    <a className="text-light text-decoration-none" target="_blank" href="#"><i className="fab fa-facebook-f fa-lg fa-fw"></i></a>
                                </li>
                                <li className="list-inline-item border border-light rounded-circle text-center">
                                    <a className="text-light text-decoration-none" target="_blank" href="#"><i className="fab fa-instagram fa-lg fa-fw"></i></a>
                                </li>
                                <li className="list-inline-item border border-light rounded-circle text-center">
                                    <a className="text-light text-decoration-none" target="_blank" href="#"><i className="fab fa-twitter fa-lg fa-fw"></i></a>
                                </li>
                                <li className="list-inline-item border border-light rounded-circle text-center">
                                    <a className="text-light text-decoration-none" target="_blank" href="#"><i className="fab fa-linkedin fa-lg fa-fw"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-auto">
                            <label className="sr-only" for="subscribeEmail">Email address</label>
                            <div className="input-group mb-2">
                                <input type="text" className="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address" />
                                <div className="input-group-text btn-success text-light">Subscribe</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-100 bg-black py-3">
                    <div className="container">
                        <div className="row pt-2">
                            <div className="col-12">
                                <p className="text-left text-light">
                                    Copyright &copy; 2022 Company Name OJAS
                                    | Designed by <a rel="sponsored" href="#" target="_blank">Java-202</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
  )
}

export default Home