import React, { useEffect, useContext, useState } from "react";
import { Button, Collapse, Container, Card, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import { Context } from "../store/pololitoContext";
import { BiReceipt, BiSearchAlt, BiTime, BiTrophy } from "react-icons/bi";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { GrMoney, GrAnnounce } from "react-icons/gr";
import "react-multi-carousel/lib/styles.css";
import WCard from "../components/WorkerCard";

function LandingPage() {
  const [openAviso, setOpenAviso] = useState(false);
  const [openPololito, setOpenPololito] = useState(false);
  const today = new Date();
  const { store, actions } = useContext(Context);
  const responsive = {
    desktoplg: {
      breakpoint: { max: 3000, min: 1400 },
      items: 2,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 1400, min: 950 },
      items: 2,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 950, min: 720 },
      items: 2,
      partialVisibilityGutter: 80,
    },
    mobile: {
      breakpoint: { max: 720, min: 0 },
      items: 1,
      partialVisibilityGutter: 70,
    },
  };

  useEffect(() => {
    actions.readWorkersProfiles();
  }, []);

  return (
    <>
      <section className="services-wrapper" id="servicios">
        <Container>
          <Row>
            <div className="section-header">
              <h2 className="section-title">Lo que puedes encontrar</h2>
              <p className="section-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
                Ipsa aperiam, dolorum harum nobis consequuntur inventore ad vero
                natus.
              </p>
            </div>
          </Row>
          <Row>
            <Col>
              <Card className="services-card">
                <Card.Body className="services-card-body">
                  <BiReceipt className="services-icons"></BiReceipt>
                  <Card.Title className="services-card-title">
                    Titulo 1
                  </Card.Title>
                  <Card.Text className="services-card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae optio quo aliquam quidem iusto consequuntur nisi?
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="services-card">
                <Card.Body className="services-card-body">
                  <BiSearchAlt className="services-icons"></BiSearchAlt>
                  <Card.Title className="services-card-title">
                    Titulo 2
                  </Card.Title>
                  <Card.Text className="services-card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae optio quo aliquam quidem iusto consequuntur nisi?
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="services-card">
                <Card.Body className="services-card-body">
                  <BiTime className="services-icons"></BiTime>
                  <Card.Title className="services-card-title">
                    Titulo 3
                  </Card.Title>
                  <Card.Text className="services-card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae optio quo aliquam quidem iusto consequuntur nisi?
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="services-card">
                <Card.Body className="services-card-body">
                  <BiTrophy className="services-icons"></BiTrophy>
                  <Card.Title className="services-card-title">
                    Titulo 4
                  </Card.Title>
                  <Card.Text className="services-card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae optio quo aliquam quidem iusto consequuntur nisi?
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="workers-wrapper" id="trabajadores">
        <Container>
          <div className="section-header">
            <h2 className="section-title">Personas ya trabajando</h2>
            <p className="section-description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
              Ipsa aperiam, dolorum harum nobis consequuntur inventore ad vero
              natus.
            </p>
          </div>
          <div className="workers-content">
            <Carousel
              className="py-4"
              swipeable
              draggable
              showDots={false}
              partialVisible
              responsive={responsive}
              infinite
              autoPlaySpeed={5000}
              keyBoardControl
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              sliderClass=""
              slidesToSlide={1}
              additionalTransfrom={0}
              arrows
              focusOnSelect={false}
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
            >
              {store.workersProfiles.map((workersProfiles) => (
                <WCard
                  key={workersProfiles.Worker_id}
                  title={workersProfiles.Title}
                  name={workersProfiles.name}
                  lastname={workersProfiles.last}
                  contact={workersProfiles.mail}
                />
              ))}
            </Carousel>
          </div>
        </Container>
      </section>
      <footer className="footer-wrapper">
        <Container>
          <Row>
            <Col>
              <h3>¿Necesitas ayuda o tienes una pregunta?</h3>
              <p>Contactanos en redes sociales</p>
              <div className="rrss-box">
                <a href="https://facebook.com" target="_blank" className="rrss">
                  <FaFacebook className="rrss-icon"/>
                </a>
                <a href="https://twitter.com" target="_blank" className="rrss">
                  <FaTwitter className="rrss-icon" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="rrss"
                >
                  <FaInstagram className="rrss-icon" />
                </a>
              </div>
            </Col>
            <Col>
              <h4>Links</h4>
              <ul className="link-list">
                <li className="link-item">Aplicación</li>
                <li className="link-item">Avisos</li>
                <li className="link-item">Pololitos</li>
                <li className="link-item">Contacto</li>
              </ul>
            </Col>
            <Col>
              <h4>Contacto</h4>
            </Col>
          </Row>
          <Row>
            <span className="divider"></span>
          </Row>
          <Row>
            <span className="copy text-center">
              {today.getFullYear()} copyright
            </span>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default LandingPage;
