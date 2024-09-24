import { Helmet } from 'react-helmet-async';
import {EventsView} from "../sections/events/view";


// ----------------------------------------------------------------------

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title> Art | Art & Hearts </title>
      </Helmet>

        <EventsView />
    </>
  );
}
