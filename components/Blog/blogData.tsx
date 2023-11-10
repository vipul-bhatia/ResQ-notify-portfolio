import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Dive into Headless CMS ",
    paragraph:
      "Imagine a CMS, but without the visible parts (like a website's design and interface). That's essentially a Headless CMS. It separates the content from its presentation.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "AIProStack Solutions",
      image: "/images/blog/author-01.png",
      designation: "Software Company",
    },
    tags: ["creative"],
    publishDate: "2023",
  },
  {
    id: 2,
    title: "Content Delivery Networks, commonly known as CDNs.",
    paragraph:
      "A CDN is a network of servers strategically located around the globe. Its primary function? To deliver web content and rich media to users based on their geographical location. This ensures faster load times, reduced bandwidth costs, and an overall enhanced user experience.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "AIProStack Solutions",
      image: "/images/blog/author-02.png",
      designation: "Software Company",
    },
    tags: ["computer"],
    publishDate: "2023",
  },
  {
    id: 3,
    title: "Deep Dive into India’s Two-Wheeler Insurance Sector!",
    paragraph:
      "We are elated to share our latest report at #AIProStackSolutions, offering extensive insights into the Two-Wheeler Insurance Market in India. This in-depth analysis focuses on essential KPIs, unveiling patterns and valuable data to comprehend the current market scenario better.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "AIProStack Solutions",
      image: "/images/blog/author-03.png",
      designation: "Software Company",
    },
    tags: ["Report"],
    publishDate: "2025",
  },
];
export default blogData;
