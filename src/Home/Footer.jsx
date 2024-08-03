import React from 'react'

function Footer() {
    return (
        <div>
            {/* Start Footer Section */}
            <footer className="footer-section">
                <div className="container relative">
                    <div className="sofa-img">
                        <img src="bigLogo.png" alt="Image" className="img-fluid" />
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="subscription-form">
                                <h3 className="d-flex align-items-center"><span className="me-1"><img src="envelope-outline.svg" alt="Image" className="img-fluid" /></span><span>Subscribe to Newsletter</span></h3>
                                <form action="#" className="row g-3">
                                    <div className="col-auto">
                                        <input type="text" className="form-control" placeholder="Enter your name" />
                                    </div>
                                    <div className="col-auto">
                                        <input type="email" className="form-control" placeholder="Enter your email" />
                                    </div>
                                    <div className="col-auto">
                                        <button className="btn btn-primary">
                                            <span className="fa fa-paper-plane" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mb-5">
                        <div className="col-lg-4">
                            <div className="mb-4 footer-logo-wrap"><a href="#" className="footer-logo">TechnoFarm<span>.</span></a></div>
                            <p className="mb-4">TECHNOFARM was founded in 2018 by two FARMERS. It is technology based company aimed to deliver most reliable and technologically advanced products.
                                We mainly deal in agricultural electronic products . We are situated in Village Rahakra, Muzaffarnagar UP. Being farmer, we can understand the problems of a farmer and we design our products accordingly. You can visit our manufaturing facility anytime in Rahakra.

                            </p>
                            <ul className="list-unstyled custom-social">
                                <li><a href="#"><span className="fa fa-brands fa-facebook-f" /></a></li>
                                <li><a href="#"><span className="fa fa-brands fa-twitter" /></a></li>
                                <li><a href="#"><span className="fa fa-brands fa-instagram" /></a></li>
                                <li><a href="#"><span className="fa fa-brands fa-linkedin" /></a></li>
                            </ul>
                        </div>
                        <div className="col-lg-8">
                            <div className="row links-wrap">
                                <div className="col-1 col-sm-1 col-md-4">
                                    <p className='text-xl font-bold underline'>Useful links</p>
                                    <ul className="list-unstyled mt-8">
                                        <li><a href="https://g.page/r/CQBbt-L0jjTZEBM/review">Give feedback</a></li>
                                        <li><a href="https://www.google.com/maps/place/TECHNOFARM+OPERATORS/@29.4747883,77.8534911,15z/data=!4m2!3m1!1s0x0:0xd9348ef4e2b75b00?sa=X&ved=2ahUKEwilqfjT7bL8AhW5S2wGHRkaB4QQ_BJ6BAgvECE">Show on MAP</a></li>
                                        <li><a href="https://wa.me/8126967580">WhatsApp</a></li>
                                        <li><a href="https://www.google.com/search?q=TECHNOFARM+OPERATORS&client=firefox-b-d&ei=zQm4Y5C1Lp6TseMPmre10Ag&ved=0ahUKEwjQz9-c77L8AhWeSWwGHZpbDYoQ4dUDCA8&oq=TECHNOFARM+OPERATORS&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQDDIFCCEQoAEyBQghEKABMgUIIRCgATIFCCEQoAE6CggAEEcQ1gQQsAM6DQguEMcBEK8BELADEENKBAhBGABKBAhGGABQ-AFY-AFgwg5oAXABeACAAdIBiAHSAZIBAzItMZgBAKABAqABAcgBCcABAQ&sclient=gws-wiz-serp#ip=1">Google</a></li>
                                        <li><a href="https://www.facebook.com/technofarmoperator">FaceBook</a></li>
                                    </ul>
                                </div>

                                <div className="col-6 col-sm-6 col-md-5">
                                <p className='text-xl font-bold underline'>Team</p>
                                    <ul className="list-unstyled mt-8">
                                       
                                        <li><a href="#">Jobs</a></li>
                                        <li><a href="#">Our team</a></li>
                                        <li><a href="#">Leadership</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3">
                                    <p className='text-xl font-bold underline'>Products</p>
                                    <ul className="list-unstyled mt-8">
                                        <li><a href="#">Single Phase Preventor</a></li>
                                        <li><a href="#">Tubewell Operator</a></li>
                                        <li><a href="#">Digital Volt meter</a></li>
                                        <li><a href="#">Digital Ampere meter</a></li>
                                        <li><a href="#">Submersible Panel</a></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-top copyright">
                        <div className="row pt-4">
                            <div className="col-lg-6">
                                <p className="mb-2 text-center text-lg-start">Copyright ©. All Rights Reserved. — Designed by <a href="https://untree.co">CFC</a> {/* License information: https://untree.co/license/ */}
                                </p>
                            </div>
                            <div className="col-lg-6 text-center text-lg-end">
                                <ul className="list-unstyled d-inline-flex ms-auto">
                                    <li className="me-4"><a href="#">Terms &amp; Conditions</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* End Footer Section */}

        </div>
    )
}

export default Footer
