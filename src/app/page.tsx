import Image from "next/image";
import { Links } from "./components/Links";
import { Dates } from "./components/Dates";
import { Pronouns } from "./components/Pronouns";
import { DoubleClick } from "./components/DoubleClick";
import { UpdateHref } from "./components/UpdateHref";

export default async function Home() {
  const dates = Dates();
  const pronouns = await Pronouns();

  return (
    <div>
      <DoubleClick href="https://go.louisa.uno/flame" threshold={500}>
        <div className="profilePictureContainer" style={{
          display: "grid",
          margin: "35px auto 20px",
        }}>
          <a className="profilePicture">
            <Image src="/profile.webp" alt="Profile Picture" width={128} height={128} />
          </a>
          {/*
					<!-- 			<a className="profilePicture profilePictureOverlay">
          <img
          src="/images/profile.webp"
          alt="Profile Picture Overlay"
          />
					</a> -->
					*/}
        </div>
      </DoubleClick>
      <div style={{ color: "var(--accentColor)", fontSize: "x-large", lineHeight: "1.25", display: "block", width: "100%", textAlign: "center", textDecoration: "none" }}>
        <div className="userName1">
          <a>Louísa</a><a className="greyedOut">.com</a>
        </div>
        <div className="userName2" style={{ marginTop: "-1.9rem" }}>
          <a className="greyedOut">@</a>louisa.uno
        </div>
      </div>
      <a
        className="pronouns userName1"
        id="pronounsEN"
        href="https://go.louisa.uno/pronouns"
        target="_blank"
      >{pronouns.pronounsEN}</a>
      <a
        className="pronouns userName2"
        style={{ marginTop: "-1.4rem" }}
        id="pronounsDE"
        href="https://go.louisa.uno/pronomen"
        target="_blank"
      >{pronouns.pronounsDE}</a>
      <UpdateHref selector=".pronouns" link1="https://go.louisa.uno/pronouns" link2="https://go.louisa.uno/pronomen" />
      <Links />
      <div className="source">
        I built this linktree for free. If you want your own, here is the<a className="accent" href="https://github.com/louisa-uno/Linktree"> source code</a>
        <br />{dates.daysOnHrt} on <a className="accent">E2 - bday</a> in {dates.age}
      </div>
    </div >
  );
}
