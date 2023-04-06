import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";



const routes = [
  {
    path: "/Home",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/products",
    name: "Products",
    icon: <FaUser />,
    subRoutes: [
      {
        path: "/addcategory",
        name: "Add Category ",
        icon: <FaUser />,
      },
      {
        path: "/addsubcategory",
        name: "Add SubCategory",
        icon: <FaLock />,
      },
      {
        path: "/AddProducts",
        name: "Add Product",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/category",
    name: "View Products",
    icon: <MdMessage />,
  },
  {
    path: "/",
    name: "Delivery Agent",
    icon: <BiAnalyse />,
    subRoutes: [
      {
        path: "/AddDeliveryAgent",
        name: "Add Delivery Agent ",
        icon: <FaUser />,
      },
      {
        path: "/delivery",
        name: "View Delivery Agents",
        icon: <FaLock />,
      },
    ],
  },
  {
    path: "/",
    name: "Inventory Manager",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/AddInventoryManager",
        name: "Add Inventory Manager",
        icon: <FaUser />,
      },
      {
        path: "/ViewInventoryManagers",
        name: "View Inventory Manager",
        icon: <FaLock />,
      },
    ],
  },
  {
    path: "/order",
    name: "Order",
    icon: <BsCartCheck />,
  },
];

const SideBar2 = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="bg-gray-200 text-black">
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">

            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  <h2 className='text-xl font-bold text-center flex justify-center'>Groccery <img src="https://cdn-icons-png.flaticon.com/512/3724/3724763.png" alt="plant image" className='w-10 pl-2' /></h2>
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>


          {/* search bar */}
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>


          {/* routes */}
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </div>
  );
};

export default SideBar2;
