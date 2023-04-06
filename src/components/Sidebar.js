
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();
    const menus = [
        { name: "Home", key: "/", link: "/Home", icon: MdOutlineDashboard },
        { name: "Category", key: "/category", link: "/category", icon: AiOutlineUser },
        { name: "Products", key: "/AddProducts", link: "/AddProducts", icon: FiMessageSquare },
        { name: "Delivery Agents", key: "/delivery", link: "/delivery", icon: TbReportAnalytics, margin: true },
        { name: "Inventory Manager", key: "/AddInventoryManager", link: "/AddInventoryManager", icon: FiFolder },
        { name: "Orders", key: "orders", link: "/", icon: FiShoppingCart },
    ];

    const [open, setOpen] = useState(true);

    return (
        <section className="flex gap-6 overflow-hidden">
            <div className={`bg-gray-100 min-h-screen ${open ? "w-72" : "w-16"} duration-500 text-balck px-4`}>
                <div className="py-3 flex justify-end">
                    <HiMenuAlt3
                        size={26}
                        className="cursor-pointer"
                        onClick={() => setOpen(!open)}
                    />
                </div>
                <div className="mt-4 flex flex-col gap-6 relative ">
                    {menus?.map((menu, i) => (
                        <Link
                            to={menu?.link}
                            key={i}
                            className={` ${menu?.margin && "mt-5"
                                } group flex items-center text-lg gap-3.5 font-medium p-3 border border-black border-2 shadow-[0px_20px_20px_10px_#e2e8f0]    hover:bg-white transition duration-300 ease-in-out hover:scale-110 rounded-md`}
                        >
                            <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                            <h2
                                style={{
                                    transitionDelay: `${i + 3}00ms`,
                                }}
                                className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                                    }`}
                            >
                                {menu?.name}
                            </h2>
                            <h2
                                className={`${open && "hidden"
                                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                            >
                                {menu?.name}
                            </h2>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sidebar;