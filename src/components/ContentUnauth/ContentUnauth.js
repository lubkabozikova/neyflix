import styles from "./ContentUnauth.module.css";

function Content() {
  return (
    <div className={styles.content}>
      <h1>Unlimited movies, TV shows, and more.</h1>
      <h2>Watch anywhere. Cancel anytime.</h2>
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <form>
        <div>
          <input />
          <button>Get Started &rsaquo;</button>
        </div>
      </form>
    </div>
  );
}

export default Content;
