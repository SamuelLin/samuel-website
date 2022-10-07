<script>
export default {
  props: ['skill'],
  methods: {
    flip(n) {
      return n <= this.skill.capability
    },
  },
}
</script>

<template>
  <div class="skill fadeObject">
    <p>{{ skill.name }}</p>
    <div class="skill-circles">
      <div v-for="n in 5" :key="`${skill.name}-${n}`" class="skill-circles-circle" :class="{ flip: flip(n) }">
        <div class="circle-shadow" />
        <div class="circle" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.skill {
  padding: 3px 0;
  width: 33%;
  float: left;
  display: flex;

  p {
    margin: 0;
    flex: 1;
    font-family: 'Oswald', sans-serif;
    font-weight: 300;
    letter-spacing: .1em;
    text-transform: uppercase;
    text-align: right;
  }
}

.skill>p,
.skill-circles,
.skill-circles-circle {
  display: inline-block;
  vertical-align: middle;
}

.skill-circles {
  margin-left: 5px;
  flex: 1;
  text-align: left;
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

