import Image from "next/image";
import Link from "next/link";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import Lottie from "react-lottie-player";
import menuJson from "../../../../public/9789-burger-menu.json";
type menuProps = {
  menuToggle: boolean;
  playAnimation: boolean;
  setPlayAnimation: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMenuHandler: React.Dispatch<React.SetStateAction<boolean>>;
  setDisableBtn: React.Dispatch<React.SetStateAction<boolean>>;
  disableBtn: boolean;
};

const NavBar = () => {
  const [menuToggle, setMenuToggle] = useState<true | false>(false);
  const [disableBtn, setDisableBtn] = useState<true | false>(false);
  const [playAnimation, setPlayAnimation] = useState<true | false>(false);
  const mobileSize = useWindowDimensions(640);
  const toggleMenuHandler = () => {
    setMenuToggle((MenuToggle) => !menuToggle);
  };

  const navRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const refArray: MutableRefObject<HTMLElement | HTMLDivElement | null>[] = [
    navRef,
    headerRef,
  ];
  useEffect(() => {
    const { current } = navRef;

    if (current) {
      const navHeight = current.offsetHeight + 10 + "px";
      document.documentElement.style.setProperty("--scroll-padding", navHeight);
    }

    const scrollEventHandler = () => {
      const yCoord = window.scrollY;

      if (current) {
        const mainSelector = document.querySelector("main");
        if (yCoord > 0 && !mobileSize) {
          current.classList.add("fixed", "shadow-lg");
          mainSelector?.classList.add(`mt-[130px]`);
          current.classList.remove("sm:static");
        } else {
          mainSelector?.classList.remove(`mt-[130px]`);
          current.classList.remove("fixed", "shadow-lg");
        }
      }
    };

    window.addEventListener("scroll", scrollEventHandler);

    return () => window.removeEventListener("scroll", scrollEventHandler);
  }, [mobileSize]);

  useOutsideMinimizer(
    menuToggle,
    playAnimation,
    refArray,
    () => setMenuToggle(false),
    () => setPlayAnimation(true),
    () => setDisableBtn(true)
  );

  const mobileLinkHandler = () => {
    if (mobileSize) {
      setMenuToggle(false);
      setPlayAnimation(!playAnimation);
    }
  };
  return (
    <header
      className={`${
        menuToggle
          ? "xs:bg-gradient-to-b xs:from-transparent w-full xs:to-black/50  xs:h-screen xs:overflow-hidden"
          : null
      }
      xs:fixed xs:block xs:top-0 xs:right-0 z-[999] sm:bg-white text-dark-teal `}
    >
      <a href="#main-content" className="skip-nav-link">
        Skip Navigation
      </a>
      <div
        ref={headerRef}
        className={`xs:fixed xs:shadow-lg xs:mix-blend-screen xs:flex w-fit z-50 bg-white  xs:rounded-full sm:hidden right-7 top-5 p-0 `}
        aria-controls="primary-navigation"
        aria-expanded={menuToggle}
      >
        <MenuLottie
          menuToggle={menuToggle}
          setPlayAnimation={setPlayAnimation}
          playAnimation={playAnimation}
          toggleMenuHandler={toggleMenuHandler}
          setDisableBtn={setDisableBtn}
          disableBtn={disableBtn}
        />
      </div>
      <nav
        ref={navRef}
        className={`${
          menuToggle ? null : "xs:hidden"
        } xs:fixed sm:static xs:inset-x-5 xs:top-28 xs:bg-white sm:bg-white z-50 text-sm xs:rounded-md flex xs:flex-col justify-between py-12 px-20  sm:w-full `}
        aria-expanded={menuToggle}
      >
        <section className="flex xs:flex-col xs:space-y-10 md:space-y-0 sm:space-x-10 text-center font-bold items-center">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/#about" scroll>
            <a onClick={mobileLinkHandler}>About</a>
          </Link>
          <Link href="/#experience" scroll>
            <a onClick={mobileLinkHandler}>Experience</a>
          </Link>
          <a href="/Oneise Morera.pdf" target="_blank">
            Resume
          </a>
          <Link href="/contact" scroll>
            <a>Contact</a>
          </Link>
        </section>
        <section className="xs:self-center xs:pt-10 min-w-[30px]">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <Image width={30} height={30} src="/linkedin.svg" />
          </a>
        </section>
      </nav>
    </header>
  );
};

function MenuLottie(props: menuProps) {
  const segment: [number, number][] = [
    [0, 30],
    [31, 70],
  ];

  const [segmentStates, setSegmentStates] = useState({
    beginState: segment[0],
    finalState: segment[1],
  });

  const [segmentStart, setSegmentStart] = useState(segmentStates.beginState);

  const segmentChange = () => {
    if (segmentStart === segmentStates.beginState) {
      setSegmentStart(segmentStates.finalState);
    } else {
      setSegmentStart(segmentStates.beginState);
    }
  };

  const animationHandler = () => {
    props.toggleMenuHandler(!props.menuToggle);
    props.setPlayAnimation(true);
    props.setDisableBtn(!props.disableBtn);
  };

  return (
    <button onClick={animationHandler} disabled={props.disableBtn}>
      <Lottie
        speed={3}
        segments={true && segmentStart}
        loop={false}
        animationData={menuJson}
        play={props.playAnimation}
        style={{
          width: 72,
          height: 73,
          color: "pink",
        }}
        onComplete={() => {
          props.setPlayAnimation(!props.playAnimation);
          props.setDisableBtn(false);
          segmentChange();
          console.log("completed animation");
        }}
      />
    </button>
  );
}

const useWindowDimensions = (size: number) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // detect window screen width function
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width <= size;
};

const useOutsideMinimizer = (
  menuToggleState: boolean,
  playAnimation: boolean,
  refArray: MutableRefObject<HTMLDivElement | HTMLElement | null>[],
  handler: React.Dispatch<React.SetStateAction<boolean | MouseEvent>>,
  animationHandler: React.Dispatch<React.SetStateAction<boolean | MouseEvent>>,
  disableBtnHandler: React.Dispatch<React.SetStateAction<boolean | MouseEvent>>
) =>
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const { current: refArray0Current } =
        refArray[0] as MutableRefObject<HTMLElement>;
      const { current: refArray1Current } =
        refArray[1] as MutableRefObject<HTMLElement>;
      if (
        (refArray && !refArray0Current) ||
        !refArray1Current ||
        refArray0Current.contains(event.target as Node) ||
        refArray1Current.contains(event.target as Node)
      ) {
        console.log("animation played", playAnimation);
        return;
      }

      animationHandler(event);
      disableBtnHandler(event);
      handler(event);
    };

    if (menuToggleState && !playAnimation) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refArray, handler, animationHandler, disableBtnHandler]);

export default NavBar;
