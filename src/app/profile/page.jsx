import { authClient } from "@/lib/auth-client";
import { ArrowRightFromSquare } from "@gravity-ui/icons";
import { Avatar, Button, Dropdown } from "@heroui/react";
import { useRouter } from "next/navigation";



const ProfilePage = ({ session }) => {
   const Router = useRouter();
  const HandelSignOut = async () => {
    await authClient.signOut();
    Router.push("/");
  };

  return (
    <Dropdown>
      <Dropdown.Trigger className="rounded-full">
        <Avatar>
          <Avatar.Image alt={session?.user?.image} src={session?.user?.image} />
          <Avatar.Fallback delayMs={600}>
            {session?.user?.name[0]}
          </Avatar.Fallback>
        </Avatar>
      </Dropdown.Trigger>
      <Dropdown.Popover>
        <Dropdown.Menu>
          <Dropdown.Item id="logout" textValue="Logout" variant="danger">
            <div className="flex w-full items-center justify-between gap-2">
              <Button variant="danger" onClick={HandelSignOut}>
                Log Out
              </Button>
              <ArrowRightFromSquare className="size-3.5 text-danger" />
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
};

export default ProfilePage;
