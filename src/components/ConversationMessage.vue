<template>
	<li class="list-group-item" v-if="!modif">
		<span>{{message.message}}</span>
    	<span v-if="message.member_id === $store.state.member._id">
    		<div class="btn-group float-right" role="group" aria-label="Basic example">
  				<button type="button" class="btn btn-outline-warning" @click="modification">Modifier</button>
  				<button type="button" class="btn btn-outline-danger" @click="messageSuppression(message._id)">Supprimer</button>
			</div>
		</span>
	</li>
	<li class="list-group-item" v-else>
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
				messageModif: ""
			}
		},
		methods: {
			messageSuppression(id){
				window.axios.delete('channels/'+this.$route.params.id+"/posts/"+id);
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