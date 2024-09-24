import React from "react";
import Jumbotron from "./jumbotron/jumbotron";
import Typography from "@mui/material/Typography";

export default function JumbotronContainer() {

  return (
    <Jumbotron.Container>
      <Jumbotron>
        <Jumbotron.Pane>
          <Jumbotron.Image
            img
            src="assets/images/covers/cover_1.jpg"
            alt="The ministry of Stories"
          ></Jumbotron.Image>
        </Jumbotron.Pane>
        <Jumbotron.Pane>
          <Jumbotron.Title>    <Typography variant="h1" sx={{ fontWeight: 'bold', color: '#333' }}>
            Join us in
          </Typography>

          </Jumbotron.Title>
          <Jumbotron.SubTitle>
            Plea and gratitude work hand in hand. Whether you are a charity or a
            company, find sponsors and initiatives that match your values.
          </Jumbotron.SubTitle>

          <Jumbotron.ButtonLink alt="For sponsors">
            {" "}
            For Sponsors
          </Jumbotron.ButtonLink>
          <Jumbotron.ButtonLink
            alt="For charities"
          >
            {" "}
            For Charities
          </Jumbotron.ButtonLink>
        </Jumbotron.Pane>
      </Jumbotron>
      <Jumbotron.Section>
        <Jumbotron.Text>
          At Prett
          asking is not a taboo. We start from the principle that if you dont
          ask, you dont get. Let generosity be a constant. You are a charity:
          connect with the most ethical organisations globally. You are a
          sponsor: wear your
          on your sleeve.
        </Jumbotron.Text>
        <Jumbotron.ButtonLink alt="Fund Request">
          {" "}
          Fund Request
        </Jumbotron.ButtonLink>
      </Jumbotron.Section>
    </Jumbotron.Container>
  );
}
