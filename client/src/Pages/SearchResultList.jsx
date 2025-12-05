import React, { useEffect, useState } from "react";
import CommonSection from "../Shared/CommonSection";
import { Container, Row, Col, Button } from "reactstrap";
import TourCard from "../Shared/TourCard";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/config";
import "../Shared/searchbar.css";
import Newsletter from "../Shared/Newsletter";

const SearchResultList = () => {
  const location = useLocation();
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(true);

  // Parse query params from URL
  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      const params = location.search; // e.g. "?city=Dhaka&distance=100"
      try {
        const response = await axios.get(`${BASE_URL}/api/tours/search${params}`);
        setSearchResult(response.data);
      } catch (error) {
        setSearchResult([]);
      }
      setLoading(false);
    };
    fetchResults();
  }, [location.search]);

  return (
    <div>
      <CommonSection title={"Search Results"} />
      <section>
        <Container>
          <Row>
            {loading ? (
              <Col lg="12"><p>Loading...</p></Col>
            ) : searchResult.length === 0 ? (
              <Col lg="12">
                <div className="no-results">
                  <p>No search results found.</p>
                  <Button className="btn primary__btn w-25 align-items-center">
                    <Link to="/tours">Go to Tours</Link>
                  </Button>
                </div>
              </Col>
            ) : (
              searchResult.map((tour) => (
                <Col lg="3" md="6" sm="6" className="mb-4" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
      <Newsletter/>
    </div>
  );
};

export default SearchResultList;