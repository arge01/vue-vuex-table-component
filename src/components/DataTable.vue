<template>
  <div>
    <h4 class="title">{{title}}</h4>
    <div class="data-table">
      	<table class="table table-striped table-hover">
			<thead>
				<tr>
					<th v-for="column in columns" :key="column.key" :id="'column-'+column.key">{{column.label}}</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(row, key) in rows" :key="key" :id="'row-'+key">
					<th v-for="column in columns" :key="column.key + '-' + key">{{modify(row, column)}}</th>
				</tr>
			</tbody>
      	</table>
    </div>
  </div>
</template>

<script>
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
				
			};
		},
		methods: {
			modify(row, column) {
				return row[column.key];
			},
			deleted(data) {
				const index = this.items.findIndex((item) => item.key === data.index);
				this.items.splice(index, 1);
			},
		},
	};
</script>

<style lang="scss">
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

	.table {
		width: 100%;
		margin-bottom: 1rem;
		font-size: 8pt;
		color: #4c4c4c;

		thead th,
		td,
		th {
			border: none !important;
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
</style>