import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { getDocs, collection } from 'firebase/firestore';
import Grid from '@mui/material/Unstable_Grid2';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { db } from 'src/firebase/firebase';
import NewProjectForm from "../../projects/new-project-form";
import NewsListing from "../NewsListing";
import Typography from "@mui/material/Typography";
import CauseSection from "../CauseSection";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Iconify from "../../../components/iconify";
import Stack from "@mui/material/Stack";


const styles = {
  carouselContainer: {
    height: '100%',
  },

  gradientBackground: {
    background: 'linear-gradient(to bottom right, #ADD8E6, #FFFFFF)',
    padding: '5px 5px',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  },
  impactCard: {
    padding: '20px',
    textAlign: 'center',
    background: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },


};

export default function HomePage() {
  const [modalShow, setModalShow] = useState(false);
  const [projects, setProjects] = useState([]);
  const [impactData, setImpactData] = useState({
    projectsCompleted: 0,
    communitiesEmpowered: 0,
    livesChanged: 0,
    housesBuilt: 0,
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpenModal = () => setModalShow(true);
  const handleCloseModal = () => setModalShow(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsCollection = collection(db, 'projects');
        const projectsSnapshot = await getDocs(projectsCollection);
        const projectsList = projectsSnapshot.docs.map((doc) => doc.data());
        setProjects(projectsList);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    const fetchImpactData = async () => {
      setImpactData({
        projectsCompleted: 120,
        communitiesEmpowered: 75,
        livesChanged: 5000,
        housesBuilt: 150,
      });
    };

    fetchProjects();
    fetchImpactData();
  }, []);

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const Container = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  padding: 50px 5%;
  background-color: #f7f6f5;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    padding: 20px;
  }
`;

  const Pane = styled.div`
  width: 50%;
  padding: 20px;

  @media (max-width: 1000px) {
    width: 100%;
    text-align: center;
  }
`;

  const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
`;

  const Text = styled.p`
  font-size: 1.8em;
  line-height: 1.5;
  text-align: justify;
  margin-top: 20px;

  @media (max-width: 1000px) {
    font-size: 1.2em;
  }
`;

  const ButtonLink = styled.a`
  display: inline-block;
  margin: 15px 10px;
  padding: 10px 20px;
  color: white;
  background: crimson;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darkred;
  }

  @media (max-width: 600px) {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
`;

  const Item = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;






  return (
      <section className="page-section">
        <Grid item xs={12} style={styles.gradientBackground}>

          <Item>
            <Pane>
              <Image src="assets/images/covers/cover_1.jpg" alt="Charity Work" />
            </Pane>

            {/* Content Section on the Right */}
            <Pane>
              <div className="reveal">
                <div>
                  <Typography align="left" variant="h1" sx={{ fontWeight: 'bold', color: '#333', fontSize: '3rem'}}>
                    Join us in
                  </Typography>
                  <b>
                    <div className="innerReveal" align="left">
                      Repainting Mosques
                      <br />
                      Drilling wells
                      <br />
                      Funding Da`wa
                      <br />
                      Sponsoring a child
                      <br />
                      Spreading Kheir
                    </div>
                  </b>
                </div>
                <br/>
              </div>
              <br/>


              <Typography align="center" variant="caption" sx={{ color: '#333', fontSize: '1.2rem'}}>
                <p className="fst-italic"> The example of those who spend their wealth in the way of Allah is like a seed [of grain] which grows seven spikes; in each spike is a hundred grains. And Allah multiplies [His reward] for whom He wills. And Allah is all-encompassing and knowing.
                  <br/>
                  ~ Baqara(2:261) ~

                </p >
              </Typography>
              <br/>

              <Stack
                  justifyContent="flex-end"
                  direction="row"
                  alignItems="right"
                  spacing={2}
                  sx={{ mt: 2 }}
              >
                <Button
                    variant="contained"
                    sx={{ mt: 1, bgcolor: '#e74c3c' }}
                    endIcon={<Iconify icon="la:donate" />}
                >
                  Donate Now
                </Button>

                <Button
                    variant="contained"
                    sx={{ mt: 1, bgcolor: '#e74c3c' }}
                    endIcon={<Iconify icon="ei:external-link" />}
                >
                  Learn More
                </Button>
              </Stack>

            </Pane>
          </Item>

        </Grid>


        <CauseSection />



        <NewsListing  title="Latest News" />

        <Modal show={modalShow} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewProjectForm onClose={handleCloseModal} />
          </Modal.Body>
        </Modal>
      </section>
  );
}
