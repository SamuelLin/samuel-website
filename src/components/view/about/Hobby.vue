<template>
  <section>
    <h3 class="sub-title">
      Hobby
    </h3>
    <div>
      <div class="habit">
        <img src="@/assets/images/bicycle.svg">
        <p>Bike</p>
      </div>
      <div class="habit">
        <img src="@/assets/images/movie-theater.svg">
        <p>Movies</p>
      </div>
      <div class="habit">
        <img src="@/assets/images/gamepad.svg">
        <p>Games</p>
      </div>
      <div class="habit">
        <img src="@/assets/images/coffee.svg">
        <p>Tea</p>
      </div>
      <div class="habit">
        <img src="@/assets/images/basketball-game.svg">
        <p>Basketball</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.habit {
  float: left;
  width: 20%;

  &:hover img {
    fill: var(--color-theme-default);
  }

  img {
    width: 50px;
  }

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
