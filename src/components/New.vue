<template>
  <div class="container">
    <item v-for="story in stories" :key="story.data.id" :story="story"></item>
  </div>
</template>
