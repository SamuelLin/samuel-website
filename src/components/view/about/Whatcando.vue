<template>
  <section>
    <h3 class="sub-title">
      what i can do
    </h3>
    <div class="cando">
      <div class="cando-list">
        <i-uil-code-branch width="50" height="50" />
        <h4>coding</h4>
        <p>
          Build customized cross-browser, cross-platform web sites and web applications with a wide array of the latest
          front end technologies.
        </p>
      </div>
      <div class="cando-list">
        <i-ic-sharp-devices width="50" height="50" />
        <h4>responsive</h4>
        <p>Responsive web design in this moden world. Make products and services well fitting on all devices.</p>
      </div>
      <div class="cando-list">
        <i-uil-users-alt width="50" height="50" />
        <h4>team work</h4>
        <p>
          Implement the division of labor and make projects done faster. Study and discuss new technologies with
          teammates.
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cando-list {
  float: left;
  text-align: center;
  width: 33.3333%;

  img {
    width: 50px;
  }

  h4 {
    font-family: Oswald, sans-serif;
    font-weight: 300;
    letter-spacing: 0.1em;
    margin: 0;
    text-transform: uppercase;
  }

  p {
    padding: 0 12px;
  }
}

.cando {
  &::after {
    clear: both;
    content: "";
    display: block;
  }
}

@media screen and (max-width: 767px) {
  .cando-list {
    width: 100%;
  }
}
</style>
