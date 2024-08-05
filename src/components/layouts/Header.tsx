import Image from "next/image";
import Logo from "@/app/assets/logo.png";
import {useEffect, useState} from "react";

const LayoutHeader = () => {
    const [menus,] = useState([{
        label: "ABOUT",
        to: ''
    },
        {
            label: "PRICING",
            to: ''
        },
        {
            label: "CONTACT",
            to: ''
        }])

    function headerBackgroundChange() {
        const header = document.getElementById('header');
        const scrollPosition = window.scrollY || window.pageYOffset;
        if (scrollPosition > 85) {
            header.style.background = 'linear-gradient(130.49deg, #95E7F7 -6.27%, #00A2DF 73.03%)'
        } else {
            header.style.background = 'transparent';
        }
    }

    useEffect(() => {
        headerBackgroundChange()
        window.addEventListener('scroll', headerBackgroundChange);
    }, [])
    return <header id="header">
        <div className="wrap-logo">
            <Image src={Logo} alt='Logo' className="logo"/>
            <p className='text-white font-bold text-xl'>HOME</p>
        </div>
        <div className="menus">
            {
                menus.map((menu, menuIdx) => (
                    <p key={menuIdx} className="text-black font-black">{menu.label}</p>))
            }

        </div>
    </header>
}

export default LayoutHeader