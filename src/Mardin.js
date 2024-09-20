import "./App.css";

export const Mardin = () => {
  return (
    <div className="frame">
      <div className="div">
        <img className="IMG" alt="Img" src="./mardinpublic/Mardin.jpg" />
        <div className="koerniger-hintergrund"></div>
        <div className="overlap-group">
          <p className="herzlich-willkommen">
            <div
              className="animation"
              style={{
                fontSize: "25px",
                fontWeight: "600",
              }}
            >
              Herzlich Willkommen <br /> <br />
              zur Reservierung
              <br />
              <br />
            </div>

            <div className="containerreserved">
              <span className="span">
                <br />
                <br />
                Für die Reservierung deines Tattoo Termins erheben wir eine
                Reservierungsgebühr von 10 Euro, welches mit deinem Tattoo
                verrechnet wird.
                <br />
                <br />
                Hinweis: <br />
                Die 10 Euro können nur innerhalb von 3 Monaten verrechnet
                werden.
                <br />
                <br />
                <br />
                Du kannst beliebig per Paypal oder per Überweisung zahlen.
                <br />
                <br />
                Bitte gib immer deinen Namen und deine Telefonummer im
                Verwendungszweck an!
                <br />
              </span>
            </div>
            <span>
              <div className="overlap-2">
                <p className="berweisungen-an">
                  <span className="text-wrapper-7">
                    Bankverbindung **** Leipzig
                    <br />
                  </span>

                  <span className="text-wrapper-7">
                    DE72 **** **** **** **** **
                  </span>
                </p>
              </div>
              Um auf Paypal weitergeleitet zu werden klicke bitte hier <br />
            </span>
          </p>
        </div>
        <div className="conpaypal">
          <a
            href="https://www.paypal.me/zinomardin?locale.x=de_DE"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="paypal"
              alt="Paypal"
              src="./mardinpublic/paypal.png"
            />
          </a>
        </div>
        <div className="linie"></div>
        <div className="row__posters">
          <img
            className="row__poster"
            alt="Img"
            src="./mardinpublic/slide1klein.jpg"
          />
          <img
            className="row__poster"
            alt="Img"
            src="./mardinpublic/slide3klein.jpg"
          />
          <img
            className="row__poster"
            alt="Img"
            src="./mardinpublic/slide2klein.jpg"
          />
        </div>
        <div className="linie"></div>
        <div className="terminbuchung-per ">
          <span className="text-wrapper-2">
            Terminbuchung
            <br />
          </span>
          <span className="text-wrapper-3 ">
            per WhatsApp
            <br />
            <br />
            <br />
          </span>
        </div>
        <img
          className="digital-glyph-green"
          alt="Digital glyph green"
          src="./mardinpublic/WhatsApp.png"
        />{" "}
        <div className="element">
          <span style={{ color: "#d4d4d4", fontSize: "14px" }}>
            Geschäftsleitung
            <br />
            0176 2312 1307
          </span>
          <a
            href="https://api.whatsapp.com/send?phone=+4917623121307"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#177d3d" }}
          >
            <br />
            jetzt WhatsApp senden
          </a>
          <br />
          <br />
          <span style={{ color: "#d4d4d4", fontSize: "14px" }}>
            Tätowierer Amar
            <br /> 0173 8701 845
          </span>
          <a
            href="https://api.whatsapp.com/send?phone=+4901738701845"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#177d3d" }}
          >
            <br /> jetzt WhatsApp senden
          </a>
        </div>
        <div className="linie"></div>
        <div className="folgt-mir">Folgt uns auf Instagram</div>
        <img
          className="instagram-appicon"
          alt="Instagram appicon"
          src=" ./mardinpublic/Insta.webp"
        />
        <a
          className="insta"
          href="https://instagram.com/mardin.leipzig?igshid=MzRIODBiNWFIZA=="
          target="_blank"
          rel="noreferrer"
        >
          Café & Shisha mardin.leipzig
        </a>
        <a
          className="insta"
          href="https://instagram.com/amar_ink_mardin?igshid=MzRIODBiNWFIZA=="
          target="_blank"
          rel="noreferrer"
        >
          Tattoostudio amar_ink_mardin
        </a>
        <div className="line"></div>
        <a
          className="insta"
          style={{ position: "relative", right: "-100px", top: "-220px" }}
          href="https://instagram.com/faros_project_placement?utm_source=qr&igshid=MzNINGNkZWQ4Mg%3D%3D"
          target="_blank"
          rel="noreferrer"
        >
          Design & Programmierung F_alod
          <br />
        </a>
        <div className="flexcontainer">
          <div className="text">
            <span className="text-wrapper">
              Mardin Tattoostudio
              <br />
            </span>
          </div>
          <div className="text">
            <span className="span">
              <br />
            </span>
          </div>
          <div className="text">
            <span className="span">*****</span>
          </div>
          <div className="text">
            <span className="span">
              04315 Leipzig
              <br />
            </span>
          </div>
          <div className="text">
            <span className="span">
              <br />
            </span>
          </div>
          <div className="text">
            <span className="span" />
          </div>
        </div>
      </div>
    </div>
  );
};
