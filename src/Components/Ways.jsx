import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

function Ways() {
  return (
    <>
      <h1 className="text-center mt-4 fw-bold">Ways to ?</h1>
      <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        className="mb-3 mt-4"
        fill
      >
        <Tab eventKey="home" title="Reduce">
          <Container className="mt-2">
            <Row>
              <Col sm={8}>
                <Table striped variant="info">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Ways</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td className="p-3">
                        Use a reusable bottle/cup for beverages on-the-go
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td className="p-3">
                        Use reusable grocery bags, and not just for groceries
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td className="p-3">Purchase wisely and recycle</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td className="p-3">
                        Avoid single-use food and drink containers and utensils
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td className="p-3">
                        Buy secondhand items and donate used goods
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td className="p-3">
                        Buy loose fruit and vegetables and avoid items that are
                        heavily packaged
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col sm={4}>
                <img
                  src="https://images.pexels.com/photos/7512967/pexels-photo-7512967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Reduce"
                  className="img-fluid mt-2"
                />
              </Col>
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="profile" title="Reuse">
          <Container className="mt-2">
            <Row>
              <Col sm={8}>
                <Table striped>
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Ways</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td className="p-3">
                        Donate items that are still in a good, usable condition
                        to charities or charity shops
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td className="p-3">
                        Repurpose glass, plastic and cardboard containers to
                        give them another life
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td className="p-3">Carry a re-usable shopping bag</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td className="p-3">
                        Re-use wrapping paper or gift bags
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td className="p-3">
                        Convert old clothing, towels or sheets into cleaning
                        rags/cloths
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col sm={4}>
                <img
                  src="https://images.pexels.com/photos/7262754/pexels-photo-7262754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Reuse"
                  className="img-fluid mt-2"
                />
              </Col>
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="longer-tab" title="Recycle">
          <Container className="mt-2">
            <Row>
              <Col sm={8}>
                <Table striped variant="info ">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Ways</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td className="p-3">Recycle plastic bags separately</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td className="p-3">
                        Check the symbol printed on plastics to see if they’re
                        recyclable
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td className="p-3">
                        Glass can be recycled over and over again, so don’t
                        trash it!
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td className="p-3">
                        So long as it’s clean, you can recycle basically any
                        metal
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td className="p-3">
                        Most batteries are recyclable, but they typically must
                        be separated
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col sm={4}>
                <img
                  src="https://images.pexels.com/photos/3951625/pexels-photo-3951625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Recycle"
                  className="img-fluid mt-2"
                />
              </Col>
            </Row>
          </Container>
        </Tab>
      </Tabs>
    </>
  );
}

export default Ways;
