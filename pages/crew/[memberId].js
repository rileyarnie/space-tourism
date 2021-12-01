import CrewMemberPage from "../../components/crew/crew-member-page";
import { crew, getCrewMember } from "../../data";

const CrewMember = (props) => {
  return (
    <CrewMemberPage crewMember={props.crewMember} wholeCrew={props.crew} />
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const crewMember = getCrewMember(Number(params.memberId));
  const wholeCrew = crew;
  return {
    props: {
      crewMember,
      crew: wholeCrew,
    },
  };
}

export async function getStaticPaths() {
  const ids = crew.map((member) => member.id);
  console.log(`ids`, ids);
  const params = ids.map((id) => ({ params: { memberId: String(id) } }));

  return {
    paths: params,
    fallback: false,
  };
}

export default CrewMember;
