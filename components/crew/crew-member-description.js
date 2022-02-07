import CrewNav from "./crew-nav";

const CrewMemberDescription = ({ crewMember, wholeCrew }) => {
  return (
    <div className=" md:flex md:flex-col-reverse md:max-w-lg md:mx-auto md:text-base md:leading-7 ">
      <div className="mt-8 mb-8 w-80 mx-auto grid  place-items-center border-b border-divider-color md:relative md:  md:h-96">
        <img
          src={crewMember.image}
          //  height="222" width="177.12"
          //  height="222" width="177.12"
          class="w-full h-full  md:absolute inset-0 object-contain md:scale-150 md:mt-20 "
        />
      </div>
      <div className="flex flex-col px-6  md:flex-col-reverse">
        <CrewNav wholeCrew={wholeCrew} />
        <div className="text-white text-center">
          <p className="mb-2 uppercase font-bellefair text-gray-400">
            {crewMember.role}
          </p>
          <p className="mb-4 font-bellefair uppercase text-2xl">
            {crewMember.name}
          </p>
          <p className="text-text-color font-barlow text-above-base ">
            {crewMember.profile}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CrewMemberDescription;
