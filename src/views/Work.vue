<template>
  <div class="container">
    <h2 class="title-page fadeObject">WORK</h2>
    <div class="works fadeObject">
      <div class="work">
        <h3>
          <a href="https://www.settour.com.tw" target="_blank">Settour Official Website</a>
        </h3>
        <a href="https://ticket.settour.com.tw/" target="_blank">ticket</a>&nbsp;
        <a href="https://flight.settour.com.tw/" target="_blank">flight</a>&nbsp;
        <a href="https://tour.settour.com.tw/" target="_blank">tour</a>&nbsp;
        <a href="https://fit.settour.com.tw/" target="_blank">fit</a>&nbsp;
        <a href="https://fit.settour.com.tw/tour/search" target="_blank">tourFit</a>&nbsp;
        <a href="https://visa.settour.com.tw/" target="_blank">visa</a>
        <p>Building this official websites with react, redux and graphql.</p>
      </div>
      <div class="work">
        <h3>
          <a href="http://www.ssangyong.tw/" target="_blank">Ssangyong</a>
        </h3>
        <p>I like this site about the application with Google map.</p>
      </div>
      <div class="work">
        <h3>
          <a href="http://www.hrcm.ntpc.gov.tw/" target="_blank">High Riverbank</a>
        </h3>
        <p>Web site for government agencies with accessibility pages.</p>
      </div>
      <div class="work">
        <h3>
          <a href="http://week50k.herokuapp.com/" target="_blank">Week50k</a>
        </h3>
        <p>Side project to record ride path in week unit</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.no-touchevents .work h3 a:hover,
.touchevents .work h3 a:active {
  color: black;
}

.no-touchevents .work h3 a:hover:before,
.touchevents .work h3 a:active:before {
  content: '';
  display: block;
  width: 0;
  height: 0;
  border: 10px solid #ffdd00;
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  position: absolute;
  left: -22px;
  top: 0;
}

.no-touchevents .work h3 a:hover:before,
.touchevents .work h3 a:active:before {
  top: .2em;
}

.work {
  padding: 0 2em;

  h3 {
    font-family: 'Hind', sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 0;

    a {
      text-decoration: underline;
      position: relative;
    }
  }

  p {
    margin-top: 0;
  }
}
</style>
