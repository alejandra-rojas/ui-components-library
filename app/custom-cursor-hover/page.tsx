import Cursors from "./Cursors";
import "./styles.css";

function Page() {
  return (
    <>
      <section>
        <img src="image.jpg" alt="Pattern" data-hover="Contact" />
        <div>
          <h1>Multicursors</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nam
            saepe consequatur voluptate quidem ipsam cum commodi dolorem nisi in
            corrupti, porro placeat. Dignissimos aliquam quas debitis laborum
            magni cum!
          </p>
        </div>
      </section>
      <section>
        <img src="image.jpg" alt="Pattern" data-hover="Contact Me" />
        <div>
          <h1>Anywhere</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nam
            saepe consequatur voluptate quidem ipsam cum commodi dolorem nisi in
            corrupti, porro placeat. Dignissimos aliquam quas debitis laborum
            magni cum! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Saepe quaerat asperiores, deleniti ut omnis totam. Quas cum, libero
            ea expedita quibusdam placeat laboriosam enim, beatae a similique
            perspiciatis facilis earum?
          </p>
        </div>
      </section>
      <section>
        <img src="image.jpg" alt="Pattern" data-hover="again" />
        <div>
          <h1>New content</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nam
            saepe consequatur voluptate quidem ipsam cum commodi dolorem nisi in
            corrupti, porro placeat. Dignissimos aliquam quas debitis laborum
            magni cum! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Saepe quaerat asperiores, deleniti ut omnis totam. Quas cum, libero
            ea expedita quibusdam placeat laboriosam enim, beatae a similique
            perspiciatis facilis earum?
          </p>
        </div>
      </section>
      <Cursors />
    </>
  );
}

export default Page;
