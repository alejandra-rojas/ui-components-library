import "./styles.css";
import CursorsCSS from "./CursorsCSS";

interface PageProps {}

function Page(props: PageProps) {
  return (
    <>
      <div className="h-[25vh]"></div>
      <header className="h-full w-[50%] m-auto">
        <div className="content">
          <h1>
            <a href="mailto:css@jhey.dev">Custom css cursors</a>
          </h1>
          <p>
            It's you – Wherever you are, doing what you do. Bringing custom
            cursors to life with CSS <span>:has()</span>. Hover some stuff! Like
            this <a href="mailto:css@jhey.dev">mailto</a> link.
          </p>
        </div>
      </header>
      <main>
        <section>
          <div className="content">
            <h2>Posts.</h2>
            <ol>
              <li>the ultimate guide to CSS glow</li>
              <li>Apple-like experiences with scroll animations</li>
              <li>you can :has() cursor</li>
            </ol>
          </div>
        </section>
      </main>

      <CursorsCSS />
    </>
  );
}

export default Page;
