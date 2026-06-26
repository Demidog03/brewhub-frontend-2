
<script setup lang="ts">
import AuthFormLayout from '@/core/layouts/AuthFormLayout.vue';
import { loginSchema } from '@/modules/auth/validation/auth.validation';
import { toTypedSchema } from '@vee-validate/yup';
import { Button, InputText, Message, Password } from 'primevue';
import { useForm } from 'vee-validate';
import { watch } from 'vue';

const { defineField, handleSubmit, errors } = useForm({
  validationSchema: toTypedSchema(loginSchema),
  initialValues: {
        email: "",
        password: ""
      },
})

const [email, emailProps] = defineField('email')
const [password, passwordProps] = defineField('password')

const onSubmit = handleSubmit(values => {
  console.log(values);
});

watch(errors, () => {
  console.log(errors.value)
})

</script>

<template>
  <AuthFormLayout>
    <template #title>Login</template>
    <template #subtitle>Do not have an account, create a new one.</template>
    <template #form>
      <form class="login-form" novalidate @submit.prevent="onSubmit">
        <div class="login-form-container">
            <div>
              <label class="form-label" for="login-email">Email</label>
              <InputText
                v-model="email"
                v-bind="emailProps"
                :invalid="Boolean(errors.email)"
                class="form-input"
                id="login-email"
                autocomplete="email"
                placeholder="dmitriy@example.com"
                fluid 
              />
              <Message v-if="Boolean(errors.email)" severity="error" variant="simple" size="small">{{ errors.email }}</Message>
            </div>

            <div>
              <label class="form-label" for="login-password">Password</label>
              <Password
                v-model="password"
                v-bind="passwordProps"
                :invalid="Boolean(errors.password)"
                class="form-input"
                aria-labelledby="login-password"
                inputId="login-password"
                autocomplete="new-password"
                placeholder="At least 8 characters"
                :feedback="false"
                toggle-mask
                fluid
              />
              <Message v-if="Boolean(errors.password)" severity="error" variant="simple" size="small">{{ errors.password }}</Message>
            </div>
        </div>

        <Button class="submit-button" size="large" type="submit" label="Login" severity="contrast" rounded fluid />
      </form>
    </template>
  </AuthFormLayout>
</template>

<style scoped>
.login-form-container {
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 10px;
  row-gap: 20px;
}

.form-label {
  display: inline-block;
  margin-bottom: 10px;
}

.submit-button {
  margin-top: 40px;
}
</style>
