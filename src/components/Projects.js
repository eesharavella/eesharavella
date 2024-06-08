import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";


export const Projects = () => {

  const dataScienceProjects = [
    {
      title: "Data Science Project 1",
      description: "Machine Learning",
      imgUrl: projImg1,
    },
    {
      title: "Data Science Project 2",
      description: "Deep Learning",
      imgUrl: projImg2,
    },
    {
      title: "Data Science Project 3",
      description: "Data Mining",
      imgUrl: projImg3,
    },
  ];

  const dataAnalysisProjects = [
    {
      title: "Data Analysis Project 1",
      description: "Business Analysis",
      imgUrl: projImg3,
    },
    {
      title: "Data Analysis Project 2",
      description: "Data Visualization",
      imgUrl: projImg2,
    },
    {
      title: "Data Analysis Project 3",
      description: "Statistical Analysis",
      imgUrl: projImg1,
    },
  ];

  const fullStackProjects = [
    {
      title: "Full-Stack Project 1",
      description: "Web Development",
      imgUrl: projImg1,
    },
    {
      title: "Full-Stack Project 2",
      description: "App Development",
      imgUrl: projImg2,
    },
    {
      title: "Full-Stack Project 3",
      description: "API Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Data Science</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Data Analysis</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Full-Stack</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          dataScienceProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          dataAnalysisProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          fullStackProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>

          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}