import path from 'path'
import Markdown from 'react-markdown'
import Image from 'next/image'

import { Technology, TechnologyIcon } from './_components/technology';

import styles from './page.module.css'

type MdSections = {
  id: string,
  icon: React.ReactNode,
  header: string,
  technologies: Technology[],
  content: string,
  date: string | undefined,
}[]

async function readMd(fileName: string): Promise<string> {
  const fs = require('fs');
  const { promises: { readFile } } = fs;

  const filePath = path.join(process.cwd(), 'src/sections', fileName);
  const contents = (await readFile(filePath)).toString();
  return contents;
}

export default async function AsyncHome() {
  return Home([
    {
      id: 'about',
      icon: <Image
        src="favicon.svg"
        alt="Adil's profile picture"
        width={500}
        height={500}
        className='mock-mac-os-icon'
      />,
      header: 'About me',
      technologies: [],
      content: await readMd('about.md'),
      date: undefined,
    },
    {
      id: 'saber',
      icon: <Image
        src="https://raw.githubusercontent.com/saber-notes/saber/main/assets/icon/icon_macos.png"
        alt="Saber"
        width={1024}
        height={1024}
      />,
      header: 'Saber',
      technologies: [Technology.flutter],
      content: await readMd('saber.md'),
      date: 'July 2022',
    },
    {
      id: 'ricochlime',
      icon: <Image
        src="https://raw.githubusercontent.com/adil192/ricochlime/main/assets/icon/icon_macos.png"
        alt="Ricochlime"
        width={1024}
        height={1024}
      />,
      header: 'Ricochlime',
      technologies: [Technology.flutter],
      content: await readMd('ricochlime.md'),
      date: 'August 2023'
    },
    {
      id: 'timing',
      icon: <Image
        src="projects/timing.svg"
        alt="Timing Flutter"
        width={1024}
        height={1024}
        className='mock-mac-os-icon'
      />,
      header: 'Timing Trainer',
      technologies: [Technology.flutter, Technology.pwa],
      content: await readMd('timing.md'),
      date: 'June 2022'
    },
    {
      id: 'nonogram',
      icon: <Image
        src="projects/nonogram.webp"
        alt="Nonogram"
        width={1024}
        height={1024}
        className='mock-mac-os-icon'
      />,
      header: 'Nonogram',
      technologies: [Technology.pwa],
      content: await readMd('nonogram.md'),
      date: 'May 2022',
    },
    {
      id: 'social',
      icon: <Image
        // TODO(adil192): Make a better icon
        src="projects/blank.svg"
        alt="Social"
        width={1024}
        height={1024}
        className='mock-mac-os-icon'
      />,
      header: 'Social',
      technologies: [Technology.pwa],
      content: await readMd('social.md'),
      date: 'April 2022',
    },
    {
      id: 'quintle',
      icon: <Image
        src="projects/quintle.png"
        alt="Quintle"
        width={1024}
        height={1024}
        className='mock-mac-os-icon'
      />,
      header: 'Quintle',
      technologies: [Technology.pwa],
      content: await readMd('quintle.md'),
      date: 'February 2022',
    },
    {
      id: 's-pen',
      icon: <Image
        src="projects/spencover.webp"
        alt="S Pen"
        width={1024}
        height={1024}
        className='mock-mac-os-icon'
      />,
      header: 'S Pen',
      technologies: [],
      content: await readMd('s-pen.md'),
      date: 'February 2022',
    },
    {
      id: 'fabrik',
      icon: <Image
        src="projects/fabrik.webp"
        alt="Fabrik"
        width={1024}
        height={1024}
        className='mock-mac-os-icon'
      />,
      header: 'Fabrik',
      technologies: [],
      content: await readMd('fabrik.md'),
      date: 'January 2022',
    },
    {
      id: 'clocks',
      icon: <Image
        src="projects/clocks.webp"
        alt="Clocks"
        width={1024}
        height={1024}
        className='mock-mac-os-icon'
      />,
      header: 'Clocks',
      technologies: [],
      content: await readMd('clocks.md'),
      date: 'November 2021',
    },
    {
      id: 'zombies',
      icon: <Image
        src="projects/zombies.webp"
        alt="Zombies"
        width={1024}
        height={1024}
        className='mock-mac-os-icon'
      />,
      header: 'Zombies',
      technologies: [],
      content: await readMd('zombies.md'),
      date: 'November 2021',
    },
    {
      id: 'calculator',
      icon: <Image
        src="projects/calculator.webp"
        alt="Calculator"
        width={1024}
        height={1024}
        className='mock-mac-os-icon'
      />,
      header: 'Calculator',
      technologies: [],
      content: await readMd('calculator.md'),
      date: 'November 2021',
    },
    {
      id: 'loffice-365',
      icon: <Image
        src="projects/loffice-365.webp"
        alt="loffice-365"
        width={1024}
        height={1024}
        className='mock-mac-os-icon'
      />,
      header: 'loffice-365',
      technologies: [],
      content: await readMd('loffice-365.md'),
      date: 'October 2021',
    },
    {
      id: 'SamsungAppsPatcher',
      icon: <Image
        src="projects/SamsungAppsPatcher.webp"
        alt="Samsung Apps Patcher"
        width={1024}
        height={1024}
        className='mock-mac-os-icon'
      />,
      header: 'Samsung Apps Patcher',
      technologies: [],
      content: await readMd('SamsungAppsPatcher.md'),
      date: 'June 2021',
    },
    {
      id: 'S20Debloat',
      icon: <Image
        src="projects/S20Debloat.webp"
        alt="S20 Debloat"
        width={1024}
        height={1024}
        className='mock-mac-os-icon'
      />,
      header: 'S20 Debloat',
      technologies: [],
      content: await readMd('S20Debloat.md'),
      date: 'May 2021',
    },
    {
      id: 'collatz',
      icon: <Image
        src="projects/collatz.webp"
        alt="Collatz"
        width={1024}
        height={1024}
        className='mock-mac-os-icon'
      />,
      header: 'Collatz',
      technologies: [],
      content: await readMd('collatz.md'),
      date: 'June 2020',
    },
    {
      id: 'colours',
      icon: <Image
        src="projects/colours.webp"
        alt="Colours"
        width={1024}
        height={1024}
        className='mock-mac-os-icon'
      />,
      header: 'Colours',
      technologies: [],
      content: await readMd('colours.md'),
      date: 'before June 2020',
    },
    {
      id: 'repo',
      icon: <Image
        src="projects/repo.webp"
        alt="Repo"
        width={1024}
        height={1024}
        className='mock-mac-os-icon'
      />,
      header: 'Repo',
      technologies: [],
      content: await readMd('repo.md'),
      date: 'before June 2020',
    },
    {
      id: 'LIFE',
      icon: <Image
        src="projects/LIFE.webp"
        alt="LIFE"
        width={1024}
        height={1024}
        className='mock-mac-os-icon'
      />,
      header: 'LIFE',
      technologies: [],
      content: await readMd('LIFE.md'),
      date: 'before June 2020',
    },
  ])
}

function Home(sections: MdSections) {
  return (
    <>
      <a href='#about'>
        <Image
          src="favicon.svg"
          alt="Adil's profile picture"
          width={96}
          height={100.85}
          className="pfp"
        />
      </a>
      <header>
        <h1>Adil Hanney</h1>
        <p>Software Engineer</p>
      </header>
      <nav>
        {sections
          .filter(({ id }) => id !== 'about')
          .map(({ id, icon }) => (
            <li key={id}>
              <a href={`#${id}`}>
                {icon}
              </a>
            </li>
          ))}
      </nav>
      <main>
        {sections.map(({ id, icon, header, technologies, content, date }) => (
          <section key={id} id={id}>
            <div className='section-header'>
              {icon}
              <h2>{header}</h2>
              <div className='technologies'>
                {technologies.map(technology => <TechnologyIcon key={technology} technology={technology} />)}
              </div>
            </div>
            <Markdown>{content}</Markdown>
            {date && <p className='date'>{date}</p>}
          </section>
        ))}
      </main>
    </>
  )
}
