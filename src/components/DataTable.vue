<template>
  <div>
    <h4 class="title">{{title}}</h4>
    <div class="data-table">
      	<table class="table table-striped table-hover">
			<thead>
				<tr>
					<th v-for="column in getColumns" :key="column.key" :id="'column-'+column.key">{{column.label}}</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(row, key) in getRows" :key="key" :id="'row-'+key">
					<th v-for="column in getColumns" :key="column.key + '-' + key">
						<template>
							<b-button v-if="column.key === 'action'" @click="deleted(row)" size="sm"><font-awesome-icon icon="trash"/></b-button>
						</template>
						<template>
							<label v-if="column.key === 'banned'" class="switch">
								<input type="checkbox" :checked="row[column.key]" @click="changeBanned(row)">
								<span class="slider round"></span>
							</label>
						</template>
						{{modify(row, column)}}
						<div v-if="column.key === 'banned'" class="banned">{{row[column.key] ? "Beyaz Listede" : "Kara Listede"}}</div>
					</th>
				</tr>
			</tbody>
      	</table>
    </div>
	<div class="example">
		<h5>Burası Örnektir!</h5>
		<pre>{{printRows(getRows)}}</pre>
	</div>
  </div>
</template>

<script>
	import Vue from 'vue';
	export default {
		name: "DataTable",
		computed: {
			columns(){
				return this.$store.getters.getColumn;
			},
			rows(){
				return this.$store.getters.getRows;
			}
		},
		props: {
			title: String,
		},
		data() {
			return {
				getRows: {
					...this.$store.getters.getRows
				},
				getColumns: {
					...this.$store.getters.getColumn
				},
			};
		},
		methods: {
			printRows: (row) => JSON.stringify(row, null, 4),
			modify(row, column) {
				switch (column.key) {
					case "key":
						return row[column.key]+1;
					case "date":
						return row[column.key];
					case "total":
						return `${row[column.key]} ₺`;
					case "banned":
						return null;
					case "action":
						return null;
					default:
						return row[column.key];
				}
			},
			deleted(data) {
				this.$store.dispatch("deleteApp", data);
				return this.getRows = {...this.$store.getters.getRows};
			},
			changeBanned(data) {
				data = {
					...data,
					banned: !data.banned,
				}
				this.$store.dispatch("updateApp", data);
				return this.getRows = {...this.$store.getters.getRows};
			}
		},
		components: {
			Vue,
		}
	};
</script>

<style lang="scss">
	.example {
		margin: 30px 0;
		display: flex;
		flex-direction: column;
		text-align: left;
		h5 {
			font-size: 9pt;
			background: #eaf1ee;
			padding: 10px;
			margin: 0;
			color: #5aa582;
		}
		pre {
			text-align: left;
			color: #3f3f3f;
			background: #f0f5f3;
			padding: 30px;
		}
	}
	.title {
		font-size: 10pt;
		font-weight: bold;
		color: #474747;
		padding: 15px;
		background: #d6e7df;
		border-bottom: 1px solid #d4d4d4;
		margin: 0;
	}
	.data-table {
		padding: 15px;
		background: #cdddd5;
		overflow-x: auto;

		.table {
			width: 100%;
			margin-bottom: 1rem;
			font-size: 8pt;
			color: #4c4c4c;

			thead th,
			td,
			th {
				border: none !important;
				vertical-align: middle;
			}

			.custom-control-label::before {
				top: 0;
			}

			.btn {
				padding: 0 15px;
				border: none;
				background: transparent;
			}

			.table-banned {
				background: #7e7e7e;
				color: #fff;
			}
		}
	}

	.switch {
		position: relative;
		display: inline-block;
		width: 50px;
		height: 25px;
		margin: 0;
	}

	.switch input { 
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #a2a2a2;
		-webkit-transition: .4s;
		transition: .4s;
	}

	.slider:before {
		position: absolute;
		content: "";
		height: 15px;
		width: 15px;
		left: 4px;
		bottom: 5px;
		background-color: white;
		transition: 0.4s;
	}

	input:checked + .slider {
		background-color: #6fba97;
	}

	input:focus + .slider {
		box-shadow: 0 0 1px #ccc;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	}
</style>