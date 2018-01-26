<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="collapse navbar-collapse" id="navbarNavDropdown">
				<ul class="navbar-nav">
      				<li class="nav-item">
        				<a class="nav-link" href="#/conversations">Convesation</a>
      				</li>
      				<li class="nav-item">
       					<a class="nav-link active" href="#/membres">Membres</a>
      				</li>
      				<form class="form-inline" @submit="logOut">
    					<button class="btn btn-outline-danger my-2 my-sm-0" type="submit">Se déconnecter</button>
  					</form>
    			</ul>
			</div>
		</nav>
		<div>
			<hr>
			<ul class="list-group">
				<li class="list-group-item">Membres ({{members.length}} membre(s))</li>
    			<li class="list-group-item" v-for="member of members">
    				<span><strong>{{member.fullname}}</strong></span>
    				<span>{{member.email}}</span>
    				<span><button type="button" class="btn btn-danger float-right" @click="membreSuppression(member._id)">Supprimer</button></span>
    			</li>
			</ul>
		</div>
	</div>
	
</template>

<script>
	export default {
		name: 'MembreListe',
		data(){
			return {
				members: []
			}
		},
		mounted(){
			window.axios.get('members')
			.then(response => {
      			this.members = response.data
			})
    		.catch(e => {
      			this.errors.push(e)
    		})
		},
		updated(){
			window.axios.get('members')
			.then(response => {
      			this.members = response.data
			})
    		.catch(e => {
      			this.errors.push(e)
    		})
		},
		methods: {
			logOut(){
				window.axios.delete('members/signout');
				this.$router.push({path: '/connexion'});
			},
			membreSuppression(id){
				window.axios.delete('members/'+id);
			}
		}
	}
</script>