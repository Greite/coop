<template>
	<li class="list-group-item" v-if="!modif">
		<span class="badge badge-light" v-for="member of members" v-if="message.member_id == member._id">{{member.fullname}}</span>
		<br>
		<span>{{message.message}}</span>
		<span v-if="message.member_id === $store.state.member._id">
			<div class="btn-group float-right" role="group" aria-label="Basic example">
				<button type="button" class="btn btn-outline-warning" @click="modification">Modifier</button>
				<button type="button" class="btn btn-outline-danger" @click="messageSuppression(message._id)">Supprimer</button>
			</div>
		</span>
	</li>
	<li class="list-group-item" v-else>
		<span class="badge badge-light" v-for="member of members" v-if="message.member_id == member._id">{{member.fullname}}</span>
		<br>
		<input type="text" v-model="messageModif" @keyup.enter="modifierMessage(message._id)" @keyup.escape="modification">
		<span v-if="message.member_id === $store.state.member._id">
			<div class="btn-group float-right" role="group" aria-label="Basic example">
				<button type="button" class="btn btn-outline-warning" @click="modification">Modifier</button>
				<button type="button" class="btn btn-outline-danger" @click="messageSuppression(message._id)">Supprimer</button>
			</div>
		</span>
	</li>
</template>

<script>
export default {
	name: 'ConversationMessage',
	props: ['message'],
	data(){
		return {
			modif: false,
			messageModif: "",
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
		messageSuppression(id){
			window.axios.delete('channels/'+this.$route.params.id+"/posts/"+id);
			window.bus.$emit("rechargerMessage", id);
		},
		modification(){
			if (!this.modif) {
				this.messageModif = this.message.message;
				this.modif=true
			}else{
				this.modif=false
			}
		},
		modifierMessage(id){
			window.axios.put('channels/'+this.$route.params.id+"/posts/"+id, {
				message: this.messageModif
			}).then((response) => {
				this.modif=false
				this.message.message=this.messageModif
			})
		}
	}
}
</script>