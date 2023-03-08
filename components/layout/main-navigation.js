import Link from "next/link";

function MainNavigation() {
  return (
    <header>
      <Link href="/">
        <a>
          <Logo />
        </a>
        {/* 이처럼 일반텍스트가 아닌 다른 입력값에 대해서는 Link태그가 렌더링되지 않으므로 a태그를 따로 추가해야함  */}
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
