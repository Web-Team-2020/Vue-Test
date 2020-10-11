<template>
    <div>
      <app-greeting></app-greeting>
    </div>
</template>

<script>
import Greeting from "@/components/Greeting";

export default {
  components: {
    'app-greeting': Greeting,
  }
}
</script>

<style>
 div{
   background-color: black;
 }
</style>
