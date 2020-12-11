<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Anasayfa</router-link> |
			<router-link to="/about">Hakkında</router-link> |
			<router-link to="/detail">Detaylar</router-link>
		</div>

		<router-view />
	</div>
</template>

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

			&:hover,
			&.router-link-exact-active {
				text-decoration: none;
				color: #42b983;
			}
		}
	}
</style>
