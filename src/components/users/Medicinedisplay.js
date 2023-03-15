import React from "react";
import './Medicinedisplay.css'

export default function Medicinedisplay(){
    return(
        <div className="container mydiv">
        <div className="row">
            <div className="col-md-4">
                <div className="bbb_deals">
                    <div className="ribbon ribbon-top-right"><span><small className="cross">x </small>4</span></div>
                    <div className="bbb_deals_title">Today's Combo Offer</div>
                    <div className="bbb_deals_slider_container">
                        <div className=" bbb_deals_item">
                            <div className="bbb_deals_image"><img src="https://i.imgur.com/9UYzfny.png" alt=""/></div>
                            <div className="bbb_deals_content">
                                <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                                    <div className="bbb_deals_item_category"><a href="#">Laptops</a></div>
                                    <div className="bbb_deals_item_price_a ml-auto"><strike>₹30,000</strike></div>
                                </div>
                                <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                                    <div className="bbb_deals_item_name">HP Notebook</div>
                                    <div className="bbb_deals_item_price ml-auto">₹25,550</div>
                                </div>
                                <div className="available">
                                    <div className="available_line d-flex flex-row justify-content-start">
                                        <div className="available_title">Available: <span>6</span></div>
                                        <div className="sold_stars ml-auto"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="bbb_deals">
                    <div className="ribbon ribbon-top-right"><span><small className="cross">x </small>2</span></div>
                    <div className="bbb_deals_title">Today's Combo Offer</div>
                    <div className="bbb_deals_slider_container">
                        <div class=" bbb_deals_item">
                            <div className="bbb_deals_image"><img src="https://i.imgur.com/9UYzfny.png" alt=""/></div>
                            <div className="bbb_deals_content">
                                <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                                    <div className="bbb_deals_item_category"><a href="#">Laptops</a></div>
                                    <div className="bbb_deals_item_price_a ml-auto"><strike>₹40,000</strike></div>
                                </div>
                                <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                                    <div className="bbb_deals_item_name">HP Envy</div>
                                    <div className="bbb_deals_item_price ml-auto">₹35,550</div>
                                </div>
                                <div className="available">
                                    <div className="available_line d-flex flex-row justify-content-start">
                                        <div className="available_title">Available: <span>6</span></div>
                                        <div className="sold_stars ml-auto"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
                                    </div>
                                    <div className="available_bar"><span style={{width:'17%'}} ></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="bbb_deals">
                    <div className="ribbon ribbon-top-right"><span><small className="cross">x </small>3</span></div>
                    <div className="bbb_deals_title">Today's Combo Offer</div>
                    <div className="bbb_deals_slider_container">
                        <div className=" bbb_deals_item">
                            <div className="bbb_deals_image"><img src="https://i.imgur.com/9UYzfny.png" alt=""/></div>
                            <div className="bbb_deals_content">
                                <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                                    <div className="bbb_deals_item_category"><a href="#">Laptops</a></div>
                                    <div className="bbb_deals_item_price_a ml-auto"><strike>₹30,000</strike></div>
                                </div>
                                <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                                    <div className="bbb_deals_item_name">Toshiba B77</div>
                                    <div className="bbb_deals_item_price ml-auto">₹27,550</div>
                                </div>
                                <div className="available">
                                    <div className="available_line d-flex flex-row justify-content-start">
                                        <div className="available_title">Available: <span>6</span></div>
                                        <div className="sold_stars ml-auto"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
                                    </div>
                                    <div className="available_bar"><span style={{width:'17%'}}></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}