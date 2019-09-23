<template>
<div class="input-field">
<label class="input-field__label" :for="id">{{labelText}}</label>
<input :id="id" class="input-field__input" type="text" />

</div>
  
</template>

<script>
export default {
    name: "input-field",
    props: {
        labelText: {
            type: String,
            default: null
        }
    },
    computed: {
        id() {
            return `text-field-${this._uid}`
        }
    }

}
</script>

<style lang="scss">
.input-field {
  display: flex;
  flex-direction: column;
 &__input {
    width: 200px;
    border-radius: 10px;
    height: 31px;





  }
}

</style>