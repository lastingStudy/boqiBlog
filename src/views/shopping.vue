<template>
    <div>
        <span>购物</span>
        <div class="show">
          <div class="carousel">
            <div v-for="item in img " :key="item.id">
                <img class="imgCarousel" :src="item.imgUrl" alt="">
            </div>
          </div>
        </div> 
    </div>
  </template>
  
  <script>
export default {
  data() {
    return {
      images: [
        require('@/assets/img1.jpg'),
        require('@/assets/img2.jpg'),
        require('@/assets/img3.jpg'),
      ],
    };
  },
};
  </script>
  
  <style scoped>
.carousel-image {
  width: 100%;
  height: auto;
}
  </style>
  