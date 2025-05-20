import React from "react";

function Header() {
  return (
    <header className="crev-header2">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 mb-50">
            <div className="text d-flex f-bold">
              <span>TRIO</span>
              <div className="img">
                <img src="/assets/imgs/logo-light.png" alt="" />
              </div>
              <span>TOUCH</span>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="text f-ultra-light">
              <span>Barbershop</span>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="img-long">
              <div className="iner-img">
                <img src="/assets/imgs/c2.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <p>
              Wir sind stolz darauf, in Bern unser erstes Geschäft eröffnet zu
              haben und freuen uns darauf, unsere Kunden auf eine neue Ebene der
              Pflege und des Stylings zu führen. Besuchen Sie uns und erleben
              Sie den Unterschied!
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
