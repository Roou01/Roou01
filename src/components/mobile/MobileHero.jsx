import "./MobileHero.scss";

import mainCircle from "../../media/mobile-cicle.svg";

function MobileHero(props) {
  const mobileHeroClass = `mobile-hero__section ${props.className}`;

  return (
    <section className={mobileHeroClass}>
      <h1 className="mobile-hero__section-h1">Greetings!</h1>
      <div className="mobile-hero__section-maincirle">
        <img
          className="main-circle"
          src={mainCircle}
          alt="line decoration"
        ></img>
        <div className="mobile-avatar"></div>
      </div>
      <div className="mobile-glow"></div>
      <h2 className="mobile-hero__section-h2">from Anton Bondarenko</h2>
      <p className="mobile-hero__section-p">
        Web Developer
        <br />& Pro Photographer
      </p>
    </section>
  );
}
export default MobileHero;
