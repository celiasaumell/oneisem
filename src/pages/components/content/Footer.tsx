import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-off-white text-left gap-5 grid px-28 pt-48 pb-32 md:grid-cols-2 md:pt-32 2xl:px-60 w-full ">
      <section>
        <h3 className="font-bold text-3xl leading-relaxed">Oneise Morera</h3>
        <p className="max-w-[50ch] leading-relaxed">
          I am a Business Analyst with 25 years of experience in the healthcare
          management industry. I provide businesses with data-driven results.
        </p>
      </section>
      <section className="grid sm:grid-cols-2 footer-links">
        <div className="space-y-5">
          <Link href="/">
            <a>Home</a>
          </Link>
          <div>
            <Link href="/#about" scroll>
              <a>About</a>
            </Link>
            <p>Learn about me</p>
          </div>
          <div>
            <Link href="/#experience" scroll>
              <a>Experience</a>
            </Link>
            <p>Learn about my previous positions</p>
          </div>
          <div>
            <a href="/Oneise Morera.pdf" target="_blank">
              Resume
            </a>
            <p>Download my resume</p>
          </div>
          <div>
            <Link href="/contact" scroll>
              <a>Contact</a>
            </Link>
            <p>Send me a message</p>
          </div>
        </div>
        <div className="xs:py-5">
          <div>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex"
            >
              <Image
                src="/linkedin.svg"
                alt="LinkedIn Icon"
                className="w-5 h-5 inline mr-2"
                width={16}
                height={16}
              />
              Linked In
            </a>
            <p>Let&apos;s connect</p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
