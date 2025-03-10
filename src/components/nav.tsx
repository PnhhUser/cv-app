import { navList } from "../core/data/navList";
import { RouteLinkComponent } from "../shared/components/routeLinkComponent";

const NavComponent: React.FC = function () {
  const navView = navList.map((p, i) => {
    return (
      <RouteLinkComponent path={p.route} key={i}>
        {p.icon}
        <span className="text-sm font-semibold hidden lg:block">{p.name}</span>
      </RouteLinkComponent>
    );
  });

  return (
    <div className="p-2">
      <div className="flex flex-col gap-4 justify-end h-[94vh] lg:justify-normal lg:h-auto">
        {navView}
      </div>
    </div>
  );
};

export default NavComponent;
