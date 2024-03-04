import Image from "next/image";
import styles from "./page.module.css";
// import ./css/Home.css
export default function Home() {
  return (
    <div class="home">
      <article class="home-article">
        <div class="home-article-left">l</div>
        <div class="home-article-right">
          <p>Instagram</p>
          <div class="home-input">
            <input placeholder="전화번호, 사용자 이름 또는 이메일"></input>
            <input placeholder="비밀번호"></input>
          </div>
        </div>
      </article>
      <footer>밑</footer>
    </div>
  );
}
