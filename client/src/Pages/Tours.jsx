import React from "react";
import CommonSection from "../Shared/CommonSection";
import "../styles/Tour.css";
import useFetch from "../hooks/useFetch";
import TourCard from "./../Shared/TourCard";
import SearchBar from "../Shared/SearchBar";
import Newsletter from "../Shared/Newsletter";
import { Container, Row, Col, Spinner, Alert } from "reactstrap";

const Tours = () => {
  const { data: tours, loading, error } = useFetch("api/tours");
  console.log("Tours data:", tours);
  return (
    <>
      <CommonSection title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {loading && (
              <Col lg="12" className="text-center">
                <Spinner color="primary" />
              </Col>
            )}

            {error && (
              <Col lg="12" className="text-center">
                <Alert color="danger">Failed to load tours. Try again later.</Alert>
              </Col>
            )}

            {!loading && !error && tours?.length === 0 && (
              <Col lg="12" className="text-center">
                <h5>No tours found</h5>
              </Col>
            )}

            {!loading &&
              !error &&
              tours?.map((tour) => (
                <Col lg="3" md="6" sm="6" className="mb-4" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))}
          </Row>
        </Container>
      </section>

      <Newsletter />
    </>
  );
};

export default Tours;
