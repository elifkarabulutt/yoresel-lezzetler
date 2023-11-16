import React from "react";
import "../styles/about.css";
import { Col, Container, Row } from "reactstrap";
import Hero from "../components/UI/Hero";
import Helmet from '../components/Helmet/Helmet'
const About = () => {
  return (
    <Helmet title='Hakkımızda'>
      <section>
      <Hero/>
      <Container>
        <Row className="about">
          <Col lg="12">
            <p>
            Hoş Geldiniz!

Merhaba ve yöresel lezzetlerle dolu bir dünyaya adım attığınız için teşekkür ederiz! Yöresel Lezzetler size Türkiye'nin dört bir yanından gelen geleneksel ve benzersiz lezzetleri keşfetme fırsatı sunan bir platformdur.
            </p>
          </Col>
          <Col lg="12">
            <p>
              <Col lg="12">
                <p>
                Yöresel Lezzetler yemek kültürümüzün zengin çeşitliliğini ve derin köklerini kutlamak için kurulmuş bir aile işletmesidir. Yıllardır devam eden bir araştırma ve lezzet yolculuğu sonucunda, en sevilen yöresel yemek tariflerini bir araya getirerek sizlere sunuyoruz. Amacımız, geleneksel mutfakları korumak ve gelecek nesillere aktarmak, aynı zamanda da farklı kültürleri bir araya getirerek birbirimize daha yakın olmamıza katkı sağlamaktır.
                </p>
              </Col>
            </p>
          </Col>
          <Col lg="12">
            <p>
            Yöresel Lezzetler her damak zevkine hitap eden birçok yöresel tarifi barındırmaktadır. Sitemizde, kahvaltılıklardan başlayarak ana yemeklere, atıştırmalıklardan tatlılara kadar birçok kategoride lezzetli tariflere ulaşabilirsiniz. Her tarif, otantik malzemelerle hazırlanmış ve geleneksel yöntemlere sadık kalınarak sunulmuştur.
            </p>
          </Col>    
        </Row>
      </Container>
    </section>
    </Helmet>
    
  );
};

export default About;
