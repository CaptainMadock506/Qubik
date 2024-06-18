import { IoIosCloseCircle } from "react-icons/io";

interface ITags {
    tag: string
}

const Tags = ({ tag }: ITags) => {

    return (
        <div className=" relative text-center px-2 border-dotted border-2 bg-qu_li_purple p-1 text-gray-200 rounded-lg ">
            <div className="absolute -top-2 -right-2 text-gray-500" onClick = {close}>
                <IoIosCloseCircle  size = {'1.3rem'} />
            </div>
            <span className = "px-1">{tag}</span>
        </div>
    )
}

export default Tags;