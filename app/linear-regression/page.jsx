import ChartLinear from "@/components/ChartLinear";

export const metadata = {
  title: "Linear Regression ? Visual Intuition (Hindi, Roman)",
};

export default function LinearRegressionPage() {
  return (
    <article>
      <h1>Linear Regression ? Depth 1 (Foundation)</h1>

      <p className="lede">
        Socho tum ek simple rule banana chahte ho jo number x se ek naya number y
        predict kare. Hum kehte hain ki y ? m?x + b. Isko straight line rule bol sakte hain.
      </p>

      <section>
        <h2>Real-life soch</h2>
        <ul>
          <li>
            <strong>Study hours ? marks:</strong> Zyada padhoge to marks amuman badhte hain.
            Roughly straight line jaisa relation ho sakta hai.
          </li>
          <li>
            <strong>Ghar ka size ? price:</strong> Size badhne par price bhi amuman badhta hai.
          </li>
        </ul>
        <p>
          Hum line ko do numbers se control karte hain: <strong>m (slope)</strong> aur
          <strong> b (intercept)</strong>. m batata hai x badhne par y kitna badhega. b batata hai
          x = 0 par y kitna hoga.
        </p>
      </section>

      <section>
        <h2>Interactive visual ? line ko khud adjust karo</h2>
        <p>
          Neeche random points diye gaye hain (jaise real data). Sliders se m aur b badal ke
          dekho line data ke sath kaise fit hoti hai. x choose karke y? = m?x + b ka prediction dekho.
        </p>
        <ChartLinear />
      </section>

      <section>
        <h2>Error ka basic idea (sirf intuition)</h2>
        <p>
          Har point ka apni line se thoda fark hota hai. Ye fark ko hum error samajhte hain.
          Simple soch: errors chhote ho to line achchi hai. Next depth me hum dekhenge ki
          in errors ko measure kaise karte hain (Mean Squared Error) aur best m, b kaise milte hain.
        </p>
      </section>

      <section>
        <h2>Formula ko simple language me</h2>
        <p>
          Rule: <strong>y? = m?x + b</strong>. Yahaan y? prediction hai, x input, m slope, b intercept.
          Tumhara goal hai aisa m, b dhundhna jisse predictions data ke kareeb ho.
        </p>
      </section>

      <section>
        <h2>Takeaways</h2>
        <ul>
          <li>Linear regression = straight line rule for prediction.</li>
          <li>Slope m: x me 1 badhne par y kitna badhe.</li>
          <li>Intercept b: x = 0 par y ki value.</li>
          <li>Good fit = points line ke kareeb.</li>
        </ul>
      </section>

      <section className="next-cta">
        <a href="/logistic-regression" className="button">Agla: Logistic Regression (classification intuition)</a>
      </section>
    </article>
  );
}
