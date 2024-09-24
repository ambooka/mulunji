import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { fDate } from 'src/utils/format-time';
import { fShortenNumber } from 'src/utils/format-number';

import FullScreenPopup from 'src/layouts/FullScreenPopup';

import SvgColor from 'src/components/svg-color';
import img from "../../../assets/images/causes/group-african-kids-paying-attention-class.jpg";
import img2 from "../../../assets/images/causes/poor-child-landfill-looks-forward-with-hope.jpg";
import Iconify from "../../components/iconify";

// ----------------------------------------------------------------------

export default function ProjectCard({ project, index }) {
  const { cover, content, title, raisedAmount, goalAmount, createdAt } = project;

  const latestPostLarge = index === 0;

  const latestPost = index === 1 || index === 2;

  const [openPopup, setOpenPopup] = useState(false);

  const handleTitleClick = () => {
    setOpenPopup(true);
  };

  const renderTitle = (
    <Link
      color="inherit"
      variant="subtitle2"
      underline="hover"
      sx={{
        height: 44,
        overflow: 'hidden',
        WebkitLineClamp: 1,
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        ...(latestPostLarge && { typography: 'h5', height: 60 }),
        ...((latestPostLarge || latestPost) && {
          color: 'common.white',
        }),
      }}
    >
      <Typography onClick={handleTitleClick}>{title}</Typography>
    </Link>
  );

  const renderInfo = (
      <div  >
          <div >

              <Box sx={{ padding: 2 }}>

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
                              <strong>Raised:</strong> {raisedAmount}
                          </p>
                          <p>
                              <strong>Goal:</strong> {goalAmount}
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

                          {latestPostLarge? ("Donate")  : "Donate"}
                      </Button>

                      <Button
                          variant="contained"
                          sx={{ mt: 1, bgcolor: '#e74c3c' }}
                          endIcon={<Iconify icon="ei:external-link" />}
                      >

                          {latestPostLarge? ("Learn More")  : "Info"}
                       </Button>
                  </Stack>
              </Box>


              {/*<div className="d-flex align-items-center my-2">*/}


              {/*    /!*<Typography sx={{...(latestPostLarge && { typography: 'h6', height: 60 }),*!/*/}
              {/*    /!*}}className="mb-0">*!/*/}
              {/*    /!*    <strong>Raised:</strong>*!/*/}
              {/*    /!*    {raisedAmount}*!/*/}
              {/*    /!*</Typography>*!/*/}

              {/*    /!*<Typography variant={latestPostLarge? ("h5")  : "caption"} sx={{...(latestPostLarge && { typography: 'caption', height: 60 }),}}*!/*/}
              {/*    /!*    className="ms-auto mb-0">*!/*/}
              {/*    /!*    <strong>Goal:</strong>*!/*/}
              {/*    /!*    {goalAmount}*!/*/}
              {/*    /!*</Typography>*!/*/}
              {/*</div>*/}
          </div>
      </div>

  );

  const renderCover = (
    <Box
      component="img"
      alt={title}
      src={cover}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );

  const renderDate = (
    <Typography
      variant="caption"
      component="div"
      sx={{
        mb: 2,
        color: 'text.disabled',
        ...((latestPostLarge || latestPost) && {
          opacity: 0.48,
          color: 'common.white',
        }),
      }}
    >
      {fDate(createdAt)}
    </Typography>
  );

  const renderShape = (
    <SvgColor
      color="paper"
      src="/assets/icons/shape-avatar.svg"
      sx={{
        width: 80,
        height: 36,
        zIndex: 9,
        bottom: -15,
        position: 'absolute',
        color: 'background.paper',
        ...((latestPostLarge || latestPost) && { display: 'none' }),
      }}
    />
  );

  return (
    <Grid xs={12} sm={latestPostLarge ? 12 : 6} md={latestPostLarge ? 6 : 3}>
      <Card>
        <Box
          sx={{
            position: 'relative',
            pt: 'calc(100% * 3 / 4)',
            ...((latestPostLarge || latestPost) && {
              pt: 'calc(100% * 4 / 3)',
              '&:after': {
                top: 0,
                content: "''",
                width: '100%',
                height: '100%',
                position: 'absolute',
                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
              },
            }),
            ...(latestPostLarge && {
              pt: {
                xs: 'calc(100% * 4 / 3)',
                sm: 'calc(100% * 3 / 4.66)',
              },
            }),
          }}
        >
          {renderShape}

          {renderCover}
        </Box>

        <Box
          sx={{
            p: (theme) => theme.spacing(4, 3, 3, 3),
            ...((latestPostLarge || latestPost) && {
              width: 1,
              bottom: 0,
              position: 'absolute',
            }),
          }}
        >

          {renderTitle}
            {renderDate}


            {renderInfo}
        </Box>
      </Card>
      <FullScreenPopup
        open={openPopup}
        onClose={() => setOpenPopup(false)}
        richText={content}
        title={title}
      />


    </Grid>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  index: PropTypes.number,
};
