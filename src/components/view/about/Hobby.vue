<template>
  <section>
    <h3 class="sub-title">
      Hobby
    </h3>
    <div>
      <div class="habit">
        <i-mdi-bike width="50" height="50" />
        <p>Bike</p>
      </div>
      <div class="habit">
        <i-ic-sharp-movie width="50" height="50" />
        <p>Movies</p>
      </div>
      <div class="habit">
        <i-ri-steam-line width="50" height="50" />
        <p>Games</p>
      </div>
      <div class="habit">
        <i-mdi-pot-steam-outline width="50" height="50" />
        <p>Tea</p>
      </div>
      <div class="habit">
        <i-mdi-basketball width="50" height="50" />
        <p>Basketball</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.habit {
  float: left;
  width: 20%;

  p {
    margin: 0;
  }
}

@media screen and (max-width: 767px) {
  .habit {
    width: 33.3333%;
    margin-bottom: 1em;
  }
}

@media screen and (max-width: 539px) {
  .habit {
    width: 50%;
  }
}
</style>
