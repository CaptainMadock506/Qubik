import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { FC } from "react";
import { UrlObject } from "url";

interface IButton {
    icon?: React.ReactNode,
    text: String,
    width: number,
    height: number,
    onClick?: () => void,
    url: string,
}

const Button = ({ icon, text, width, height, onClick, url }: IButton) => {
    return (
        <Link href ={url} passHref>
            <button className={
                `w-[${width}] flex justify-right items-center bg-qu_blue-600 
            text-gray-200 h-[${height}] p-2 px-10  rounded-lg
            text-lg mx-8`
            } onClick={onClick}>
                <span className="flex justify-center items-center">
                    {icon}
                </span>
                <span className="border-l-2 ml-2 pl-4 w-[100%] border-gray-300 text-xl">
                    {text}
                </span>
            </button>
        </Link>

    )
}

export default Button;