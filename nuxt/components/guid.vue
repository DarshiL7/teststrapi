<template>
  <div class="xl:container mx-auto px-4">
    <div class="mt-6 pb-3">
      <h1>The quick brown fox jumps over the lazy dog</h1>
    </div>
    <div class="pb-3">
      <h2>The quick brown fox jumps over the lazy dog</h2>
    </div>
    <div class="pb-3">
      <h3>The quick brown fox jumps over the lazy dog</h3>
    </div>
    <div class="pb-3">
      <h4>The quick brown fox jumps over the lazy dog</h4>
    </div>
    <div class="pb-3">
      <h5>The quick brown fox jumps over the lazy dog</h5>
    </div>
    <div class="pb-3">
      <h6>The quick brown fox jumps over the lazy dog</h6>
    </div>
    <div class="pb-3">
      <p class="para_lg_semib">The quick brown fox jumps over the lazy dog</p>
    </div>
    <div class="pb-3">
      <p class="para_lg">The quick brown fox jumps over the lazy dog</p>
    </div>
    <div class="pb-3">
      <p class="para_md">The quick brown fox jumps over the lazy dog</p>
    </div>
    <div class="pb-3">
      <p class="para_sm">The quick brown fox jumps over the lazy dog</p>
    </div>
    <div class="pb-3">
      <p>The quick brown fox jumps over the lazy dog</p>
    </div>
    <div class="pb-3">
      <p class="para_xs">The quick brown fox jumps over the lazy dog</p>
    </div>
    <div class="pb-3 mt-6">
      <button class="btn">Contact Us</button>
    </div>
    <div class="p-6 my-5 bg-black-0">
      <button class="btn btn_white">Contact Us</button>
    </div>
    <div class="pb-3">
      <button class="btn btn_trans">Contact Us</button>
    </div>
    <div class="pb-3">
      <button class="btn btn_sm">Contact Us</button>
    </div>
    <div class="pb-3">
      <button class="btn btn_md">Contact Us</button>
    </div>
    <div class="flex items-center my-6 flex-wrap">
      <div
        class="md:w-40 md:h-40 w-24 h-24 text-white text-center bg-primary self-center font-ptreg flex items-center justify-center"
      >ff533d</div>
      <div
        class="md:w-40 md:h-40 w-24 h-24 text-white text-center text-w bg-secondary self-center font-ptreg flex items-center justify-center"
      >0f1628</div>
      <div
        class="md:w-40 md:h-40 w-24 h-24 text-center bg-cultured self-center font-ptreg flex items-center justify-center"
      >F5F5F5</div>
      <div
        class="md:w-40 md:h-40 w-24 h-24 text-white text-center text-w bg-gray self-center font-ptreg flex items-center justify-center"
      >2b2b2b</div>
      <div
        class="md:w-40 md:h-40 w-24 h-24 bg-powderblue self-center font-ptreg flex items-center justify-center"
      >B6D9D5</div>
      <div
        class="md:w-40 md:h-40 w-24 h-24 text-white text-center text-w bg-black-0 self-center font-ptreg flex items-center justify-center"
      >000000</div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
@layer components {
  h1,
  .h1 {
    @apply text-3xl font-ptsemi leading-tight;
  }
  h2,
  .h2 {
    @apply text-2xl font-ptsemi pb-4 leading-normal;
  }
  h3,
  .h3 {
    @apply text-2xl font-ptsemi pb-2 leading-normal;
  }
  h4,
  .h4 {
    @apply text-xl  font-ptreg leading-normal;
  }
  h5,
  .h5,
  .sm_h3 {
    @apply text-lg font-ptreg;
  }
  h6,
  .h6 {
    @apply text-lg font-ptreg;
  }
  @screen md {
    h1,
    .h1 {
      @apply text-5xl;
    }
    h2,
    .h2 {
      @apply text-4xl;
    }
    h3,
    .h3 {
      @apply text-3xl;
    }
    h4,
    .h4 {
      @apply text-2xl;
    }
    h5,
    .h5,
    .sm_h3 {
      @apply text-xl;
    }
    h6,
    .h6 {
      @apply text-lg;
    }
  }
  @screen lg {
    h1,
    .h1 {
      @apply text-6xl;
    }
    h2,
    .h2 {
      @apply text-5xl pb-6;
    }
    h3,
    .h3 {
      @apply text-4xl;
    }
    h4,
    .h4 {
      @apply text-3xl;
    }
    h5,
    .h5,
    .sm_h3 {
      @apply text-2xl;
    }
    h6,
    .h6 {
      @apply text-xl;
    }
  }
  // Paragraphs

  .para_xl p,
  .para_xl {
    @apply text-xl font-ptsemi leading-tight;
  }
  .para_lg_semib p,
  .para_lg_semib {
    @apply text-xl font-ptsemi leading-tight;
  }
  .para_lg p,
  .para_lg {
    @apply text-lg font-ptreg leading-tight;
  }
  .para_md_semib p,
  .para_md_semib {
    @apply text-lg font-ptsemi leading-tight;
  }
  .para_md p,
  .para_md {
    @apply text-base font-ptreg leading-tight;
  }
  .para_sm p,
  .para_sm {
    @apply text-sm font-ptreg;
  }
  p {
    @apply text-sm font-ptreg;
  }
  .para_xs p,
  .para_xs {
    @apply text-sm font-ptreg;
  }

  @screen md {
    .para_xl p,
    .para_xl {
      @apply text-4xl font-ptsemi leading-tight;
    }
    .para_lg_semib p,
    .para_lg_semib {
      @apply text-2xl font-ptsemi leading-tight;
    }
    .para_lg p,
    .para_lg {
      @apply text-2xl font-ptreg leading-tight;
    }
    .para_md_semib p,
    .para_md_semib {
      @apply text-xl font-ptsemi leading-tight;
    }
    .para_md p,
    .para_md {
      @apply text-xl font-ptreg leading-tight;
    }
    .para_sm p,
    .para_sm {
      @apply text-lg font-ptreg;
    }
    p {
      @apply text-base font-ptreg;
    }
    .para_xs p,
    .para_xs {
      @apply text-sm font-ptreg;
    }
  }
  //Button

  .btn,
  input[type='submit'] {
    @apply font-ptsemi text-base rounded-md bg-primary py-2 px-6 text-white border-2 border-primary;
    &:hover {
      @apply bg-transparent text-primary transition-colors ease-in-out duration-300;
    }
    &.btn_md {
      @apply text-xl font-ptreg;
    }
    &.btn_sm {
      @apply text-base font-ptreg  py-1 px-4;
    }
    &.btn_trans {
      @apply bg-transparent text-primary;
      &:hover {
        @apply bg-primary text-white;
      }
    }
    &.btn_white {
      @apply bg-transparent text-white border-white;
      &:hover {
        @apply bg-white text-primary;
      }
    }
  }
  @screen lg {
    .btn,
    input[type='submit'] {
      @apply font-ptsemi text-lg py-2 px-10;
      &.btn_md {
        @apply text-2xl;
      }
      &.btn_sm {
        @apply text-lg py-1 px-6;
      }
    }
  }
}
</style>
