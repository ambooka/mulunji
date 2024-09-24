import { Helmet } from 'react-helmet-async';

import { AppView } from 'src/sections/overview/view';

// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> Mulunji Foundation | Home </title>
      </Helmet>

      <AppView />
    </>
  );
}
