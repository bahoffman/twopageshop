import React from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"

const TabView = () => (
  <Tabs>
    <TabList>
      <Tab>About</Tab>
      <Tab>Use</Tab>
    </TabList>

    <TabPanel>
      <ul>
        <li>
          <b>NUMBER 1 EXFOLIATOR IN JAPAN:</b> Cure Natural Aqua Gel is the #1
          exfoliator in Japan, selling 1 bottle every 12 seconds. Cure's status
          as a cult hit and Japanese beauty product legend stems from the simple
          fact that Cure does what it promises: exfoliates gently and
          effectively, without any harsh chemicals.{" "}
        </li>
        <li>
          <b>ACTIVATED HYDROGEN WATER FORMULA:</b> General chemical peeling use
          strong acids (approx. pH1.3) to dissolve protein. Natural Aqua Gel
          Cure, on the other hand, gently catches waste dead skin on the surface
          of the skin and removes it with a unique activated hydrogen water
          formula.
        </li>
        <li>
          <b>GENTLE & EFFECTIVE:</b> Cure Natural Aqua Gel exfoliates your skin
          gently and effectively. There is no need to rub or scrub your skin too
          hard. Its unique and gentle formula is suitable to all skin types,
          even the most sensitive. You will be surprised that your skin is so
          much smoother!
        </li>
        <li>
          <b>TRY IT ON YOUR BODY:</b> Cure Natural Aqua Gel can also be used on
          your hands, neck, low-neck, elbows, heels, etc. A bottle shall last
          approximately four months if used for the entire body.{" "}
        </li>
        <li>
          <b>ALCOHOL-FREE & PRESERVATIVE-FREE:</b> Made in Japan, Natural Aqua
          Gel Cure is a very simple product as approximately 91% of it, is
          water. This gentle exfoliant gel is also scent-free, color-free, and
          preservative-free.
        </li>
      </ul>
    </TabPanel>

    <TabPanel>
      <ul>
        <li>Wash face thoroughly with soap and water. </li>
        <li>Dry face well.</li>
        <li>
          Pump the bottle 3 to 5 times until you have an appropriate amount of
          gel on your finger.
        </li>
        <li>
          Apply the gel to the skin on your face, neck, or other areas that are
          dry and rough.{" "}
        </li>
        <li>
          Gently massage when the gel becomes white (do not rub skin too hard).
        </li>
        <li>Rinse well after you see results. </li>
        <li>Use lotion or skin cream that you normally use. </li>
        <li>For best results, apply twice a week.</li>
      </ul>
    </TabPanel>
  </Tabs>
)

export default TabView
