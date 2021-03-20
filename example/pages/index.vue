<template>
  <div style="display: flex; flex-direction:row;">
    <div style="flex: 1;">
      <h3>Capture with SAME ORIGIN TEXT</h3>
      <div id="plain" style="width: 300px; height: 300px; background: tomato; color: white;">
        Hello World
      </div>
      <button @click="downloadPlainText">
        PlainText
      </button>
      <h3>Capture with SAME ORIGIN IMAGE</h3>
      <div id="image" style="width: 300px; height: 300px; color: white;">
        <img src="~/assets/cat.jpeg" style="width: 100%; height: 100%;">
      </div>
      <button @click="downloadImage">
        Image
      </button>
      <h3>Capture with CORS</h3>
      <div id="external_image1" style="width: 300px; height: 300px; color: white;">
        <img src="https://i.imgur.com/YdbtYU7.jpeg" alt="" srcset="" style="width: 100%; height: 100%;">
      </div>
      <button @click="downloadExternalImage('#external_image1', true)">
        External Image
      </button>
      <h3>Capture with Proxy</h3>
      <div id="external_image2" style="width: 300px; height: 300px; color: white;">
        <img src="https://miro.medium.com/max/4800/1*mONNI1lG9VuiqovpnYqicA.jpeg" alt="" srcset="" style="width: 100%; height: 100%;">
      </div>
      <button @click="downloadExternalImage('#external_image2', false, '/_proxy')">
        External Image
      </button>
    </div>
    <div id="preview" style="flex: 1;">
      <h3>PREVIEW</h3>
    </div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'

export default {
  methods: {
    downloadPlainText () {
      window.scrollTo(0, 0)
      html2canvas(document.querySelector('#plain'))
        .then((canvas) => {
          document.querySelector('#preview').appendChild(canvas)
        })
    },
    downloadImage () {
      window.scrollTo(0, 0)
      html2canvas(document.querySelector('#image'))
        .then((canvas) => {
          document.querySelector('#preview').appendChild(canvas)
        })
    },
    downloadExternalImage (id, useCORS = false, proxy) {
      window.scrollTo(0, 0)
      html2canvas(document.querySelector(id), { useCORS, proxy })
        .then((canvas) => {
          document.querySelector('#preview').appendChild(canvas)
        })
    }
  }
}
</script>
