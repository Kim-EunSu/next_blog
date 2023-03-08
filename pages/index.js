import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

const Dummy_POSTS = [
  {
    title: "Getting-Started with NextJs1",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS is a the React framework for production",
    date: "2023-03-08",
    slug: "getting-started-with-nextjs",
  },
  {
    title: "Getting-Started with NextJs2",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS is a the React framework for production",
    date: "2023-03-08",
    slug: "getting-started-with-nextjs2",
  },
  {
    title: "Getting-Started with NextJs3",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS is a the React framework for production",
    date: "2023-03-08",
    slug: "getting-started-with-nextjs3",
  },
  {
    title: "Getting-Started with NextJs4",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS is a the React framework for production",
    date: "2023-03-08",
    slug: "getting-started-with-nextjs4",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={Dummy_POSTS} />
    </>
  );
}
