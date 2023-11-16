import { meta, shopify, bacancy_technology_logo, bacancy, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    mysql,
    postgresql,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: postgresql,
        name: "PostgreSQL",
        type: "Database",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    }
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // }
];

export const experiences = [
    {
        title: "Trainee Engineer",
        company_name: "Bacancy",
        icon: bacancy,
        iconBg: "white",
        date: "June 2023 - October 2023",
        points: [
            "Learned and applied React.js and associated technologies in the development and maintenance of web applications during training.",
            "Worked closely with diverse teams including designers and product managers to create quality products meeting project requirements.",
            "Implemented responsive design principles and ensured compatibility across different browsers for user-friendly interfaces.",
            "Engaged in code reviews, providing constructive feedback to peers as part of the learning process.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Bacancy",
        icon: bacancy,
        iconBg: "white",
        date: "November 2023 - Present",
        points: [
            "Engaged in the development and maintenance of web applications, primarily utilizing React.js and associated technologies to create robust and user-centric solutions.",
            "Actively collaborated within cross-functional teams, liaising with designers, product managers, and fellow developers to ensure the delivery of high-quality products meeting both functional and design specifications.",
            "Implemented responsive design strategies, ensuring seamless user experiences across various devices, while rigorously ensuring cross-browser compatibility for optimal accessibility.",
            "Contributed to code reviews, offering constructive feedback and insights to fellow developers, fostering a culture of continual improvement and adherence to best practices.",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'FashionFleet',
        description: "E-commerce application built using React.js, Node.js, and MySQL, provides users with a seamless online shopping experience. With this platform, users can easily register and log in to access a variety of products, view product details, add items to their cart, place orders, and track their previous orders. It's a user-friendly solution that simplifies the online shopping process.",
        link: 'https://github.com/Smit901/amazon-clone-frontend',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Chat Verse',
        description: "The Chat Application is a feature-rich, real-time messaging platform built using a modern tech stack that includes React.js, Node.js, MongoDB, and Socket.io. This application provides a seamless communication experience for users, allowing them to register, log in, connect with friends, and create and manage group chats.",
        link: 'https://github.com/Smit9313/chat-app',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-blue',
        name: 'GuruKrupa Fashion',
        description: 'The online clothing store was a B2C web-based application for selling clothes where customers could measure their bodies and get a perfect fitting to order products online. The body measurement tool was a main feature within our web application, which helped users measure their bodies accurately by taking just two images.',
        link: 'https://github.com/Smit9313/gurukupa-fashion-frontend-',
    }
];