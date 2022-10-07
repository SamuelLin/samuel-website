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
  font-family: Lato, sans-serif;
  font-size: 1.5em;
  left: 20px;
  padding: 0 5px;
  position: absolute;
  text-decoration: none;
  top: -10px;
  transform: translate(-10px, -10px);
  transition: opacity 0.3s;

  img {
    width: 90px;
  }
}

nav {
  ul {
    box-sizing: border-box;
    font-family: Hind, sans-serif;
    font-size: 12px;
    letter-spacing: 2px;
    list-style: none;
    margin: 2.5em auto 0;
    padding-right: 2em;
    position: relative;
    text-align: right;
    width: 100%;

    li {
      display: inline-block;
      padding: 5px 10px;
      vertical-align: middle;

      a {
        position: relative;
        text-decoration: none;
      }
    }
  }
}

.no-touchevents nav > ul li a:hover,
.touchevents nav > ul li a:active {
  color: var(--color-text-active);
}

.no-touchevents nav > ul li a:hover::after,
.no-touchevents nav > ul li .active::after,
.touchevents nav > ul li .active::after {
  border: 5px solid var(--color-theme-default);
  border-left-color: transparent;
  border-top-color: transparent;
  content: "";
  display: block;
  height: 0;
  position: absolute;
  right: -0.5em;
  top: 0.5em;
  width: 0;
}
</style>
