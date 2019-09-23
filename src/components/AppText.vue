<template>
<div class="text-area">
<label class="tetx-area__label" :for="id">{{ labelText}}</label>
<textarea :id="id" class="text-area__input" cols="25" rows="10"></textarea>

</div>
  
</template>

<script>
export default {
    name: "AppText",
    props: {
        labelText: {
            type: String,
            default:null
        }
    },
    computed: {
        id() {
            return 'text-area-$(this._uid)';
        }
    }

}
</script>

<style lang='scss'>
.text-area {
 border-radius: 15px;
  display: flex;
  flex-direction: column;
  &__input {
    width: 1000px;
  }
}
</style>