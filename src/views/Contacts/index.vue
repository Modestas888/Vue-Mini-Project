<template>
  <div class="contacts">
    <h1>Kontaktai</h1>
    <AppInput labelText="Name" />
    <AppText labelText="Message" />
    <button class="buttonas">Send</button>
  </div>
</template>

<script>
import AppInput from "@/components/AppInput";
import AppText from "@/components/AppText";
import AppButton from "@/components/AppButton";
export default {
  name: "ContactsView",
  components: {
    AppInput,
    AppText,
    AppButton
  }
};
</script>

<style>
.buttonas {
  background-color: #3252e5;
  padding: 10px 40px;
  border-radius: 5px;
  margin-top: 50px;
  cursor: pointer;
  border: unset;
  color: #fff;
}
.contacts {
  padding: 50px;
}

</style>
