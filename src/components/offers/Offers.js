import React, { useState, useEffect } from 'react';
import {getOffersData} from '../offers/OffersData';
import '../css/Offers.css';
import { Link } from 'react-router-dom';

function Offers() {
    let [costomerOffer, setOffer] = useState([]);
    let [selectedRowState, cbSelectedRow] = useState({});
    useEffect(() => {
        setOffer(getOffersData());
    }, []);
    let onBookTicketClick = (event) => {
        cbSelectedRow(costomerOffer[event.target.id]);
    }
    let ticketStatus = () => {
        let status = document.getElementById("statusDiv");
        status.style.display="block";
    }

    return (
        <>
            <div className="container">
                <h1 className="text-center m-5 hedding" >Letest Offers</h1>
                <div className="offer-data p-5">
                    <h1 className="text-center mb-5">Things to know Before You Bye</h1>
                    <div className="row">
                        <div className="col-6 p-4">
                            <h3>Visit a Few and Save</h3>
                            <p>The longer you play, the more you save per day. With three awesome parks, a multi-day ticket will let you see more.</p>
                        </div>
                        <div className="col-6 p-4">
                            <h3>Get Park-to-Park Access</h3>
                            <p>Access the HogwartsTM Express to ride between both lands of The Wizarding World of Harry PotterTM.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 p-4">
                            <h3>Experience Universal’s Hotels</h3>
                            <p>Walk or take complimentary transportation to the parks, as well as other great benefits, when you stay at our hotels.</p>
                        </div>
                        <div className="col-6 p-4">
                            <h3>Upgrade to Express Pass</h3>
                            <p>Skip the regular lines in Universal Studios and Islands of Adventure.  Valid theme park admission is required.</p>
                        </div>
                    </div>
                </div>
                <div className="offer-div m-3 p-3 row mb-5 border border-dark">
                    {costomerOffer.map((item, index) =>
                        <div className="card col-5 card-h m-2 ml-5 text-center ">
                            <div className="card-body">
                                <h5 className="card-title">{item["name"]}</h5>
                                <p className="card-text">{item["info"]}</p>
                                <a href="#" className="btn btn-primary m-2">{item["price"]}</a>
                                <a href="#bookTicket" className="btn btn-success m-2" id={index} onClick={onBookTicketClick}>Book Ticket</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div id="bookTicket" className="mb-5">
                <center>
                    <h1 className="m-3 hedding">Book Tickets at Great Offers</h1>
                    <div className="container mt-5 mb-1 border border-primary p-3 w-50">
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputEmail4">Full Name</label>
                                    <input type="text" className="form-control" id="inputEmail4" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputPassword4">Pan card</label>
                                    <input type="text" className="form-control" id="inputPassword4" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputPassword4">Selected Offer</label>
                                    <input type="text" value={selectedRowState["name"]} disabled className="form-control" id="inputPassword4" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputEmail4">price</label>
                                    <input type="number" value={selectedRowState["price"]} disabled className="form-control" id="inputEmail4" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputAddress">Address</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St " />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputCity">City</label>
                                    <input type="text" className="form-control" id="inputCity " />
                                </div>
                                <div className="form-group col-md-4">
                                    <label for="inputState">State</label>
                                    <select id="inputState" className="form-control">
                                        <option selected>Choose...</option>
                                        <option>Maharashtra</option>
                                        <option>Karnataka</option>
                                        <option>Bihar</option>
                                        <option>Tamilnadu</option>
                                        <option>Madhya Pradhesh</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-2">
                                    <label for="inputZip">Zip</label>
                                    <input type="text" className="form-control" id="inputZip " />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-success m-5 col-6" onClick={ticketStatus}>Book Ticket</button>
                        </form>
                    </div>
                    <div class="alert alert-success mb-5 w-50" style={{display:'none'}} id="statusDiv" role="alert">
                        Ticket Booked Successfully!!
                    </div>
                </center>
            </div>

        </>
    )
}

export default Offers;
