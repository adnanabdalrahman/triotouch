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
        end: "middle center",
      },
    });
  }, []);

  return (
    <section>
      <div id="about" className="container">
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
      </div>
    </section>
  );
}

export default Intro;
