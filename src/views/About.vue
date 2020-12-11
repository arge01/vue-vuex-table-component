<template>
  	<div class="container" id="container">
    	<h4>Challenge Hakkında!</h4>
    	
		<div class="extenge">
    		<h4 class="title">İstenilenler</h4>
			<ul>
				<li>1. Component yapısı ile bootstrap Data Table</li>
				<li><b>2. Kırılımlar</b>:
					<ul>
						<li>2.1. Tarih <i>Date Format</i></li>
						<li>2.2. Fatura No <i>Number Format</i></li>
						<li>2.3. Tutar <i>Price Format</i></li>
						<li>2.4. Kara Beyaz Liste <i>Boolean Format</i></li>
						<li>2.5. Sil İşlemi <i>Action Format</i></li>
					</ul>
				</li>
			</ul>
    	</div>

		<div class="extenge">
    		<h4 class="title">Kullanılan Kütüphaneler</h4>
			<ul>
				<li>1. Router vue</li>
				<li>2. Bootstrap css</li>
				<li>3. Bootstrap vue</li>
				<li>4. Font Awesome vue</li>
				<li>5. State manegemnt vuex</li>
			</ul>
    	</div>
  	</div>
</template>

<style scoped lang="scss">
	#container {
		font-size: 10pt;
		.extenge {
			background: #e1e1e1;
			padding: 15px 0;
			margin-bottom: 5px;
			ul {
				list-style-type: none;
				text-align: left;

				li {
					i {
						font-size: 7pt;
						background: #e9e9e9;
						padding: 3px 5px;
					}
				}
			}
		}

		.title {
			font-size: 11pt;
			font-weight: bold;
			color: #474747;
			padding: 15px;
			background: transparent;
			border: none;
			margin: 0;
			text-align: left;
		}
	}
</style>
