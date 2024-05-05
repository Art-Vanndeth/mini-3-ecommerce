import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FaCartPlus } from "react-icons/fa";

type PropsType = {
	name: string;
	image: string;
	price: number;
	onClick?: () => void;
};

export default function CardProduct({
	name,
	image,
	price,
	onClick,
}: PropsType) {
  return (
    <Card  isFooterBlurred className="h-[500px] cursor-pointer">
      <CardHeader>
        <button className="absolute right-2 top-2 bg-yellow-200 p-3 rounded-2xl">
        <FaCartPlus />
        </button>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src={image}
      />
      <CardFooter className="absolute bg-gray-100 bottom-0  border-zinc-100 z-10 justify-between">
        <div>
          <p className="text-black text-tiny">{name}</p>
        </div>
        <span className=" text-gray-400 dark:text-white">
					${price}
				</span>
      </CardFooter>
    </Card>
  );
}
