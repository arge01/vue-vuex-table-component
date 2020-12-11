<template>
	<div id="app">
		<div id="nav">
			<router-link v-for="(route, key) in router" :key="key" :to="route.path">{{route.text}}</router-link>
		</div>

		<router-view />
	</div>
</template>

<script>
	import { routes } from './router'

	export default {
		data() {
			return {
				router: routes,
			}
		},
		components: {
			routes,
		}
	}
</script>

<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 15px;
    	background: transparent;
    	display: flex;
    	align-items: center;
    	justify-content: center;

		a {
			font-weight: bold;
			color: #2c3e50;
			font-size: 9pt;
			margin: 0 5px;

			&:after {
				content: "|";
				margin-left: 15px;
				font-size: 1.3em;
				color: #d1d1d1;
				font-weight: lighter;
			}

			&:last-child:after{
				display: none;
			}

			&:hover,
			&.router-link-exact-active {
				text-decoration: none;
				color: #42b983;
			}
		}
	}
</style>
