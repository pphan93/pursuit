import Link from "next/link";
import { useRouter } from "next/router";

const NavLink: React.FC<{ path: string; name: string }> = ({
  children,
  path,
  name,
}) => {
  const router = useRouter();

  let styleName;
  if (router.pathname == path) {
    styleName = "text-red-500";
  } else {
    styleName = "text-gray-900";
  }
  return (
    <Link href={path}>
      <a
        title="home"
        className={`text-base font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group ${styleName}`}
      >
        <span
          className={`w-6 h-6 ${styleName} group-hover:text-gray-900 transition duration-75`}
        >
          {children}
        </span>

        <span className="ml-3">{name}</span>
      </a>
    </Link>
  );
};

export default NavLink;
