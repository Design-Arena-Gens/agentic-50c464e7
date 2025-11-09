export default function HomePage() {
  return (
    <section>
      <h1>Machine Learning Notes (Hindi in English Script)</h1>
      <p className="lede">
        Ye course bilkul shuru se, visual tariqe se Machine Learning samjhata hai. Maths
        me kam comfort ho to bhi koi problem nahi. Hum real-life intuition aur
        visuals se concepts clear karenge.
      </p>
      <ol className="module-list">
        <li>
          <a href="/linear-regression">
            Module 1: Linear Regression ? Straight Line se Prediction
          </a>
          <p>Sabse pehle regression ka basic idea, visual intuition, aur interactive examples.</p>
        </li>
        <li>
          <a href="/logistic-regression">
            Module 2: Logistic Regression ? Yes/No Predictions
          </a>
          <p>Classification ke liye sigmoid intuition aur decision boundaries.</p>
        </li>
      </ol>
    </section>
  );
}
