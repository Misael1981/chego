"use client";

import { EllipsisVertical, PencilIcon, LogOutIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";

const MenuTrigger = () => {
  const handleLogOutWithGoogleClick = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <div className="fixed right-4 top-4 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="">
            <EllipsisVertical />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <PencilIcon />
              Editar Perfil
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem variant="destructive">
              <Button
                variant="destructive"
                onClick={handleLogOutWithGoogleClick}
              >
                <LogOutIcon />
                Sair da conta
              </Button>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MenuTrigger;
