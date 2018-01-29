<template>
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="collapse navbar-collapse" id="navbarNavDropdown">
				<ul class="navbar-nav">
    	  			<li class="nav-item">
    	    			<a class="nav-link" href="#/conversations">Conversations</a>
    	  			</li>
    	  			<li class="nav-item">
    	   				<a class="nav-link" href="#/membres">Membres</a>
    	  			</li>
    	  			<form class="form-inline" @submit="logOut">
    					<button class="btn btn-outline-danger my-2 my-sm-0" type="submit">Se déconnecter</button>
  					</form>
    			</ul>
			</div>
		</nav>
</template>

<script>
	export default {
		name: 'Navbar',
		data(){
			return {
			}
		},
		methods: {
			logOut(){
				window.bus.$emit("logout");
			}
		}
	}
</script>

<style scoped>

</style>