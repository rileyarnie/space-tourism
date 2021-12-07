import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const TechnologyNav = ({ technologies }) => {
  const router = useRouter();
  const { technologyId } = router.query;

  return (
    <div className="mt-8 flex justify-center space-x-4">
      {technologies.map((technology) => (
        <Link key={technology.id} href={`/technology/${technology.id}`}>
          <div
            className={`${
              parseInt(technologyId) === technology.id
                ? " bg-white text-number-color"
                : "text-white "
            }h-10 w-10 grid place-items-center font-bellefair rounded-full border border-gray-500`}
          >
            {technology.id}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TechnologyNav;
