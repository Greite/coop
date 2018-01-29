<template>
	<div>
		<div>
			<ul class="list-group">
				<li class="list-group-item"><center>Membre(s) <span class="badge badge-primary badge-pill">{{members.length}}</span></center></li>
    			<li class="list-group-item" v-for="member of members">
    				<span><strong>{{member.fullname}}</strong></span>
    				<span>{{member.email}}</span>
    				<span><button type="button" class="btn btn-outline-danger float-right" @click="membreSuppression(member._id)">Supprimer</button></span>
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
		methods: {
			membreSuppression(id){
				window.axios.delete('members/'+id);
			}
		}
	}
</script>