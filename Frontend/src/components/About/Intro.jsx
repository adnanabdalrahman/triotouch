"use client";
import React, { useEffect } from "react";

function Intro() {
  useEffect(() => {
    gsap.to(".text-reval .text", {
      backgroundPositionX: "0%",
      stagger: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".text-reval",
        markers: false,
        scrub: 1,
        start: "top center",
        end: "bottom center",
      },
    });
  }, []);

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <div className="text">
              <span className="sub-title mb-15 opacity-8">
                - Wer wir sind – Trio Touch
              </span>
              <div className="text-reval">
                <h2 className="fz-40 text-u mb-30">
                  <span className="text">Willkommen bei Trio Touch</span>
                  <span className="text">
                    – Ihrem neuen Lieblingsbarbershop
                  </span>
                  <span className="text"> in Bern!.</span>
                </h2>
                <p>
                  Trio Touch ist mehr als nur ein Friseursalon – es ist eine
                  Philosophie, die „die dritte Berührung der Schönheit“
                  verkörpert. Der Name „Trio Touch“ symbolisiert die perfekte
                  Kombination aus drei professionellen Kräften, die
                  zusammenkommen, um Ihren Pflegebedarf auf das nächste Level zu
                  heben. Unser Ansatz vereint Perfektion, Leidenschaft und
                  Hingabe, um eine einzigartige Erfahrung zu bieten, die Ihr
                  Aussehen und Ihr Wohlbefinden gleichermaßen verbessert
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="row mt-80">
              <div className="col-md-4 sm-mb30">
                <ul className="list rest">
                  <li className="fz-18 mb-15">
                    <span className="mr-10">+</span> Branding Strategy
                  </li>
                  <li className="fz-18 mb-15">
                    <span className="mr-10">+</span> Digital Experiences
                  </li>
                  <li className="fz-18 mb-15">
                    <span className="mr-10">+</span> Social Media
                  </li>
                  <li className="fz-18 mb-15">
                    <span className="mr-10">+</span> Advertising
                  </li>
                </ul>
              </div>
              <div className="col-md-4 sm-mb30">
                <ul className="list rest">
                  <li className="fz-18 mb-15">
                    <span className="mr-10">+</span> Branding Strategy
                  </li>
                  <li className="fz-18 mb-15">
                    <span className="mr-10">+</span> Digital Experiences
                  </li>
                  <li className="fz-18 mb-15">
                    <span className="mr-10">+</span> Social Media
                  </li>
                  <li className="fz-18 mb-15">
                    <span className="mr-10">+</span> Advertising
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="list rest">
                  <li className="fz-18 mb-15">
                    <span className="mr-10">+</span> Branding Strategy
                  </li>
                  <li className="fz-18 mb-15">
                    <span className="mr-10">+</span> Digital Experiences
                  </li>
                  <li className="fz-18 mb-15">
                    <span className="mr-10">+</span> Social Media
                  </li>
                  <li className="fz-18 mb-15">
                    <span className="mr-10">+</span> Advertising
                  </li>
                </ul>
              </div>
            </div>
            <div className="row numbers mt-80">
              <div className="col-lg-4">
                <div className="item md-mb50">
                  <h3 className="stroke f-bold num pb-30 mb-30 bord-thin-bottom">
                    48
                  </h3>
                  <h6 className="fz-16">Projects Completed</h6>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="item md-mb50">
                  <h3 className="stroke f-bold num pb-30 mb-30 bord-thin-bottom">
                    64k
                  </h3>
                  <h6 className="fz-16">Clients Around the World</h6>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="item">
                  <h3 className="stroke f-bold num pb-30 mb-30 bord-thin-bottom">
                    30
                  </h3>
                  <h6 className="fz-16">Total Awards</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
