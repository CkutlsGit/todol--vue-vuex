<template>
  <div class="modal">
    <div class="modal__content">
      <input type="text" v-model="title" placeholder="Title mission" maxlength="46">
      <input type="text" v-model="description" placeholder="Description mission" maxlength="60">
      <button type="button" @click="clickedSendButton" :disabled="!offOrOnButton()">Send</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  emits: ['send'],
  data() {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    clickedSendButton() {
      const mission = { title: this.title, description: this.description }
      this.$store.commit('UPD_LIST', mission)

      this.$emit('send')
    },
    offOrOnButton() {
      return this.title !== '' && this.description !== ''
    }
  }
}
</script>

<style scoped>
.modal {
  width: 500px;
  height: 300px;
  background: #fff;
  border-radius: 20px;
  margin: 0 auto;
}
.modal__content  {
  padding-top: 90px;
  display: grid;
  align-items: center;
  text-align: center;
  justify-content: center;
}
.modal__content input {
  width: 400px;
  height: 45px;
  margin-bottom: 5px;
  font-size: 24px;
}
.modal__content button {
  margin-top: 30px;
  font-size: 23px;
  background: #ccb558;
  color: #fff;
  font-weight: 700;
  padding: 5px 5px;
  cursor: pointer;
  transition: .4s;
}
.modal__content button:disabled {
  cursor: not-allowed;
  opacity: .6;
}
</style>