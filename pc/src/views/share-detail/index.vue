<template>
  <div class="share-detail wrap">
    <h2>share detail page</h2>
    <swiper :list="swiperlist"></swiper>
  </div>
</template>

<script>
import Swiper from "../../components/swiper";
export default {
  data() {
    return {
      swiperlist: [
        "https://blueprint1453.github.io/zu/img/swiper_01.jpg",
        "https://blueprint1453.github.io/zu/img/swiper_02.jpg",
        "https://blueprint1453.github.io/zu/img/swiper_03.jpg",
        "https://blueprint1453.github.io/zu/img/swiper_04.jpg",
        "https://blueprint1453.github.io/zu/img/swiper_05.jpg",
        "https://blueprint1453.github.io/zu/img/swiper_06.jpg",
        "https://blueprint1453.github.io/zu/img/swiper_07.jpg",
        "https://blueprint1453.github.io/zu/img/swiper_08.jpg"
      ]
    };
  },
  components: {
    Swiper
  }
};
</script>
