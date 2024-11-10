import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id: 0,
        title: "todo List",
        desc: "A virtual clock on a landing page that counts down from a certain number or date",
        img: "/project_01.png",
        tags: ["Reacts", "Node", "CSS", "Typescript"],
    },
    {
        id: 1,
        title: "Countdown Timer",
        desc: "A virtual clock on a landing page that counts down from a certain number or date",
        img: "/project_02.webp",
        tags: ["Next.JS", "Node", "CSS", "Typescript"],
    },
    {
        id: 2,
        title: "Currency Converter Projects",
        desc: "Build a currency converter app using an API for real-time rates.",
        img: "/project_04.png",
        tags: ["Reacts", "Node", "CSS", "Typescript"],
    },
    {
        id: 3,
        title: "Weather Predict App",
        desc: "Application of science and technology to predict the conditions of the atmosphere",
        img: "/project_03.png",
        tags: ["Reacts", "Node", "CSS", "Typescript"],
    },
    {
        id: 4,
        title: "Static Interactive Resume",
        desc: "A virtual clock on a landing page that counts down from a certain number or date",
        img: "/project_05.webp",
        tags: ["HTML", "Node", "CSS", "Typescript"],
    },
    {
        id: 5,
        title: "Calculator",
        desc: "A small electronic or mechanical device that performs calculations,",
        img: "/porject_06.png",
        tags: ["HTML", "Node", "CSS", "Typescript"],
    },
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
