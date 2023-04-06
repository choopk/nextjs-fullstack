import PublicLayout from "@/components/layouts/PublicLayout";
import Head from "next/head";

const About = () => {
  return (
    <PublicLayout>
      <Head>
        <title>About fullstack</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="format mx-auto max-w-3xl">
        <h1>About me</h1>
        <p>
          Hello there! My name is Ceghap, and I am the dorky programmer behind
          this website. I may not have the most conventional approach to web
          design, but trust me, that&apos;s a good thing.
        </p>
        <p>
          I&apos;ve always been fascinated by the inner workings of technology,
          and I&apos;ve spent countless hours tinkering with code and
          experimenting with new programming languages. I love the challenge of
          taking a blank canvas and turning it into something functional and
          beautiful.
        </p>
        <p>
          But beyond my love of programming, I&apos;m also a bit of a dork in
          other areas. I love comic books, sci-fi movies, and video games. I
          find inspiration in the worlds created by these mediums, and often use
          them as a starting point for my designs.
        </p>
        <p>
          When I&apos;m not typing away at my keyboard, you can usually find me
          lost in a good book or playing with my collection of vintage action
          figures. I may be a bit of an oddball, but I think that&apos;s what
          makes me stand out in a sea of boring web developers.
        </p>
        <p>
          So if you&apos;re looking for a website that&apos;s a little bit
          different, a little bit dorky, and a whole lot of awesome, then
          you&apos;ve come to the right place. Let&apos;s create something
          amazing together!
        </p>
      </main>
    </PublicLayout>
  );
};

export default About;
