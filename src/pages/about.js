import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Deeptest">
      <p>
        Main objectives of deeptest is to,
        <ul>
          <li>
            overcome the privacy related limitations for medical data by
            producing open access deep synthetic data.
          </li>
          <li>
            reduce the time-consuming and resource-consuming process of medical
            data labeling and annotation.{" "}
          </li>
          <li>
            find inter-correlations of human body organs (how one organ affect
            to other organs) and functions and reproduce them to produce a new
            model for the human body.
          </li>
        </ul>
        Additionaly, deeptest works as:
        <ul>
          <li>a repository for deep generative models used in medicine. </li>
          <li>
            a data compression mechanism to keep big medical data sets in a
            small storage without any privacy concerns and space to save large
            amounts of the data
          </li>
        </ul>
      </p>
    </Layout>
  );
};

export const Head = () => <Seo title="About" />;

export default AboutPage;
