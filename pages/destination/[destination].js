import DestinationPage from "../../components/destination/destination-page";
import { destinations, getDestination } from "../../data";

const destination = (props) => {
  return (
    <DestinationPage
      destination={props.destination}
      destinations={props.allDestinations}
    />
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const destination = getDestination(params.destination);
  const allDestinations = destinations.map((destination) =>
    destination.name.toLowerCase()
  );

  return {
    props: {
      destination,
      allDestinations,
    },
  };
}

export async function getStaticPaths() {
  const names = destinations.map((destination) => destination.name);
  const params = names.map((name) => ({
    params: { destination: name.toLowerCase() },
  }));

  return {
    paths: params,
    fallback: false,
  };
}

export default destination;
