import Head from 'next/head';
import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('./../components/Navbar'));
const Banner = dynamic(() => import('../components/Banner'));
const Projects = dynamic(() => import('../components/Projects'));
const About = dynamic(() => import('../components/About'));
const Contact = dynamic(() => import('../components/Contact'));

export const config = {
  unstable_runtimeJS: true,
};
export default function Home() {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="This is my portfolio project, In this project i showed my recent projects"
        />
        <meta name="author" content="Sayyid Muhammad A" />
        <meta
          name="keyword"
          content="Portfolio, Portfolio Project, Portfolio using HTML CSS and JavaScript"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Sayyid Muhammad A</title>
      </Head>

      {/* Navbar */}

      <Navbar />

      {/* Main */}

      <main>
        {/* Banner */}

        <Banner />

        {/* About */}

        <About />

        {/* Projects */}
        <Projects />

        {/* Contact */}

        <Contact />
      </main>
    </div>
  );
}
