import Container from "react-bootstrap/Container";
import Abstract from "./Abstract";
import Publications from "./Publications";
import WorkExperience from "./Work";
import Education from "./Education";
import TeachingExperience from "./Teaching";
import Service from "./Service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInbox,
  faFile,
  faUser,
  faIdBadge,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";
import Button from "react-bootstrap/Button";
//import "academicons/css/academicons.css";

function Contact() {
  return (
    <>
      <h3>
        <FontAwesomeIcon icon={faInbox} /> Contact
      </h3>
      <h4>Work: kisubkim{` [at] `}smu.edu.sg</h4>
      <h4>Personal: falconlk00{` [at] `}gmail.com</h4>
      <Button href="https://github.com/FalconLK" variant="outline-info">
        <FontAwesomeIcon icon={faGithub} /> Github
      </Button>{" "}
      <Button href="https://www.linkedin.com/in/kim-kisub-81199a179" variant="outline-secondary">
        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
      </Button>{" "}
    </>
  );
}

function BibliographicProfiles() {
  return (
    <>
      <h3>
        <FontAwesomeIcon icon={faIdBadge} /> Bibliographic Profiles{" "}
      </h3>
      <Button href="https://scholar.google.com/citations?user=Nr_IDzQAAAAJ&hl=en" variant="outline-success">
        <i className="ai ai-google-scholar" /> Google Scholar
      </Button>{" "}
      <Button href="https://dblp.org/pid/216/3065.html" variant="outline-success">
        <i className="ai ai-dblp" /> DBLP
      </Button>{" "}
      <Button href="https://orcid.org/0000-0002-4462-6916" variant="outline-success">
        <i className="ai ai-orcid" /> ORCID
      </Button>
    </>
  );
}

function CV() {
  return (
    <>
      <h3>
        <FontAwesomeIcon icon={faUser} /> Curriculum Vitae
      </h3>
      <Button
        href="https://drive.google.com/file/d/1cm4epi7laOQTRDJL4gd5kj8FS26NR9cy/view?usp=sharing"
        variant="outline-success"
      >
        <FontAwesomeIcon icon={faFile} /> View my CV
      </Button>
    </>
  );
}

function App() {
  return (
    <>
      <Abstract />
      <Container>
        <hr />
        <Contact />
        <hr />
        <CV />
        <hr />
        <BibliographicProfiles />
        <hr />
        <Publications />
        <hr />
        <Education />
        <hr />
        <WorkExperience />
        <hr />
        <TeachingExperience />
        <hr />
        <Service />
        <footer style={{ marginTop: "5rem", marginBottom: "3rem" }}>
          <hr />
          <p className="text-center">
            &copy; 2021 Kisub Kim. The&nbsp;
            <a href="https://github.com/handk85/react-homepage">
              source code of this homepage
            </a>
            &nbsp;is available at Github by DK. Please feel free to extend it for your
            own homepage.
          </p>
        </footer>
      </Container>
    </>
  );
}

export default App;
