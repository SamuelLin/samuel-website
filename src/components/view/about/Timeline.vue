<template>
  <section>
    <h3 class="sub-title">Experience</h3>
    <ul class="timeline">
      <li>
        <p class="timeline-title">Paradise Soft</p>
        <p>2018. 11 - now</p>
        <p>FORNT END ENGINEER</p>
        <article>Company business website, content management system website page establishment with vue.js, vue-router,
          vuex, and websocket. Create cross-platform apps with react native.</article>
      </li>
      <li>
        <p class="timeline-title">South East Travel Service Co., Ltd.</p>
        <p>2017. 06 - 2018. 07</p>
        <p>FORNT END ENGINEER</p>
        <article>Official website revision. Use react and redux, graphql and server side rendering for seo, storybook
          for component building, nightwatch for testing. Progress on product line by line. Check tapi format and
          integrate development page.</article>
      </li>
      <li>
        <p class="timeline-title">WHATSMEDIA</p>
        <p>2016. 03 - 2017 .04</p>
        <p>FORNT END ENGINEER</p>
        <article>Advertising company, use .Net MVC, responsible for the front-end web production, and use Razor with
          back-end in series, some cases also began to import Vue.js.</article>
      </li>
      <li>
        <p class="timeline-title">ISMS</p>
        <p>2014. 10 - 2016 .02</p>
        <p>FORNT END ENGINEER</p>
        <article>Dental system software company, Appluco network platform, FLBK platform, responsible for web front-end,
          serial API, json, also involved in the use of phonegap web production.</article>
      </li>
      <li>
        <p class="timeline-title">Institute Information Industry</p>
        <p>2014. 4 - 2014 .08</p>
        <p>STUDENT</p>
        <article>Learn about web technologies here including HTML, JavaScript, CSS, and PhotoShop, Illustrator, Flash,
          AE, etc. For a period of four months.</article>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.timeline-title {
  font-family: 'Oswald', sans-serif;
  font-weight: 300;
  letter-spacing: .1em;
  text-transform: uppercase;
}

.timeline {
  list-style: none;
  border-left: 1px solid var(--color-theme-default);
  padding-left: 22px;
  width: 80%;
  margin: 0 auto;

  &>li {
    position: relative;
    margin-bottom: 2em;
    text-align: justify;

    &:before {
      content: '';
      display: block;
      width: 0;
      height: 0;
      border: 10px solid var(--color-theme-default);
      border-top-color: transparent;
      border-right-color: transparent;
      border-bottom-color: transparent;
      position: absolute;
      left: -22px;
      top: 0;
    }
  }

  p {
    margin: 0;
    line-height: 1.2em;
    font-size: 12px;
  }

  p.timeline-title {
    font-weight: 200;
    margin: 0;
    margin-bottom: 5px;
    font-size: 1.1em;
  }

  article {
    margin-top: 1em;
  }
}

@media screen and (max-width: 767px) {

  .timeline article,
  .timeline p.timeline-title {
    text-align: left;
  }
}
</style>