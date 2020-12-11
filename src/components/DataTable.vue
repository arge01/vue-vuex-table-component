<template>
    <div>
        <h4 class="title">{{title}}</h4>
        <div class="data-table">
            <b-table responsive striped hover :items="items" :fields="fields" :tbody-tr-class="rowClass">
                <template #cell(action)=data>
                    <b-button @click="deleted(data)" size="sm"><font-awesome-icon icon="trash"/></b-button>
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DataTable",
        props: {
            title: String,
            columns: Array,
            rows: Array,
        },
        data() {
            return {
                items: [...this.rows],
                fields: [...this.columns]
            }
        },
        methods: {
            rowClass(item, type) {
                if (!item || type !== 'row') return;
                if (item.status === 'banned') return 'table-banned';
            },
            deleted(data) {
                const index = this.items.findIndex(item => item.key === data.index) 
                this.items.splice(index, 1)
            }
        }
    }
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

            thead th, td, th {border: none!important}

            .custom-control-label::before {top: 0}

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