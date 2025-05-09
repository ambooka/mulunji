import { sample } from 'lodash';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { fDate } from 'src/utils/format-time';
import { fShortenNumber } from 'src/utils/format-number';

import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

export default function NewsCard({ post, index }) {
  const { cover, title, view, comment, share, createdAt } = post;
  const avatarUrl = sample([
    `/assets/images/avatars/avatar_${1}.jpg`,
    `/assets/images/avatars/avatar_${2}.jpg`,
    `/assets/images/avatars/avatar_${3}.jpg`,
    `/assets/images/avatars/avatar_${4}.jpg`,
    `/assets/images/avatars/avatar_${5}.jpg`,
    `/assets/images/avatars/avatar_${6}.jpg`,
    `/assets/images/avatars/avatar_${7}.jpg`,
    `/assets/images/avatars/avatar_${8}.jpg`,
    `/assets/images/avatars/avatar_${9}.jpg`,
    `/assets/images/avatars/avatar_${10}.jpg`,
    `/assets/images/avatars/avatar_${11}.jpg`,
    `/assets/images/avatars/avatar_${12}.jpg`,
    `/assets/images/avatars/avatar_${13}.jpg`,
    `/assets/images/avatars/avatar_${14}.jpg`,
    `/assets/images/avatars/avatar_${15}.jpg`,
    `/assets/images/avatars/avatar_${16}.jpg`,
    `/assets/images/avatars/avatar_${17}.jpg`,
    `/assets/images/avatars/avatar_${18}.jpg`,
    `/assets/images/avatars/avatar_${19}.jpg`,
    `/assets/images/avatars/avatar_${20}.jpg`,
    `/assets/images/avatars/avatar_${21}.jpg`,
    `/assets/images/avatars/avatar_${22}.jpg`,
    `/assets/images/avatars/avatar_${23}.jpg`,
    `/assets/images/avatars/avatar_${24}.jpg`,
    `/assets/images/avatars/avatar_${25}.jpg`,
  ]);

  const renderAvatar = (
    <Avatar
      src={avatarUrl}
      sx={{
        zIndex: 9,
        width: 32,
        height: 32,
        position: 'absolute',
        left: (theme) => theme.spacing(3),
        bottom: (theme) => theme.spacing(-2),
        ...{
          zIndex: 9,
          top: 24,
          left: 24,
          width: 40,
          height: 40,
        },
      }}
    />
  );

  const renderTitle = (
    <Link
      color="inherit"
      variant="subtitle2"
      underline="hover"
      sx={{
        height: 44,
        overflow: 'hidden',
        WebkitLineClamp: 2,
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        ...{ typography: 'h5', height: 60 },
        ...{
          color: 'common.white',
        },
      }}
    >
      {title}
    </Link>
  );

  const renderInfo = (
    <Stack
      direction="row"
      flexWrap="wrap"
      spacing={1.5}
      justifyContent="flex-end"
      sx={{
        mt: 3,
        color: 'text.disabled',
      }}
    >
      {[
        { number: comment, icon: 'eva:message-circle-fill' },
        { number: view, icon: 'eva:eye-fill' },
        { number: share, icon: 'eva:share-fill' },
      ].map((info, _index) => (
        <Stack
          key={_index}
          direction="row"
          sx={{
            ...{
              opacity: 0.48,
              color: 'common.white',
            },
          }}
        >
          <Iconify width={16} icon={info.icon} sx={{ mr: 0.5 }} />
          <Typography variant="caption">{fShortenNumber(info.number)}</Typography>
        </Stack>
      ))}
    </Stack>
  );

  const renderCover = (
    <Box
      component="img"
      alt={title}
      src={cover}
      sx={{
        top: 0,
        width: 1,
        height: 1, // Set a fixed height
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
        ...{
          opacity: 0.48,
          color: 'common.white',
        },
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
        ...{ display: 'none' },
      }}
    />
  );

  return (
    <div>
      <Card>
        <Box
          sx={{
            position: 'relative',
            pt: 'calc(100% * 3 / 4)',
            ...{
              pt: 'calc(100% * 4 / 3)',
              '&:after': {
                top: 0,
                content: "''",
                width: '100%',
                height: '100%',
                position: 'absolute',
                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
              },
            },
            ...{
              pt: {
                xs: 'calc(100% * 4 / 3)',
                sm: 'calc(100% * 3 / 4.66)',
              },
            },
          }}
        >
          {renderShape}

          {renderAvatar}

          {renderCover}
        </Box>

        <Box
          sx={{
            p: (theme) => theme.spacing(4, 3, 3, 3),
            ...{
              width: 1,
              bottom: 0,
              position: 'absolute',
            },
          }}
        >
          {renderDate}

          {renderTitle}

          {renderInfo}
        </Box>
      </Card>
    </div>
  );
}

NewsCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};
