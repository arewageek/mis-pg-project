import { SideNav } from "@/components/globals/SideNav";
import { accountValidator } from "@/utils/accountValidator";
import { auth } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

export default function Layout({ children }) {
  const user = auth();

  accountValidator(user);

  return (
    <div className="w-full px-3">
      <div className="justify-end flex px-5 lg:hidden">
        <div className="">
          <UserButton />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-[300pt]">
          <SideNav />
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
