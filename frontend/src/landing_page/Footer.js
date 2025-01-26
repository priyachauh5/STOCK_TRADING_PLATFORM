import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col-3">
            {/* <img src="Images/logo.svg" style={{ width: "50%" }} alt="logo" /> */}
            <div className="d-flex align-items-center">
              <img
                src="https://logowik.com/content/uploads/images/trading-chart1502.logowik.com.webp" 
                style={{ width: "12%" , height: "12%"}} 
                alt="logo"
              />
              <h6>Stock Trading</h6>
            </div>
            <p><i class="fa fa-at" aria-hidden="true"></i>
            2010-2024, Not Stock Broking Ltd.
              <br />
              All rights reserved.
            </p>
          </div>
          <div className="col-3">
            <p>Company</p>
            <a href="" mb-5>
              About
            </a>
            <br />
            <a href="">Products</a>
            <br />
            <a href="">PricingReferral programme</a>
            <br />
            <a href="">Careers</a>
            <br />
            <a href="">Stock.tech</a>
            <br />
            <a href="">Press & media</a>
            <br />
            <a href="">Stock Platform cares(CSR)</a>
            <br />
          </div>
          <div className="col-3">
            <p>Support</p>
            <a href="">Contact</a>
            <br />
            <a href="">Support portal</a>
            <br />
            <a href="">Z-Connect blog</a>
            <br />
            <a href="">List of charges</a>
            <br />
            <a href="">Downloads & resources</a>
            <br />
          </div>
          <div className="col-3">
            <p>Account</p>
            <a href="">Open an account</a>
            <br />
            <a href="">Fund transfer</a>
            <br />
            <a href="">60 day challenge</a>
            <br />
            <br />
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
        <div className="container mb-3">
          <div className="row">
            <div className="col-3"></div>
            <div className="col" style={{frontSize:"1%"}}>
              <a href="" style={{marginRight:"2%"}}>NSE</a>
              <a href="" style={{marginRight:"2%"}}>BSE</a>
              <a href="" style={{marginRight:"2%"}}>MCX</a>
              <a href="" style={{marginRight:"2%"}}>Terms and conditions</a>
              <a href="" style={{marginRight:"2%"}}>policies and procedures</a>
              <a href="" style={{marginRight:"2%"}}>Privacy policy</a>
              <a href="" style={{marginRight:"2%"}}>Disclosure</a>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
        {/* <div>
            <a href="">NSE</a>
            <a href="">BSE</a>
            <a href="">MCX</a>
            <a href="">Terms and conditions</a>
            <a href="">policies and procedures</a>
            <a href="">Privacy policy</a>
            <a href="">Disclosure</a>
      </div> */}
      </div>
    </footer>
  );
}

export default Footer;
