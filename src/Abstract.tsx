import Container from "react-bootstrap/Container";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Abstract() {
  return (
    <Container style={{ marginTop: "2rem" }}>
      <Row>
        <Col md="auto">
          <Figure>
            <Figure.Image width={200} alt="Kisub Kim" src="./profile.jpeg" />
          </Figure>
        </Col>
        <Col>
          <h2>Kisub Kim</h2>
          <h4>Research Scientist, Singapore Management University</h4>
          Dr. Kisub Kim is a research scientist (postdoc) at{" "}
          <a href="https://www.smu.edu.sg">
            Singapore Management University (SMU)
          </a>
          . He is mainly working on the software engineering applying artificial intelligence under the supervision of{" "}
          <a href="http://www.mysmu.edu/faculty/davidlo/">Prof. David Lo</a>.
          Before joining SMU, he was a research associate at the{" "}
          <a href="https://wwwen.uni.lu/">University of Luxembourg</a>. He completed
          his PhD at the{" "}
          <a href="https://wwwen.uni.lu/">University of Luxembourg</a> under
          the supervision of{" "}
          <a href="https://bissyande.github.io/">
            Prof. Dr. Tegawendé F. BISSYANDE
          </a>
          ,{" "}
          <a href="https://www.darkrsw.net/">
            Prof. Dr. Dongsun Kim
          </a>
          , and{" "}
          <a href="https://wwwfr.uni.lu/snt/people/yves_le_traon">
            Prof. Dr. Yves Le Traon
          </a>
          , and{" "}
          <a href="https://jacquesklein2302.github.io/">
            Prof. Dr. Jacques Klein
          </a>
          . He has worked for{" "}
          <a href="https://www.khmc.or.kr/">
            Kyung Hee University Hospital
          </a>{" "}
          as a developer. He received his MPhil. at the{" "}
          <a href="http://www.chungbuk.ac.kr">
            Chungbuk National University
          </a>{" "}
          under the supervision of{" "}
          <a href="https://scholar.google.com.hk/citations?user=U7Tc7gEAAAAJ&hl=en">Prof. Dr. Woosung Jung</a>. He
          received B.Eng. in{" "}
          <a href="http://ce.jejunu.ac.kr">Computer Engineering Department</a>{" "}
          at <a href="http://jejunu.ac.kr">Chungbuk National University</a> under
          the supervision of{" "}
          <a href="http://cybertec.jejunu.ac.kr/profile.html">
            Prof. Dr. Younghun Seo
          </a>
          . His main research interests are Code Search, Applying Artifical Intelligence for
          software engineering.
        </Col>
      </Row>
    </Container>
  );
}

export default Abstract;
