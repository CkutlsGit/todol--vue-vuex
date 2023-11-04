<template>
  <div class="modal">
    <input type="text" v-model="title">
    <input type="text" v-model="description">
    <button type="button" @click="clickedSendButton" :disabled="!offOrOnButton()">Send</button>
  </div>
  <div class="modal__text">
    <h1>TITLE: {{ title }}</h1>
    <h1>DESCRIPTION: {{ description }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  data() {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    clickedSendButton() {
      this.$emit('send', [this.title, this.description])
    },
    offOrOnButton() {
      return this.title !== '' && this.description !== ''
    }
  }
}
</script>

<style>

</style>