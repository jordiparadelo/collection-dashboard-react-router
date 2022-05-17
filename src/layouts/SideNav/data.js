// Assets
import {MdGridView, MdStars, MdFolderOpen, MdOutlineForum} from 'react-icons/md'

// Data
export const content = {
  title: "Customer Recommended",
  subtitle: 'They help us make our service even better.'
};
export const navlinks = [
  {
    id: "resources",
    title: "Resources",
    icon: <MdGridView/>,
    link: '/resources'
  },
  {
    id: "starred",
    title: "Starred",
    icon: <MdStars/>,
    link: '/starred'
  },
  {
    id: "saved",
    title: "Saved",
    icon: <MdFolderOpen/>,
    link: '/saved'
  },
  {
    id: "messages",
    title: "Messages",
    icon: <MdOutlineForum/>,
    link: '/messages'
  },
  ];
