import styles from "./About.module.css";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o Mini <span>Blog</span>
      </h2>
      <p>
        Este projeto consiste em um blog feito com React no front-end e Firebase
        no back-end por mim para estudos e práticas para adquirir conhecimentos!.
      </p>

      <a target="_blank" href="https://github.com/RafaelAlves67"><strong>GitHub: </strong>https://github.com/RafaelAlves67</a>
      <Link to="/posts/create" className="btn">
        Criar post
      </Link>
    </div>
  );
};

export default About;
