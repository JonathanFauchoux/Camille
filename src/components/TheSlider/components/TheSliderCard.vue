<template>
    <div class="slider-card" :style="{backgroundImage: 'url('+ content.image + ')'}">
      <div class="slider-card__card-item">
        <div class="slider-card__card-item__date">
          <p>{{content.date}}</p>
        </div>
        <div class="slider-card__card-item__title">
          <h3>{{ content.title }}</h3>
          <p>{{ content.text }}</p>
        </div>
        <div class="slider-card__card-item__thematics">
          <a :href="content.thematics[0].url" :class="content.thematics[0].type"> {{ content.thematics[0].label }} </a>
        </div>
      </div>
    </div>

</template>
<script>
export default {
  name: 'TheSliderCard',
  props: {
    content: {
      type: Object,
      required: false,
      default: () => {
        return {

        }
      }
    }
  },
  created () {
    console.log(this.content)
  }
}
</script>
<style lang="scss">
.slider-card{
@include wrapper;
background-repeat: no-repeat;
background-position: center;
background-size: cover;
height: 50rem;
min-width: 75rem;
margin-right: 3rem;
border-radius: 12px;
position:relative;
right: -3rem;
margin-right: 6rem;
box-shadow: 0 50px 70px -1px rgba(0, 0, 0, 0.16);
&:nth-of-type(1){
  margin-left:10.5rem;
}
  &__card-item{
    height: 50rem;
    width: 37rem;
    background-color: white;

    border-radius: 12px;
    position: relative;
    right: 6rem;
    padding-left: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &__date{
    font-size: 1.3rem;
    color: colors(font);
    opacity: .5;
    padding-top: 8rem;
    margin-bottom: 1.6rem;
    margin:0;
    p{
      margin:0;
    }
    }
    &__title{
      h3{
        font-size: 2.6rem;
      color: colors(primary);
      padding-right: 6rem;
      padding-bottom: 1rem;
      }
      p{
        color: colors(font);
        font-size: 1.6rem;
        line-height: 2.75rem;
        padding-right: 6rem;
        padding-bottom: 10rem;
      }
    }
    &__thematics{
      padding-bottom: 4.6rem;
      .grossesse{
      padding: .5rem 1.5rem;
      color: #f7527c;
      background-color: rgba(164, 30, 64, 0.1);
      text-transform: uppercase;
      border-radius: 5rem;
      font-size: 1.2rem;
      font-weight: 600;
        &:hover{
          color: colors(primary);
        }
      }
      .sante{
      padding: .5rem 1.5rem;
      color: #13c267;
      background-color: rgba(19, 194, 103, 0.1);
      text-transform: uppercase;
      border-radius: 5rem;
      font-size: 1.2rem;
      font-weight: 600;
        &:hover{
          color: colors(primary);
        }
      }
      .parentalite{
      padding: .5rem 1.5rem;
      color: colors(primary);
      background-color: rgba(21, 59, 202, 0.1);
      text-transform: uppercase;
      border-radius: 5rem;
      font-size: 1.2rem;
      font-weight: 600;
        &:hover{
          color: colors(primary);
        }
      }
      .education{
      padding: .5rem 1.5rem;
      color: #ffbb03;
      background-color: rgba(255, 187, 3, 0.1);
      text-transform: uppercase;
      border-radius: 5rem;
      font-size: 1.2rem;
      font-weight: 600;
        &:hover{
          color: colors(primary);
        }
      }
    }
  }
}
</style>
