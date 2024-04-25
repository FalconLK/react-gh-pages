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
          <h2><strong>Kisub Kim</strong></h2>
          <h4>Research Scientist at Singapore Management University (SMU)</h4>
          I am a research scientist (postdoc) at{" "}
          <a href="https://www.smu.edu.sg">
            Singapore Management University (SMU)
          </a>
          {/*. My work is mainly related to Software Engineering, broadly AI4SE and SE4AI. Specifically, I put my efforts on code generation, code search, bug localization, code review, and code representation under the supervision of{" "}*/}
          . Within the dynamic landscape of Software Engineering, I navigate the fascinating realms of AI4SE and SE4AI. My focus encompasses the intricate domains of code generation, search, bug localization, review, and representation, all guided by the invaluable mentorship of {" "}.
          <a href="http://www.mysmu.edu/faculty/davidlo/">Prof. David Lo</a>.
          Before joining SMU, I was a research associate at the{" "}
          <a href="https://wwwen.uni.lu/">University of Luxembourg (UL)</a>. I completed
          my Ph.D. at the University of Luxembourg under
          the supervision of{" "}
          <a href="https://bissyande.github.io/">
          Prof. Tegawendé F. BISSYANDE
          </a>
          {" "} and {" "}
          <a href="https://www.darkrsw.net/">
          Prof. Dongsun Kim
          </a>
          .
          {"\n"}
          My works were presented at major conferences such as <b>International Conference on Software Engineering</b> and published in top journals such as <b>Empirical Software Engineering</b>. 
          I have served as a reviewer, program committee, and organization committee in various software engineering conferences and journals, such as IEEE Transactions on Software Engineering, Empirical Software Engineering, and IEEE/ACM International Conference on Program Comprehension.
        </Col>
      </Row>
    </Container>
  );
}

export default Abstract;
