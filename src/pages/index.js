import React from 'react';
import Head from 'next/head'
import ss from '../styles/global.sass';

function Home() {
  return (
    <>
      <Head>
        <title>Carlos Roberto Gomes Junior - Front-End Software Developer</title>
      </Head>
      <div className={ss.background} />
      <img className={ss.profilePicture} src={"/static/profile.jpg"} alt="" />
      <div className={ss.main}>
        <h1 className={ss.title}>
          Carlos Roberto Gomes Junior
        </h1>
        <p className={ss.subTitle}>Front-End Software Developer</p>
        <div className={ss.intro}>
          <p>
            Hello! I'm a <strong>Software Developer</strong> from Ribeirão Preto, Brazil.<br />
            Currently I'm working on <strong>JavaScript</strong> projects mainly using the <strong>React JS</strong> ecosystem.
          </p>

          <p>You can find more about me here:</p>

          <ul className={ss.socialLinks}>
            <li><a target="_blank" href="https://www.linkedin.com/in/carlosrberto/" title="Linked In"><i className="fab fa-linkedin" /></a></li>
            <li><a target="_blank" href="https://twitter.com/carlosrberto" title="Twitter"><i className="fab fa-twitter-square" /></a></li>
            <li><a target="_blank" href="https://medium.com/@carlosrberto" title="Medium"><i className="fab fa-medium" /></a></li>
            <li><a target="_blank" href="https://github.com/carlosrberto" title="Github"><i className="fab fa-github-square" /></a></li>
            <li><a target="_blank" href="mailto:&#099;&#097;&#114;&#108;&#111;&#115;&#046;&#114;&#098;&#101;&#114;&#116;&#111;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;" title="E-mail"><i className="fas fa-envelope-square" /></a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Home;
