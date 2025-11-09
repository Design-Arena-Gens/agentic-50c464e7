import ChartSigmoid from "@/components/ChartSigmoid";

export const metadata = {
  title: "Logistic Regression ? Visual Intuition (Hindi, Roman)",
};

export default function LogisticRegressionPage() {
  return (
    <article>
      <h1>Logistic Regression ? Depth 1 (Foundation)</h1>

      <p className="lede">
        Jab output yes/no (1/0) type ho ? jaise email spam hai ya nahi ? to hum
        logistic regression ka use karte hain. Ye straight line nahi, balki ek smooth
        S-shape (sigmoid) curve use karta hai jo probability deta hai.
      </p>

      <section>
        <h2>Real-life soch</h2>
        <ul>
          <li><strong>Admission:</strong> Score badhe to admission ki chance badhta hai.</li>
          <li><strong>Loan default:</strong> Risk score badhe to default ki probability badhti hai.</li>
        </ul>
        <p>
          Formula intuition: <strong>P(y=1|x) = ?(w?x + b)</strong>, jahan ? ek squishy function hai
          jo kisi bhi number ko 0..1 ke beech me convert kar deta hai.
        </p>
      </section>

      <section>
        <h2>Interactive visual ? sigmoid ko mehsoos karo</h2>
        <p>w (weight) aur b (bias) badal ke dekho curve left/right shift aur steepness kaise badalti hai.</p>
        <ChartSigmoid />
      </section>

      <section>
        <h2>Decision boundary (high level)</h2>
        <p>
          Jab probability 0.5 se upar ho to hum y=1 decide kar sakte hain, warna y=0.
          Is 0.5 cut ko threshold kehte hain. Aage chal kar hum alag thresholds aur metrics dekhenge.
        </p>
      </section>

      <section className="next-cta">
        <a href="/" className="button">Back to Home</a>
      </section>
    </article>
  );
}
