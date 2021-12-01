import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const CrewNav = ({ wholeCrew }) => {
  const router = useRouter();
  const { memberId } = router.query;

  return (
    <div className="my-8">
      <div className="flex space-x-4 justify-center">
        {wholeCrew.map((crewMember) => (
          <Link key={crewMember.id} href={`/crew/${crewMember.id}`}>
            <div
              className={`${
                parseInt(memberId) === crewMember.id
                  ? "bg-white"
                  : "bg-gray-600"
              } w-3 h-3  rounded-full`}
            ></div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CrewNav;
