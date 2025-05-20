import React from "react";
//= Static Data
import data from "@/data/CreativePortfolio/services.json";

function Services() {
  return (
    <section className="feat section-padding">
      <div className="container">
        <div className="sec-head pb-20 bord-thin-bottom ">
          <div className="d-flex align-items-center">
            <div>
              <h3 className="f-bold text-u">Warum Trio Touch?</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {data.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 items">
              <div className="item">
                <span className="numb">{item.numb}</span>
                <h6>{item.title}</h6>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
