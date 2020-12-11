<template>
  	<div class="container" id="detail">
    	<h4>Component Kullanımı</h4>
    	
		<p>
            <b>DataTable Component' i import etme</b>
            <pre>import DataTable from '($file)/components/DataTable'</pre>
        </p>

        <p>
            <b>DataTable Component' i kullanımı</b>
            <pre v-pre>{{ DataTable title=@Text Formatında :columns=@Obje Formatında :rows=@Obje Formatında }}</pre>
        </p>

        <p>
            <b>DataTable Component' i title</b>
            <pre>Table adı için kullanılan props</pre>
        </p>

        <p>
            <b>DataTable Component' i columns</b>
            <pre>Table kolonları belirlediğimiz props</pre>
        </p>

        <p>
            <b>DataTable Component' i rows</b>
            <pre>Tablemız için verilerin propsu</pre>
        </p>
  	</div>
</template>

<style scoped lang="scss">
    #detail {
        font-size: 10pt;
        p {
            padding: 15px;
            background: #ddd;
            margin: 5px 0;

            pre {
                margin: 0;
                overflow-x: auto;
            }
        }
    }
</style>