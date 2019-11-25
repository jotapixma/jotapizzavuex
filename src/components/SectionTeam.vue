<template>
  <section class="team" id="team">
    <div class="container">
      <h3 class="bg-white-title">Equipo</h3>
      <div class="row">

        <div class="col" v-for="player in players" :key="player.name">
          <div class="team-card">
            <div class="card-body">
              <div class="img">
                <img :src="player.img" class="img-fluid">
              </div>
              <div class="text-card">
                <h6 class="name"> {{ player.name }}</h6>
                <p> {{ player.description }}</p>
              </div>
            </div>  
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'SectionTeam',
  computed: {
    ...mapState(['players'])
  },
}
</script>

<style lang="stylus">
  section.team
    padding: 50px 0
    .bg-white-title
      text-align: center
      padding-bottom: 30px
      color: black
    .team-card
      text-align: center
      .card-body
        .img
          width: 130px 
          margin: 0 auto
          img 
            border-radius: 130px
        .text-card
          .name
            margin-bottom: 0 
            padding-top: 15px 
          p
            margin-bottom: 0 
            padding-top:5px

</style>