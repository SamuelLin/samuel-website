<script setup>
import { isDark } from '@/utils'
import DarkToggleButton from '@/components/layout/DarkToggleButton.vue'
</script>

<template>
  <div id="layout">
    <nav class="menu">
      <ul>
        <router-link id="back" to="/" active-class="active">
          <img v-if="isDark" src="@/assets/samuel-logo-dark.svg" alt="logo">
          <img v-else src="@/assets/samuel-logo.svg" alt="logo">
        </router-link>
        <li>
          <DarkToggleButton />
        </li>
        <li>
          <router-link to="/about" active-class="active" exact>
            ABOUT
          </router-link>
        </li>
        <li>
          <router-link to="/work" active-class="active" exact>
            WORK
          </router-link>
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
  font-family: "Lato", sans-serif;
  -webkit-transition: opacity 0.3s;
  -moz-transition: opacity 0.3s;
  transition: opacity 0.3s;
  position: absolute;
  left: 20px;
  top: -10px;
  padding: 0 5px;
  font-size: 1.5em;
  text-decoration: none;

  img {
    width: 90px;
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
      vertical-align: middle;

      a {
        text-decoration: none;
        position: relative;
      }
    }
  }
}

.no-touchevents nav>ul li a:hover,
.touchevents nav>ul li a:active {
  color: var(--color-text-active);
}

.no-touchevents nav>ul li a:hover:after,
.no-touchevents nav>ul li a.active:after,
.touchevents nav>ul li a.active:after {
  content: "";
  display: block;
  border: 5px solid var(--color-theme-default);
  border-top-color: transparent;
  border-left-color: transparent;
  width: 0;
  height: 0;
  position: absolute;
  right: -0.5em;
  top: 0.5em;
}
</style>
