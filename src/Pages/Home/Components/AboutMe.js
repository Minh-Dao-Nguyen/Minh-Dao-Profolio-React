//import RevealBottomUp from "../../../Animations/RevealBottomUp.tsx";
import RevealSliding from "../../../Animations/RevealSliding.tsx";
import "../../../styles/PhoneScreen.css";

const styles = {
  container: {
    textAlign: "left",
    width: "700px",
    height: "350px",
    marginRight: "30px",
    marginBottom: "100px",
    borderRadius: "20px",
    padding: "30px",
    backgroundColor: "#222222",
    boxShadow: "50px rgba(0,0,0,0.75)",
  },
  text: {
    color: "white",
    fontSize: "20px",
    lineHeight: "30px",
  },
};

function AboutMe() {
  return (
    <RevealSliding>
      <div
        style={styles.container}
        className="main_container small_padding container_seperator smaller_txt_1"
      >
        <p style={styles.text}>
          I am a junior studying Computer Science student at Texas A&M
          University with a minor in Statistic and Cybersecurity.
        </p>
        <p style={styles.text}>
          I have worked with Web Application on a large scale through my
          internship, and I have been working as a Data analytics in the Higher
          Education industry for the past year.
        </p>
        <p style={styles.text}>
          I am looking forward to expand my knowledge and expereince in
          different fields of Computer Science.
        </p>
      </div>
    </RevealSliding>
  );
}

/*
function AboutMe() {
    return (
        <div style={styles.container}>
            <p style={styles.text}>
                Texas A&M Computer Science with minor in Statistic and Cybersecurity
            </p>
            <p style={styles.text}>
                Experience:
            </p>
            <p style={styles.text}>
                Full Stack Web Development, Data Engineer and Analytics, Machine Learning
            </p>
        </div>
    );
}
*/
export default AboutMe;
