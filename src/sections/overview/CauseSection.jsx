"use client";
import img from "/assets/images/causes/group-african-kids-paying-attention-class.jpg";
import img2 from "/assets/images/causes/madrasa.jpg";
import img3 from "/assets/images/causes/african-woman-pouring-water-recipient-outdoors.jpg";
import img4 from "/assets/images/causes/madrasa.jpg"; // Example image path for food security
import img5 from "/assets/images/causes/madrasa.jpg"; // Example image path for educational programs
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React from "react";
import {
  Container,
  Typography,
  Box,
  Button,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import Iconify from "../../components/iconify";

function CauseSection() {
  return (
      <section className="section-padding" id="cause-section">
          <Typography variant="h2" align="left" gutterBottom>
            Featured Causes
          </Typography>
          <Swiper
              breakpoints={{
                320: { slidesPerView: 1 },
                576: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
              }}
              loop={true}
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper swiper-cause"
          >
            {[
              {
                img: img2,
                title: "Housing for the Elderly and Vulnerable",
                description: "Building, renovating, and upgrading existing homes for elderly individuals living in poverty.",
                raised: "Ksh.27,600",
                goal: "Ksh.60,000",
                progress: 50,
              },
              {
                img: img3,
                title: "Borehole Drilling and Water Supply",
                description: "Setting up boreholes and water purification systems in schools and community centers.",
                raised: "Ksh.84,600",
                goal: "Ksh.100,000",
                progress: 100,
              },
              {
                img: img4,
                title: "Food Security Initiatives",
                description: "Organizing food drives during Ramadan and other special occasions.",
                raised: "Ksh.27,600",
                goal: "Ksh.60,000",
                progress: 50,
              },
              {
                img: img5,
                title: "Educational Programs",
                description: "Sponsoring scholarships for underprivileged students to attend school.",
                raised: "Ksh.27,600",
                goal: "Ksh.60,000",
                progress: 50,
              },
              {
                img: img2,
                title: "Healthcare Services",
                description: "Setting up mobile clinics across Muslim communities.",
                raised: "Ksh.27,600",
                goal: "Ksh.60,000",
                progress: 50,
              },
            ].map((cause, index) => (
                <SwiperSlide key={index}>
                  <Box
                      sx={{
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: 2,
                        position: 'relative',
                      }}
                  >
                    <img
                        src={cause.img}
                        alt={cause.title}
                        style={{
                          width: '100%',
                          height: '200px',
                          objectFit: 'cover',
                        }}
                    />
                    <Box sx={{ padding: 2 }}>
                      <Typography variant="h5" >
                        {cause.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" mb={2}>
                        {cause.description}
                      </Typography>

                        <div className="cause-card__top">
                            <div className="cause-card__progress">
                    <span style={{ width: `85%` }} className=" cardProgress">
                      <b>
                        <i>85</i>%
                      </b>
                    </span>
                            </div>
                            <div className="cause-card__goals">
                                <p>
                                    <strong>Raised:</strong> {cause.raised}
                                </p>
                                <p>
                                    <strong>Goal:</strong> {cause.goal}
                                </p>
                            </div>
                        </div>

                        <Stack
                            justifyContent="flex-end"
                            direction="row"
                            alignItems="right"
                            spacing={2}
                            sx={{ mt: 2 ,  }}
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
                  </Box>

                  </Box>



                </SwiperSlide>
            ))}
          </Swiper>
      </section>
  );
}

export default CauseSection;
