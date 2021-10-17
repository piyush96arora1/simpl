import React, { useEffect, useState } from "react";
import Resources from "../../utils/Resources";
import styles from "./bottomnav.module.scss";
import cns from "classnames";
import { useRouter } from "next/dist/client/router";

const navArray = [
  {
    name: "Home",
    src: Resources.images.home,
    id: 1,
    route: "/",
    selectedSrc: Resources.images.homeSelected,
  },
  {
    name: "Passbook",
    src: Resources.images.passbook,
    id: 2,
    route: "/passbook",
    selectedSrc: Resources.images.passbookSelected,
  },
  {
    name: "Billbox",
    src: Resources.images.billbox,
    id: 3,
    route: "/billbox",
    selectedSrc: Resources.images.billboxSelected,
  },
  {
    name: "Profile",
    src: Resources.images.profile,
    id: 4,
    route: "/profile",
    selectedSrc: Resources.images.profileSelected,
  },
  {
    name: "More",
    src: Resources.images.more,
    id: 5,
    route: "/more",
    selectedSrc: Resources.images.moreSelected,
  },
];

const BottomNav = ({}) => {
  const router = useRouter();
  const [path, setPath] = useState(router.pathname);
  useEffect(() => {
    setPath(router.pathname);
  }, [router.pathname]);
  return (
    <div className={cns("row", styles.navContainer)}>
      {navArray.map((item) => {
        const selected = path === item.route;
        return (
          <div
            onClick={() => router.push(item.route)}
            key={item.id}
            className={cns("column center pointer")}
          >
            <img src={selected ? item.selectedSrc : item.src} alt="nav" />
            <span className={cns("font1", { "color-primary": selected })}>
              {item.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default BottomNav;
