import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"

const FAQPage = () => (
  <Layout>
    <SEO title="FAQs" />
    <Tabs>
      <TabList>
        <Tab>PRODUCT</Tab>
        <Tab>PAYMENT & SHIPPING</Tab>
      </TabList>
      <TabPanel>
        <h4>WHAT IS NATURAL AQUA GEL CURE?</h4>
        <p>Natural Aqua Gel Cure is a remarkable skin care product. </p>
        <p>
          Cure is a fragrance-free, color free and preservative free product
          made from activated hydrogen water that prevents oxidation.
        </p>
        <h3>HOW OFTEN SHOULD I USE IT?</h3>
        <p>We suggest to use Cure 2 or 3 times a week on your face.</p>
        <h3>WHAT ARE SOME TIPS FOR USING CURE?</h3>
        <p>
          Make sure your skin is not wet when applying Cure. Also when applying,
          try not to put too much pressure on your fingertips.
        </p>
        <h3>CAN I USE NATURAL AQUA GEL CURE ON MY BODY TOO?</h3>
        <p>
          Yes!! It is very gentle for all the parts of your body!! Enjoy making
          your entire body nice and soft!!!
        </p>
        <h3>IS THERE SUCH THING AS TOO MUCH EXFOLIATION?</h3>
        <p>
          No. Excessive, vigorous rubbing when washing your face with soap or
          during body scrub treatment can be bad for your skin. Avoiding that is
          enough to ensure the safety of your skin as Cure does not contain
          properties that melt proteins.
        </p>
        <h3>I CAN’T SEE CURE’S EXFOLIATION WORKING.</h3>
        <p>
          Make sure you aren’t storing Cure in a cold environment as Cure does
          not react well to cold environments. It also does not work as well
          when your hand and face are cold. Also make sure your hand and face
          are free of lotion, moisture, and oil. It should be used on clean dry
          skin.
        </p>
      </TabPanel>
      <TabPanel>
        <h3>WHO SHOULD I CONTACT IF I HAVE ANY QUESTIONS? </h3>
        <p>
          You can contact us at info@cureaquagel.com or call us at
          (424-355-5041){" "}
        </p>
        <h3>DO YOU SHIP INTERNATIONALLY? </h3>
        <p>Yes, but only to Mexico and Canada. </p>
        <h3>HOW CAN I RETURN PRODUCT? </h3>
        <p>
          You may return new, unopened items within 30 days of delivery for a
          full refund.
        </p>
      </TabPanel>
    </Tabs>
  </Layout>
)

export default FAQPage
