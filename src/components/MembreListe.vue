<template>
	<div>
		<div>
			<ul class="list-group">
				<li class="list-group-item"><center>Membre(s) <span class="badge badge-primary badge-pill">{{members.length}}</span></center></li>
    			<membreElement v-for="member of members" :member="member"></membreElement>
			</ul>
		</div>
	</div>
	
</template>

<script>

	import MembreElement from './MembreElement.vue'

	export default {
		name: 'MembreListe',
		components: {MembreElement},
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
		methods: {
		}
	}
</script>