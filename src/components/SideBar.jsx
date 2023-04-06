import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaUser } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import { VscPreview } from "react-icons/vsc";
import { GrAddCircle } from "react-icons/gr";
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlineInventory2 } from "react-icons/md";
import { BiSearch } from "react-icons/bi";



const routes = [
  {
    path: "/Home",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/products",
    name: "Products",
    icon: <MdProductionQuantityLimits />,
    subRoutes: [
      {
        path: "/addcategory",
        name: "Add Category ",
        icon: <GrAddCircle />,
      },
      {
        path: "/addsubcategory",
        name: "Add SubCategory",
        icon: <GrAddCircle />,
      },
      {
        path: "/addproduct",
        name: "Add Product",
        icon: <GrAddCircle />,
      },
    ],
  },
  {
    path: "/viewproducts",
    name: "View Products",
    icon: <VscPreview />,
  },
  {
    path: "/",
    name: "Delivery Agent",
    icon: <MdDeliveryDining />,
    subRoutes: [
      {
        path: "/adddeliveryagent",
        name: "Add Delivery Agent ",
        icon: <GrAddCircle />,
      },
      {
        path: "/viewdeliveryagents",
        name: "View Delivery Agents",
        icon: <VscPreview />,
      },
    ],
  },
  {
    path: "/",
    name: "Inventory Manager",
    icon: <MdOutlineInventory2 />,
    subRoutes: [
      {
        path: "/addinventorymanager",
        name: "Add Inventory Manager",
        icon: <GrAddCircle />,
      },
      {
        path: "/viewinventorymanagers",
        name: "View Inventory Manager",
        icon: <VscPreview />,
      },
    ],
  },
  {
    path: "/vieworders",
    name: "Order",
    icon: <BsCartCheck />,
  },
];





const SideBar = ({ children }) => {

  const [isOpen, setIsOpen] = useState(true);
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
      width: "165px",
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


  // return components
  return (
    <div className="bg-gray-200 text-black">
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "217px" : "45px",

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


export default SideBar;
