import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const QnaPage = () => {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleAskQuestion = async () => {
    const apiKey = "4A54TQ-UJH9LPK768"; // Use the provided DEMO key for this example
    const input = query;
    const apiUrl = `https://api.wolframalpha.com/v1/result?i=${input}&appid=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.text();

      setAnswer(data || "No answer found");
    } catch (error) {
      console.error("Error fetching data:", error);
      setAnswer("Error fetching answer");
    }
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }}>
          <Form>
            <Form.Group controlId="formQuery">
              <Form.Label>Ask a question:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your question"
                value={query}
                onChange={handleQueryChange}
              />
            </Form.Group>
            <Button
              className="mt-3"
              variant="primary"
              onClick={handleAskQuestion}
            >
              Ask
            </Button>
          </Form>

          <div className="mt-3">
            <strong>Answer:</strong> {answer}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default QnaPage;
