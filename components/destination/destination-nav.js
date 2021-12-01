import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const DestinationNav = ({ names }) => {
  const router = useRouter();

  const { destination } = router.query;

  return (
    <div className="mt-8 text-white grid place-items-center">
      <ul className="flex space-x-4 ">
        {names.map((name) => (
          <Link key={name} href={`/destination/${name}`}>
            <a
              className={`${
                destination === name ? "border-b-4 pb-2" : ""
              } cursor-pointer font-barlow-condensed font-normal`}
            >
              {name?.toUpperCase()}
            </a>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default DestinationNav;
