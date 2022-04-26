<template>
  <div class="title">
    <h1>
      <span>SAMUEL</span> LIN
    </h1>
    <p>FRONT END DEVELOPER</p>
    <div class="icons">
      <a href="https://www.facebook.com/samuelhsnu" target="_blank">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="https://www.linkedin.com/in/samuelhsnu/" target="_blank">
        <i class="fab fa-linkedin-in"></i>
      </a>
      <a href="https://github.com/SamuelLin" target="_blank">
        <i class="fab fa-github"></i>
      </a>
      <a href="mailto:samuelhsnu@gmail.com">
        <i class="fas fa-at"></i>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 90%;
  max-width: 410px;
  font-family: "Lato", sans-serif;
  -webkit-transition: opacity 0.3s;
  -moz-transition: opacity 0.3s;
  transition: opacity 0.3s;
  padding-bottom: 50px;

  h1 {
    font-size: 4em;
    color: var(--color-theme-default);
    margin: 0;
    letter-spacing: 2px;

    span {
      display: inline-block;
      background-color: var(--color-theme-default);
      color: white;
      padding: 0 5px;
      animation: flipTitle 1.3s 1s cubic-bezier(0.49, -0.57, 0.59, 1.52) forwards;
    }
  }

  p {
    letter-spacing: 5px;
  }
}

.icons>a {
  margin: 0 1em;
}

@media screen and (max-width: 767px) {
  .title {
    top: 60%;
  }

  .title h1 {
    font-size: 3em;
  }
}
</style>