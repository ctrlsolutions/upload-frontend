<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <h2 class="title">One Last Thing...</h2>
      <div class="info">
        <p><strong>Email:</strong> {{ formData.email }}</p>
        <p><strong>First Name:</strong> {{ formData.firstName }}</p>
        <p><strong>Middle Name:</strong> {{ formData.middleName }}</p>
        <p><strong>Last Name:</strong> {{ formData.lastName }}</p>
        <p><strong>Sex:</strong> {{ formData.sex }}</p>
        <p><strong>Date of Birth:</strong> {{ formData.dob }}</p>
      </div>

      <div class="modal-buttons">
        <FormButton variant="black" width="20rem" @click="$emit('close')">No, I need to change something.</FormButton>
        <FormButton variant="red" width="20rem" @click="confirm">Yes, these are all correct.</FormButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import FormButton from "@/components/Global/BaseFormButton.vue";

const props = defineProps({
  formData: Object,
});

const confirm = () => {
  console.log("User confirmed details:", props.formData);
  alert("Information confirmed!");
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  font-family: 'Inter', sans-serif;
  width: 50%;
  height: 60%;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
}

.modal-buttons {
  display: flex;
  margin-top: 1rem;
  justify-self: center;
  gap: 3.5rem;
}

.title {
  text-align: start;
  color: black;
}
</style>
