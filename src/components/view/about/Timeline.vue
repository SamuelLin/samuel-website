<template>
  <section>
    <h3 class="sub-title">
      Experience
    </h3>
    <ul class="timeline">
      <li>
        <p class="timeline-title">
          Nogle
        </p>
        <p>2022. 08 - now</p>
        <p>FORNTEND DEVELOPER</p>
        <article />
      </li>
      <li>
        <p class="timeline-title">
          Paradise Soft
        </p>
        <p>2018. 11 - 2022. 06</p>
        <p>SR. FORNTEND ENGINEER</p>
        <article>
          web (vue)
          <ul>
            <li>
              Refactoring Experience
              <ul>
                <li>Refactor portal website pages and the lottery system with vue ecosystem</li>
                <li>Eslint / Prettier coding style</li>
              </ul>
            </li>
            <li>
              New brand platform and background system
              <ul>
                <li>Systematize the components</li>
                <li>Internal shared resources with private npm packages</li>
                <li>Grpc experience</li>
                <li>Vite, pinia, vue 3</li>
              </ul>
            </li>
          </ul>
          app (react-native)
          <ul>
            <li>Redux, recoil, react context state management</li>
            <li>Transplanting and constructing the lottery project</li>
            <li>Maintain and refactor app production, gitlab hook for deployment</li>
            <li>Multilingual app with react-i18next</li>
            <li>Sport lottery project rendering performance optimization</li>
            <li>Chatroom project message update performance optimization</li>
            <li>React native gifted chat component customization</li>
          </ul>
        </article>
      </li>
      <li>
        <p class="timeline-title">
          South East Travel Service Co., Ltd.
        </p>
        <p>2017. 06 - 2018. 07</p>
        <p>FORNTEND ENGINEER</p>
        <article>
          <ul>
            <li>Website rebuild</li>
            <li>Build web pages with react, redux, and storybook for ui components</li>
            <li>Unit test with jest</li>
            <li>Cross-departmental UI/UX collaboration to improve user experience</li>
          </ul>
        </article>
      </li>
      <li>
        <p class="timeline-title">
          WHATSMEDIA
        </p>
        <p>2016. 03 - 2017 .04</p>
        <p>FORNTEND ENGINEER</p>
        <article>
          <ul>
            <li>PSD to HTML layout</li>
            <li>Event Marketing Website</li>
            <li>Css animation and js animation</li>
            <li>Maintain department store websites</li>
            <li>Creating accessible web pages for government agencies</li>
          </ul>
        </article>
      </li>
      <li>
        <p class="timeline-title">
          ISMS
        </p>
        <p>2014. 10 - 2016 .02</p>
        <p>FORNTEND ENGINEER</p>
        <article>
          Dental system software company, Appluco network platform, FLBK platform, responsible for web front-end,
          serial API, json, also involved in the use of phonegap web production.
        </article>
      </li>
      <li>
        <p class="timeline-title">
          Institute Information Industry
        </p>
        <p>2014. 4 - 2014 .08</p>
        <p>STUDENT</p>
        <article>
          Learn about web technologies here including HTML, JavaScript, CSS, and PhotoShop, Illustrator, Flash,
          AE, etc. For a period of four months.
        </article>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.timeline-title {
  font-family: Oswald, sans-serif;
  font-weight: 300;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.timeline {
  border-left: 1px solid var(--color-theme-default);
  list-style: none;
  margin: 0 auto;
  padding-left: 22px;
  width: 80%;

  > li {
    margin-bottom: 2em;
    position: relative;
    text-align: justify;

    &::before {
      border: 10px solid var(--color-theme-default);
      border-bottom-color: transparent;
      border-right-color: transparent;
      border-top-color: transparent;
      content: "";
      display: block;
      height: 0;
      left: -22px;
      position: absolute;
      top: 0;
      width: 0;
    }
  }

  p {
    font-size: 12px;
    line-height: 1.2em;
    margin: 0;
  }

  .timeline-title {
    font-size: 1.1em;
    font-weight: 200;
    margin: 0;
    margin-bottom: 5px;
  }

  article {
    margin-top: 1em;
  }
}

@media screen and (max-width: 767px) {
  .timeline article,
  .timeline .timeline-title {
    text-align: left;
  }
}
</style>
