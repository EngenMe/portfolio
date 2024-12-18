"use client";

import { Client } from "@/interfaces/Client.interface";
import { handleLink } from "@/utils/handleLink";
import Image from "next/image";
import { Button } from "../ui/button";

const ClientCard = ({ logo, name, url }: Client) => {
  return (
    <div className="py-4">
      <Button
        variant="ghost"
        onClick={() => handleLink(url)}
        className="flex gap-4 bg-gradient-to-r from-input to-secondary w-auto h-auto"
      >
        <Image width={32} height={32} alt={name + "logo"} src={logo} />
        <h4>{name}</h4>
      </Button>
    </div>
  );
};
export default ClientCard;
