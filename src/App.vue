<script setup lang="ts">
import Todos from './components/Todos.vue'
import { Authenticator } from "@aws-amplify/ui-vue";
  import "@aws-amplify/ui-vue/styles.css";

  import { Amplify } from 'aws-amplify';
  import outputs from '../amplify_outputs.json';

  Amplify.configure(outputs);
</script>

<template>
  <authenticator>
    <main>
      <Todos/>
    </main>
  </authenticator>
</template>

