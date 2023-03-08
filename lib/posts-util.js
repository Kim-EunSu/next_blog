//post데이터페칭과 마크다운 파일로부터 메타데이터를 추출할때 사용

import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts"); //posts절대경로

function getPostsData(filName) {
  const filePath = path.json(postsDirectory, filName); //해당파일에대한 전체절대경로
  const fileContent = fs.readFileSync(filePath, "utf-8");
  // 객체구조분해를 이용하여 반횐된 객체로부터 두 프로퍼티를 끌어냄
  // matter함수를 통해 생성된 객체의 프로퍼티 이름을 반드시 따라야함
  const { data, content } = matter(fileContent); //matter는 일종의 함수로 문자열을 입력하여 호출

  // 파일 확장자가 없어지도록 replace로 대체
  // 정규표현식을 사용하여 마크다운 확장자를 선택하고 빈문자열로 대체
  //  => 파일확장자는 사라지고 slug에 확장자 없는 파일명만 남음
  const postSlug = filName.replace(/\.md$/, "");

  // 모든 메타데이터와 콘텐츠가 포함되며 slug필드 또한 포함
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = fs.readFileSync(postsDirectory);

  const allPosts = postFiles.map((postFiles) => {
    return getPostsData(postFiles);
  });

  // 이후라면 -1, 이전이라면 1을 반환
  //  => 최신 게시물이 더 이전 게시물보다 먼저 표시되도록 정렬
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.data ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
