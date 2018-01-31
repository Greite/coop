<template>
	<div class="mar-top">
		<ul class="list-group">
			<li class="list-group-item"><center>Membre(s) <span class="badge badge-primary badge-pill">{{members.length}}</span></center></li>
			<membreElement v-for="member of members" :key="member._id" :member="member"></membreElement>
		</ul>
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

<style scoped>
.mar-top{
	margin-top: 3.5rem;
}
</style>