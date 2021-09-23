import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { signIn, signOut, useSession } from "next-auth/client";
import profile from "../public/profile.png";
import ticketlogo from "../public/ticketlogo.png";

export default function Home() {
  const [session] = useSession();
  console.log(session);

  // const componentRef = useRef();
  // const Ticket = React.forwardRef((props, ref) => (
  //   <div ref={ref}>
  //     <div className={styles.ticket}>
  //       <div className={styles.ticket_event_name}>
  //         <Image src={ticketlogo} />
  //       </div>
  //       <div className={styles.ticket_profile}>
  //         <Image
  //           src={session ? session.user.image : profile}
  //           width={100}
  //           height={100}
  //         />
  //         <h3>{session ? session.user.name : "Your Name"}</h3>
  //       </div>
  //       <div className={styles.ticket_date}>
  //         <p style={{ fontSize: "12px" }}>
  //           October 3, 2021
  //           <br />
  //           4pm Online
  //         </p>
  //       </div>

  //       <div className={styles.ticket_host}>
  //         <p style={{ fontSize: "10px" }}>
  //           Hosted by
  //           <br />
  //           <br />
  //           <b> OSC VIT-AP</b> &nbsp; &nbsp; &nbsp; <b> WIOS VIT-AP </b>
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // ));

  return (
    <div className={styles.container}>
      <Head>
        <title>Techcast</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src="/techcastlogo.png" height={119} width={504} />

        <p className={styles.event_name}>
          Techcast episode 3 Hacktoberfest special
        </p>

        <p className={styles.event_details}>
          Event details .....lorem ipsum lorem ipsum lorem ipsum
          <br />
          October 3, 2021 4pm / Online
        </p>
        {/* <p>{session? session.user.name : "Your Name"}</p> */}

        <div className={styles.ticket_container}>
          <div>
            <div className={styles.ticket}>
        <div className={styles.ticket_event_name}>
          <Image src={ticketlogo} />
        </div>
        <div className={styles.ticket_profile}>
          <Image
            src={session ? session.user.image : profile}
            width={100}
            height={100}
          />
          <h3>{session ? session.user.name : "Your Name"}</h3>
        </div>
        <div className={styles.ticket_date}>
          <p style={{ fontSize: "12px" }}>
            October 3, 2021
            <br />
            4pm Online
          </p>
        </div>

        <div className={styles.ticket_host}>
          <p style={{ fontSize: "10px" }}>
            Hosted by
            <br />
            <br />
            <b> OSC VIT-AP</b> &nbsp; &nbsp; &nbsp; <b> WIOS VIT-AP </b>
          </p>
        </div>
      </div>
        </div>
          <button onClick={!session ? signIn : signOut}>
            {!session ? "Claim with github" : "Sign out"}
          </button>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://oscvitap.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brought to you by &nbsp; <b> Open Source Community VIT AP</b>
        </a>
      </footer>
    </div>
  );
}
