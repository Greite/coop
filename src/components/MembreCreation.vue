<template>
  <div class="card" style="width: 18rem;">
  <form @submit="creerMembre">
    <div class="form-group">
      <label for="nom">Nom</label>
      <input type="text" v-model="fullname" class="form-control" id="nom" placeholder="Nom">
    </div>
    <div class="form-group">
      <label for="email">Adresse email</label>
      <input type="email" v-model="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email">
    </div>
    <div class="form-group">
      <label for="password">Mot de passe</label>
      <input type="password" v-model="password" class="form-control" id="password" placeholder="Mot de passe">
    </div>
    <center><button type="submit" class="btn btn-primary">Créer compte</button></center>
    <center><router-link to="/connexion">Annuler</router-link></center>
  </form>
</div>
</template>

<script>
export default {
  name: 'MembreCreation',
  data () {
    return {
      fullname: '',
      email: '',
      password: '',
    }
  },
  methods: {
    creerMembre(){
      window.axios.post('members', {
        fullname: this.fullname,
        email: this.email,
        password: this.password,
      }).then((response) => {
        console.log('Le membre '+response.data.fullname+' a été créé. Vous pouvez vous connecter.')
        this.$router.push({path: '/connexion'});
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
.card {
  padding: 10px;
  margin: 0 auto;
  float: none;
  margin-bottom: 10px;
}
</style>