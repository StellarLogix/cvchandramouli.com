import WhatsAppIcon from "./WhatsAppIcon";

const Hero = () => {
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.open(href, "_blank");
    }
  };

  // Check if we're on mobile
  const isMobile = window.innerWidth <= 768;

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/images/hero.jpeg"})`,
        backgroundSize: "cover",
        backgroundPosition: isMobile ? "70% 70%" : "center 0%",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      />
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="hero-content">
          <div className="hero-text">
            <h1
              className="hero-headline"
              style={{
                color: "white",
                textShadow:
                  "2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              Transform Your Brand with Creative Excellence
            </h1>
            <p
              className="hero-subtext"
              style={{
                color: "rgba(255, 255, 255, 0.9)",
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",
              }}
            >
              Professional advertising solutions that captivate audiences and
              drive results. From traditional print campaigns to cutting-edge
              digital marketing strategies, we bring your vision to life with
              decades of industry expertise.
            </p>

            <div className="hero-buttons">
              <a
                href="#contact"
                className="btn btn-primary"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
              >
                Get Quote
              </a>
              <a
                href="https://wa.me/919940711173"
                className="btn btn-outline whatsapp-btn"
                onClick={(e) =>
                  handleSmoothScroll(e, "https://wa.me/919940711173")
                }
              >
                <WhatsAppIcon size={20} className="whatsapp-icon" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
