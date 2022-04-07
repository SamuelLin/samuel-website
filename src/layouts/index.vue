<template>
  <div id="layout">
    <nav class="menu">
      <ul>
        <router-link to="/" exact-active-class="active" id="back">
          <img src="@/assets/images/logo.png" alt="logo" />
        </router-link>
        <li>
          <router-link to="/about" exact-active-class="active" exact>ABOUT</router-link>
        </li>
        <li>
          <router-link to="/work" exact-active-class="active" exact>WORK</router-link>
        </li>
      </ul>
    </nav>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss" scoped>
#layout {
  padding-bottom: 4em;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

#back {
  position: absolute;
  left: 20px;
  top: -10px;
  color: white;
  padding: 0 5px;
  font-size: 1.5em;
  text-decoration: none;

  img {
    width: 40px;
  }
}

nav {
  ul {
    font-family: "Hind", sans-serif;
    list-style: none;
    text-align: right;
    margin: 2.5em auto 0;
    padding-right: 2em;
    font-size: 12px;
    letter-spacing: 2px;
    position: relative;
    width: 100%;
    box-sizing: border-box;

    li {
      display: inline-block;
      padding: 5px 10px;

      a {
        text-decoration: none;
        position: relative;
      }
    }
  }
}
</style>
