import { v4 as uuidv4 } from "uuid";
// Data
export const content = {
  title: "Resources",
  subtitle: "They help us make our service even better.",
};

export const resources = [
  {
    id: uuidv4().split("-")[0],
    color: 'hsl(261deg 50% 80%)',
    title: "Ilustrations",
    subtitle: "The beautiful illustrations.",
    collection: [
      {
        id: 0,
        cover: {
          src: "https://cdn.dribbble.com/userupload/2616679/file/original-b0f72625a28c1d13e59278df1e3520d0.jpg?filters:format(webp)?filters%3Aformat%28webp%29=&compress=1&resize=1200x901",
          alt: "Abby In Figma",
        },
        title: "The Styles",
        subtitle: "Let's see how to create the kit",
      },
      {
        id: 1,
        cover: {
          src: "https://cdn.dribbble.com/userupload/2612036/file/original-feaae2db20773be8ce6048dbe4f8cb20.png?filters:format(webp)?filters%3Aformat%28webp%29=&compress=1&resize=1200x900",
          alt: "Hyper63 Iconography",
        },
        title: "Vector Brushes",
        subtitle: "Download the kits, make your own",
      },
      {
        id: 2,
        cover: {
          src: "https://cdn.dribbble.com/users/6386797/screenshots/17993723/media/5462b8f4e67a6f9e3aa321e53c20e272.png?compress=1&resize=1200x900&vertical=top",
          alt: "Island",
        },
        title: "Editable Vector",
        subtitle: "Fulv editable illustration vector",
      },
      {
        id: 3,
        cover: {
          src: "https://cdn.dribbble.com/userupload/2496142/file/original-f5e5a55e1d3126c05efd379bfe1e045d.jpg?filters:format(webp)?filters%3Aformat%28webp%29=&compress=1&resize=1200x900",
          alt: "Dronies NFT 2",
        },
        title: "The Styles",
        subtitle: "Let's see how to create the kit",
      },
      {
        id: 4,
        cover: {
          src: "https://cdn.dribbble.com/users/5554814/screenshots/17975625/media/20b0a3c5bbac1517f47e8951edf76e62.png?compress=1&resize=1200x900&vertical=top",
          alt: "VW Golf mk1 | NFT Object",
        },
        title: "Vector Brushes",
        subtitle: "Download the kits, make your own",
      },
      {
        id: 5,
        cover: {
          src: "https://cdn.dribbble.com/users/1292088/screenshots/17955516/media/0b6cfdb6adcfcd418f5f8c0783c248da.png?compress=1&resize=1200x900&vertical=top",
          alt: "Vidily Illustrations",
        },
        title: "Editable Vector",
        subtitle: "Fulv editable illustration vector",
      },
    ],
    link: "ilustrations",
  },
  {
    id: `${uuidv4().split("-")[0]}`,
    color: 'hsl(201deg 50% 80%)',
    title: "Typography",
    subtitle:
      "The type scale is a combination of thirteen styles that are supported by the type system.",
    collection: [
      {
        id: 0,
        cover: {
          src: "https://cdn.dribbble.com/userupload/2616679/file/original-b0f72625a28c1d13e59278df1e3520d0.jpg?filters:format(webp)?filters%3Aformat%28webp%29=&compress=1&resize=1200x901",
          alt: "Abby In Figma",
        },
        title: "The Styles",
        subtitle: "Let's see how to create the kit",
      },
      {
        id: 1,
        cover: {
          src: "https://cdn.dribbble.com/userupload/2612036/file/original-feaae2db20773be8ce6048dbe4f8cb20.png?filters:format(webp)?filters%3Aformat%28webp%29=&compress=1&resize=1200x900",
          alt: "Hyper63 Iconography",
        },
        title: "Vector Brushes",
        subtitle: "Download the kits, make your own",
      },
      {
        id: 2,
        cover: {
          src: "https://cdn.dribbble.com/users/6386797/screenshots/17993723/media/5462b8f4e67a6f9e3aa321e53c20e272.png?compress=1&resize=1200x900&vertical=top",
          alt: "Island",
        },
        title: "Editable Vector",
        subtitle: "Fulv editable illustration vector",
      },
    ],
    link: "typography",
  },
  {
    id: uuidv4().split("-")[0],
    color: 'hsl(150deg 50% 80%)',
    title: "Fonts",
    subtitle: "The type scale is a combination of thirteen styles.",
    collection: [
      {
        id: 0,
        cover: {
          src: "https://cdn.dribbble.com/userupload/2616679/file/original-b0f72625a28c1d13e59278df1e3520d0.jpg?filters:format(webp)?filters%3Aformat%28webp%29=&compress=1&resize=1200x901",
          alt: "Abby In Figma",
        },
        title: "The Styles",
        subtitle: "Let's see how to create the kit",
      },
      {
        id: 1,
        cover: {
          src: "https://cdn.dribbble.com/userupload/2612036/file/original-feaae2db20773be8ce6048dbe4f8cb20.png?filters:format(webp)?filters%3Aformat%28webp%29=&compress=1&resize=1200x900",
          alt: "Hyper63 Iconography",
        },
        title: "Vector Brushes",
        subtitle: "Download the kits, make your own",
      },
      {
        id: 2,
        cover: {
          src: "https://cdn.dribbble.com/users/6386797/screenshots/17993723/media/5462b8f4e67a6f9e3aa321e53c20e272.png?compress=1&resize=1200x900&vertical=top",
          alt: "Island",
        },
        title: "Editable Vector",
        subtitle: "Fulv editable illustration vector",
      },
    ],
    link: "fonts",
  },
];
