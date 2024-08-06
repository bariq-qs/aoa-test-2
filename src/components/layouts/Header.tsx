import Image from "next/image";
import Logo from "@/app/assets/logo.png";
import { useEffect, useState } from "react";
import Button from "../button";
import { useRouter } from "next/navigation";

const LayoutHeader = () => {
  const router = useRouter();
  const [menus] = useState([
    {
      label: "ABOUT",
      to: "about",
    },
    {
      label: "PRICING",
      to: "price",
    },
    {
      label: "CONTACT",
      to: "contact",
    },
  ]);

  function headerBackgroundChange() {
    const header = document.getElementById("header");
    const scrollPosition = window.scrollY || window.pageYOffset;
    if (scrollPosition > 85 && header) {
      header.style.background =
        "linear-gradient(130.49deg, #95E7F7 -6.27%, #00A2DF 73.03%)";
    } else {
      if (header) {
        header.style.background = "transparent";
      }
    }
  }

  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Section not found");
    }
  };

  useEffect(() => {
    headerBackgroundChange();
    window.addEventListener("scroll", headerBackgroundChange);
  }, []);

  return (
    <header id='header'>
      <div className='wrap-logo'>
        <Image src={Logo} alt='Logo' className='logo' />
        <p className='text-white font-bold text-xl'>HOME</p>
      </div>
      <div className='menus'>
        {menus.map((menu, menuIdx) => (
          <p
            key={menuIdx}
            className='text-black font-black cursor-pointer'
            onClick={() => handleScrollToSection(menu.to)}
          >
            {menu.label}
          </p>
        ))}
        <Button
          label='LOGIN'
          variant='outline-success'
          onClick={() => router.push("/login")}
        ></Button>
      </div>
    </header>
  );
};

export default LayoutHeader;
