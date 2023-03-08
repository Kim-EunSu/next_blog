import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";

const Dummy_POST = {
  title: "Getting-Started with NextJs",
  image: "getting-started-nextjs.png",
  excerpt: "NextJS is a the React framework for production",
  date: "2023-03-08",
  slug: "getting-started-with-nextjs",
  content: "# This is a first post",
};

function PostContent() {
  const imagePath = `/images/posts/${Dummy_POST.slug}/${Dummy_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={Dummy_POST.title} image={imagePath} />
      <ReactMarkdown>{Dummy_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
