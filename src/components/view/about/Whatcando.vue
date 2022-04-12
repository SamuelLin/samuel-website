<template>
  <section>
    <h3 class="sub-title fadeObject">what i can do</h3>
    <div class="cando fadeObject">
      <div class="cando-list">
        <img src="@/assets/images/html-coding.svg" />
        <h4>coding</h4>
        <p>Build customized cross-browser, cross-platform web sites and web applications with a wide array of the latest
          front end technologies.</p>
      </div>
      <div class="cando-list">
        <img src="@/assets/images/tablet-smartphone-computer-checked.svg" />
        <h4>responsive</h4>
        <p>Responsive web design in this moden world. Make products and services well fitting on all devices.</p>
      </div>
      <div class="cando-list">
        <img src="@/assets/images/work-team.svg" />
        <h4>team work</h4>
        <p>Implement the division of labor and make projects done faster. Study and discuss new technologies with
          teammates.</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cando-list {
  float: left;
  width: 33.3333%;
  text-align: center;

  img {
    width: 50px;
  }

  h4 {
    font-family: 'Oswald', sans-serif;
    font-weight: 300;
    letter-spacing: .1em;
    text-transform: uppercase;
    margin: 0;
  }

  p {
    padding: 0 12px;
  }
}

.cando {
  &:after {
    content: '';
    display: block;
    clear: both;
  }
}
</style>
