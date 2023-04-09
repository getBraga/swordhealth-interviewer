<template>
    <div v-if="isLoading" class="loading-container">
    <span class="loading"></span>
  </div>

</template>
<script>
export default {
   name: "PageLoading",
    props: {
        isLoading: {
            type: Boolean,
            required: true
        }
    }
}
</script>
<style>
.loading-container{
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, .5);
  z-index: 10;

}
.loading{
  animation: is-rotating 1s infinite;
  position: absolute;
  width: 75px;
  height: 75px;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 50vh;
  border: 6px solid #d9d9d9;
  border-top-color: #000;
  border-radius: 50%;
}
@keyframes is-rotating {
  to{
    transform: rotate(1turn);
  }
}
</style>