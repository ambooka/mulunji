import { Helmet } from 'react-helmet-async';

import { AboutView } from 'src/sections/about';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title> Mulunji foudation | About </title>
      </Helmet>

      <AboutView />
    </>
  );
}
