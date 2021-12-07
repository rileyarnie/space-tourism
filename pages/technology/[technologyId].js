import TechnologyPage from "../../components/technology/technology-page";
import { getTechnology, technologies } from "../../data";

const Technology = (props) => {
  const { technology, technologies } = props;

  return <TechnologyPage technology={technology} technologies={technologies} />;
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const technology = getTechnology(Number(params.technologyId));
  return {
    props: {
      technologies,
      technology,
    },
  };
};

export async function getStaticPaths() {
  const ids = technologies.map((technology) => technology.id);

  const params = ids.map((id) => ({
    params: {
      technologyId: String(id),
    },
  }));

  return {
    paths: params,
    fallback: false,
  };
}

export default Technology;
