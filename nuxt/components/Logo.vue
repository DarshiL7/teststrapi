<template>
  <div>
    <section class="bg-cultured">
      <div class="xl:container mx-auto">
        <h2>Trusted by Global Enterprises</h2>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    partner: Array
  }
}
</script>

<style lang="scss" scoped>
p {
  display: flex;
  justify-content: center;
  margin: 10px 0 0 0;

  font-family: 'Nunito';
  font-weight: 700;
  font-size: 58px;
  color: #37495c;

  span {
    color: #48b884;
  }
}
</style>
