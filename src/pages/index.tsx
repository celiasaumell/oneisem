import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "./components/content/Footer";
import Main from "./components/content/Main";
import NavBar from "./components/navbar/NavBar";
import Timeline from "./components/timeline/Timeline";

type TechnologyCardProps = {
  name: string;
  description: string;
  img_src: string;
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Oneise Morera</title>
        <meta
          name="description"
          content="Oneise Morera's business analyst resume website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <Main>
        <section
          id="main-content"
          className="z-0 w-full bg-business-photo min-w-fit bg-top bg-no-repeat bg-cover overflow-hidden xs:pt-60
           sm:min-h-screen sm:h-full"
        >
          <div
            className="sm:relative sm:left-[10%] sm:pt-[25rem] sm:pb-[10rem]
        md:left-[28%] 
        lg:left-1/3 
        xl:left-[35%] 
        2xl:left-[40%] text-center flex flex-col  py-10 px-10 xs:bottom-[10%] space-y-10 sm:p-0
         sm:text-left sm:space-y-16 sm:bg-inherit min-w-[270px] max-w-[675px]"
          >
            <h1 className="text-6xl font-bold">Oneise Morera</h1>
            <p className="text-xl sm:text-4xl max-w-[514px]">
              I&apos;m a senior business analyst with over 25 years of
              experience in healthcare management successfully driving
              data-driven results.
            </p>
            <button className="bg-dark-teal w-fit mx-auto text-white py-2 px-8 text-2xl rounded-r-[20px] rounded-bl-[20px] sm:mx-0  sm:py-4 sm:px-12">
              Let&apos;s Talk
            </button>
          </div>
        </section>
        <section className="pt-10 sm:pt-28 px-10 space-y-10">
          <h2 id="about" className="text-4xl leading-normal font-bold">
            Hi, I&apos;m Oneise. Nice to meet you!
          </h2>
          <p className="container mx-auto text-xl leading-relaxed max-w-[70ch]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            feugiat metus non neque porta, sed fringilla nulla molestie. Sed
            placerat, turpis sit amet auctor pharetra, felis metus placerat
            velit, ac vehicula nisl mauris sit amet nulla. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas.This stack uses:
          </p>
          <h2 className="text-4xl leading-normal font-bold">
            Areas of expertise
          </h2>
          <p className="text-xl">
            With over 25 years of experience, I deliver data-driven
            recommendations to improve your business.
          </p>
          <div className="max-w-[950px] items-end flex flex-wrap gap-3 pt-3 mt-3 text-center px-5 mx-auto justify-center">
            <TechnologyCard
              img_src="/analytics.png"
              name="Consumer Analytics"
              description="The React framework for production"
            />
            <TechnologyCard
              img_src="/process.png"
              name="Business Processes"
              description=""
            />
            <TechnologyCard
              img_src="/inspection.png"
              name="CMS Regulatory Compliance"
              description=""
            />
            <TechnologyCard
              img_src="/operations.png"
              name="MA-PD Enrollment & Service Center Operations"
              description=""
            />
            <TechnologyCard
              img_src="/training.png"
              name="Training & Quality Improvement"
              description=""
            />
          </div>
          <h2 id="experience" className="text-4xl leading-normal font-bold">
            Experience
          </h2>
          <section className="relative ">
            <div className="absolute timeline-line left-1/2 bg-dark-teal h-full w-[.25rem]"></div>
            <section className="experience grid gap-3 grid-cols-2 mx-auto max-w-[950px]">
              <section className="description"></section>
              <Timeline
                year={2019}
                position="Senior Business Analyst/ Product Owner"
                company="Invidasys"
                description="lorem ipsum"
              />
              <Timeline
                year={2017}
                position="Director of Operations"
                company="HealthSun Health Plans"
                description="lorem ipsum"
              />
              <section className="description"></section>
              <section className="description"></section>
              <Timeline
                year={2014}
                position="Product Owner"
                company="Invidasys"
                description="lorem ipsum"
              />
              <Timeline
                year={2011}
                position="Director of Eligibility and Enrollment"
                company="Simply Healthcare Plans"
                description="lorem ipsum"
              />
              <section className="description"></section>
              <section className="description"></section>
              <Timeline
                year={2010}
                position="Manager of Eligibility and Enrollment"
                company="Jackson Health Plans"
                description="lorem ipsum"
              />
              <Timeline
                year={1993}
                position="Operations Supervisor"
                company="United HealthCare of Florida"
                description="lorem ipsum"
              />
              <section className="description"></section>
            </section>
          </section>
          <a
            href="Oneise Morera.pdf"
            target="_blank"
            download
            className="block"
          >
            <button className="bg-dark-teal w-fit mx-auto text-white py-2 px-8 text-2xl rounded-[20px]  sm:mx-0  sm:py-4 sm:px-12">
              Download Resume
            </button>
          </a>
        </section>
        <section className="z-10 space-y-5 sm:space-y-0 relative inset-x-0 xs:bottom-[-8.5rem] sm:bottom-[-4.45rem] grid py-10 bg-off-white w-1/2  mx-auto rounded-md items-center drop-shadow-md w-[80%] lg:w-[75%] min-w-[265px] px-5  md:grid-cols-3 ">
          <p className="font-bold text-3xl">Have any questions?</p>
          <p>Let&apos;s coordinate a time to chat!</p>
          <button className="mx-auto sm:ml-auto bg-dark-teal w-fit text-white py-2 px-8 text-2xl rounded-r-[10px] rounded-bl-[10px] sm:py-4 sm:px-12">
            Let&apos;s Talk
          </button>
        </section>
      </Main>
      <Footer />
    </>
  );
};

const TechnologyCard = ({
  name,
  description,
  img_src,
}: TechnologyCardProps) => {
  return (
    <section className="max-h-fit justify-center md:max-w-[30ch] md:flex-item  p-6 duration-500 rounded motion-safe:hover:scale-105">
      <Image
        alt="icon"
        src={img_src}
        className="max-w-[30px] mx-auto"
        width={30}
        height={30}
      />
      <h3 className="font-bold">{name}</h3>
      <p className="leading-loose">
        {
          (description =
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis suspendisse justo eget nullam sed. ")
        }
      </p>
    </section>
  );
};

export default Home;
