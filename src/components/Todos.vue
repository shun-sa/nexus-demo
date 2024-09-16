<script setup lang="ts">
import '@/assets/main.css';
import { onMounted, ref } from 'vue';
import type { Schema } from '../../amplify/data/resource';
import { generateClient } from 'aws-amplify/data';

const client = generateClient<Schema>();

// create a reactive reference to the array of todos
const todos = ref<Array<Schema['Todo']["type"]>>([]);

function listTodos() {
  client.models.Todo.observeQuery().subscribe({
    next: ({ items, isSynced }) => {
      todos.value = items
     },
  }); 
}

async function createTodo() {
  // client.models.Todo.create({
  //   content: window.prompt("Todo content")
  // }).then(() => {
  //   // After creating a new todo, update the list of todos
  //   listTodos();
  // });
  const lambdaResponse = await client.queries.nexusTest({
    id: "nexus Test : "
  })

  const lambdaResponseJson = JSON.parse(JSON.stringify(lambdaResponse.data));

  alert(JSON.parse(lambdaResponseJson).data);

  // Dynamodb登録
  await client.models.Test.create({
    id: "12345678" as any,
  });

  // Dynamodb一覧取得
  const test = await client.models.Test.list();
  console.log(test);

}
    
// fetch todos when the component is mounted
 onMounted(() => {
  listTodos();
});

</script>

<template>
  <main>
    <h1>My todos</h1>
    <button @click="createTodo">+ new</button>
    <ul>
      <li 
        v-for="todo in todos" 
        :key="todo.id">
        {{ todo.content }}
      </li>
    </ul>
    <div>
      🥳 App successfully hosted. Try creating a new todo.
      <br />
      <a href="https://docs.amplify.aws/gen2/start/quickstart/nextjs-pages-router/">
        Review next steps of this tutorial.
      </a>
    </div>
  </main>
</template>
