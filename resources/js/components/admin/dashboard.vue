<template>
	<h1>Панель управления</h1>
</template>

<script>
	export default {
		created(){
			if(!User.loggedIn()){
				this.$router.push({name: 'login'})
			}
		},
	}
</script>

<style>

</style>