import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Detail.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
  Button,
} from "reactstrap";

function Detail() {
  const dispatch = useDispatch();
  const detail = useSelector((store) => store.detail)[0];
  useEffect(() => {
    console.log(detail);
  }, []);

  return (
    <main>
      <h1>Detail</h1>
      <section>
        <Card
          style={{
            width: "90%",
            marginLeft: "5%",
            marginRight: "5%",
            marginBottom: "10%",
          }}
        >
          <CardBody>
            <CardTitle tag="h1">{detail.title}</CardTitle>
            <CardSubtitle tag="h4">{detail.name.join(" | ")}</CardSubtitle>
          </CardBody>
          <img style={{alignSelf:"center"}} src={detail.poster} width="20%" />
          <CardBody>
            <CardText>{detail.description}</CardText>
            <CardLink href="/"><Button color="dark">Back to List</Button></CardLink>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}

export default Detail;
