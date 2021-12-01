import CrewNav from "./crew-nav";

const CrewMemberDescription = ({ crewMember, wholeCrew }) => {
  return (
    <div>
      <div className="mt-8 mb-8 w-80 mx-auto grid  place-items-center border-b border-divider-color">
        <img src={crewMember.image} height="222" width="177.12" />
      </div>
      <div className="flex flex-col px-6">
        <CrewNav wholeCrew={wholeCrew} />
        <div className="text-white text-center">
          <p className="mb-2 uppercase font-bellefair text-gray-400">
            {crewMember.role}
          </p>
          <p className="mb-4 font-bellefair uppercase text-2xl">
            {crewMember.name}
          </p>
          <p className="text-text-color font-barlow text-above-base">
            {crewMember.profile}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CrewMemberDescription;
