<template>
  <div class="title">
    <h1>
      <span>SAMUEL</span> LIN
    </h1>
    <p>WEB / REACT-NATIVE DEVELOPER</p>
    <div class="icons">
      <a href="https://www.linkedin.com/in/samuelhsnu/" target="_blank">
        <i-uil-linkedin-alt />
      </a>
      <a href="https://github.com/SamuelLin" target="_blank">
        <i-uil-github-alt />
      </a>
      <a href="mailto:samuelhsnu@gmail.com">
        <i-uil-at />
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.title {
  font-family: Lato, sans-serif;
  left: 50%;
  max-width: 410px;
  padding-bottom: 50px;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s;
  width: 90%;

  h1 {
    color: var(--color-theme-default);
    font-size: 4em;
    letter-spacing: 2px;
    margin: 0;

    span {
      animation: flip-title 1.3s 1s cubic-bezier(0.49, -0.57, 0.59, 1.52) forwards;
      background-color: var(--color-theme-default);
      color: #fff;
      display: inline-block;
      padding: 0 5px;
    }
  }

  p {
    letter-spacing: 5px;
  }
}

.icons > a {
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
