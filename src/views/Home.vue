<template>
	<section class="container home">
		<data-table
			title="Faturalar"
			:columns="columns" 
			:rows="rows"/>
	</section>
</template>

<script>
	import DataTable from '../components/DataTable';

	export default {
		name: "Home",
		data() {
			return {
				columns: [
					{
						key: "key", 
						label: "#", 
						filter: false, 
						sortable: true,
						format: "number"
					},
					{
						key: "date", 
						label: "Tarih", 
						filter: false, 
						sortable: true,
						format: "date-time"
					},
					{
						key: "fatura_no", 
						label: "Fatura No", 
						filter: false, 
						sortable: true,
						format: "number"
					},
					{
						key: "name",
						label: "Adı Soyadı", 
						filter: false, 
						sortable: true,
						format: "string"
					},
					{
						key: "total", 
						label: "Tutar", 
						filter: false, 
						sortable: true,
						format: "tl"
					},
					{
						key: "banned", 
						label: "Kara, Beyaz Liste", 
						filter: false, 
						sortable: true,
						format: "boolean"
					},
					{
						key: "action",
						label: "İşlemler", 
						filter: false, 
						sortable: false,
						format: "action"
					}
				],
				rows: [
					{
						key: 0, 
						date: "24 Kasım 1989", 
						fatura_no: "15678", 
						name: "Arif GEVENCİ", 
						total: "12,70 ₺", 
						banned: "Beyaz Liste",
						action: "1",
						status: ""
					},
					{
						key: 1, 
						date: "12 Ocak 1989", 
						fatura_no: "32434", 
						name: "Ali VELİ", 
						total: "452,90 ₺", 
						banned: "Kara Liste",
						action: "2",
						status: "banned"
					}
				],
			};
		},
		components: {
			DataTable,
		},
	};
</script>

<style scoped lang="scss">
	.home {
		font-size: 9pt
	}
</style>
