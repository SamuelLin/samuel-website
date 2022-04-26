<template>
  <div class="skill fadeObject">
    <p>{{ skill.name }}</p>
    <div class="skill-circles">
      <div class="skill-circles-circle" v-for="n in 5" :class="{ flip: flip(n) }" :key="`${skill.name}-${n}`">
        <div class="circle-shadow"></div>
        <div class="circle"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['skill'],
  methods: {
    flip(n) {
      return n <= this.skill.capability
    }
  }
}
</script>

<style lang="scss" scoped>
.skill {
  padding: 12px;
  padding-top: 0;
  width: 29%;
  float: left;

  p {
    margin: 0;
    width: 82px;
    font-family: 'Oswald', sans-serif;
    font-weight: 300;
    letter-spacing: .1em;
    text-transform: uppercase;
  }
}

.skill>p,
.skill-circles,
.skill-circles-circle {
  display: inline-block;
  vertical-align: middle;
}

.skill-circles {
  width: 100px;
  margin-left: 5px;
}

.skill-circles-circle {
  position: relative;
  margin-left: 5px;
  width: 12px;
  height: 12px;
  transform-style: 3d;
  perspective: 500px;
}

.circle,
.circle-shadow {
  width: 12px;
  height: 12px;
  background-color: #404040;
  border-radius: 50%;
}

.circle {
  transform: translateY(-12px);
}

.flipAction .flip:nth-child(1) .circle {
  animation: flip 1s 1s linear forwards;
}

.flipAction .flip:nth-child(2) .circle {
  animation: flip 1s 1.2s linear forwards;
}

.flipAction .flip:nth-child(3) .circle {
  animation: flip 1s 1.4s linear forwards;
}

.flipAction .flip:nth-child(4) .circle {
  animation: flip 1s 1.6s linear forwards;
}

.flipAction .flip:nth-child(5) .circle {
  animation: flip 1s 1.8s linear forwards;
}

.flipAction .flip:nth-child(1) .circle-shadow {
  animation: skew 1s 1s linear forwards;
}

.flipAction .flip:nth-child(2) .circle-shadow {
  animation: skew 1s 1.2s linear forwards;
}

.flipAction .flip:nth-child(3) .circle-shadow {
  animation: skew 1s 1.4s linear forwards;
}

.flipAction .flip:nth-child(4) .circle-shadow {
  animation: skew 1s 1.6s linear forwards;
}

.flipAction .flip:nth-child(5) .circle-shadow {
  animation: skew 1s 1.8s linear forwards;
}

@media screen and (max-width: 780px) {
  .skill {
    width: 45%;
  }
}

@media screen and (max-width: 539px) {
  .skill {
    width: 100%;
  }
}
</style>

