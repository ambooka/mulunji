import { Helmet } from 'react-helmet-async';

import { ProjectsView } from 'src/sections/projects/view';

// ----------------------------------------------------------------------

export default function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title> Mulunji Foundation | Projects</title>
      </Helmet>

      <ProjectsView />
    </>
  );
}
