<template>
	<li class="list-group-item">
    	<span><strong>{{member.fullname}}</strong></span>
    	<span>{{member.email}}</span>
    	<span><button type="button" class="btn btn-outline-danger float-right" @click="membreSuppression(member._id)">Supprimer</button></span>
    </li>
</template>

<script>
	export default {
		name: 'MembreElement',
		props: ['member'],
		data(){
			return {
			}
		},
		methods: {
			membreSuppression(id){
				window.axios.delete('members/'+id);
			}
		}
	}
</script>